function loginout(){
  console.log("클릭")
  if(localStorage.getItem('userCode')!=null){
    console.log("로그아웃")
    logout();
    window.location.reload()
  }
  else{
   window.location="http://127.0.0.1:5500/html/login.html"}

}

window.onload=function main(){
    if(localStorage.getItem('userCode')!=null)
        document.getElementById("login").textContent="로그아웃";     
}



function logout(){
  localStorage.removeItem('userCode')
  alert("로그아웃되었습니다.")
}

function loadItems(){
  url="http://localhost:8080/mycloset/?userCode="+localStorage.getItem('userCode')
    return fetch(url,{
      method:"GET"
    })
    .then((response)=>response.json())
    .then((json)=>json.clothesList)
}
function displayItems(clothesList) {
  console.log(clothesList)
    const container = document.querySelector(".img_list");
    container.innerHTML = clothesList.map((item) => createHTMLString(item)).join(""); // join을 해서 붙여줘야함
  }

function search(){

}
  
  //items object를 HTML li형태로 리턴
function createHTMLString(item) {
    return `
    <li class="item" onclick="location.href='/html/closetinfo.html?alt='+${item.clothesId}">
          <img src="${item.clothesImage}" alt="${item.type}" class="item__thumbnail" />
          <br></br>
          <span class="item__description">${item.color}, ${item.type}</span>
          
    </li>`;
  }

loadItems().then((clothesList)=>{
    console.log(clothesList);
    displayItems(clothesList);
})

