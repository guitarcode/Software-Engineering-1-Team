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

function loadFile(input){
  const all=document.getElementById('image-show')
  all.innerHTML="";
  var file = input.files[0]

  var newImage=document.createElement("img");
  newImage.setAttribute("class",'img')

  newImage.src = URL.createObjectURL(file);   

  newImage.style.width = "30%";
  newImage.style.height = "30%";
  newImage.style.objectFit = "contain";

  var container = document.getElementById('image-show');
  container.appendChild(newImage);
  console.log(newImage)
  console.log("이미지 삽입 성공")
}   


function deletefile(){
    const urlparam= new URL(location.href).searchParams;
    console.log(urlparam)
    const clothnum = urlparam.get('alt');
    console.log(clothnum)

    const delurl='http://localhost:8080/mycloset/'+clothnum+"?userCode="+localStorage.getItem('userCode')
    console.log(delurl)
    fetch(delurl, {
        method: "DELETE",
      }).then(response=>response.json())
      .then(data=>{
        console.log(data)
        alert(data.message)
        window.location = "http://127.0.0.1:5500/html/mycloset.html"})
      .catch(error=>console.log(error));
}

window.onload=function file(){
  const urlparam = new URL(location.href).searchParams;
  console.log(urlparam)
  const clothnum = urlparam.get('alt');
  console.log(clothnum)

  url = 'http://localhost:8080/mycloset/' + clothnum + "?userCode=" + localStorage.getItem('userCode')
  fetch(url, {
    method: "GET"
  })
    .then((response) => response.json())
    .then((json) => {
    console.log(json.clothes)
  var length = document.getElementById('season').options.length;
  console.log(length)
    for(i=0;i<length;i++){
      if(document.getElementById('season').options[i].value==json.clothes.season){
        document.getElementById('season').options[i].selected=true;
        console.log(document.getElementById('season').options[i].selected)
        break;
      }
    }
    var length = document.getElementById('type').options.length;
    for(i=0;i<length;i++){
      if(document.getElementById('type').options[i].value==json.clothes.type){
        document.getElementById('type').options[i].selected=true;
        break;
      }
    }
    var length = document.getElementById('color').options.length;
    for(i=0;i<length;i++){
      if(document.getElementById('color').options[i].value==json.clothes.color){
        document.getElementById('color').options[i].selected=true;
        break;
      }
    }
    var length = document.getElementById('material').options.length;
    for(i=0;i<length;i++){
      if(document.getElementById('material').options[i].value==json.clothes.material){
        document.getElementById('material').options[i].selected=true;
        break;
      }
    }
    const viewimage=document.createElement("img");
    viewimage.setAttribute("class",'img')
    viewimage.src=json.clothes.clothesImage;
    viewimage.style.width = "30%";
    viewimage.style.height = "30%";
    viewimage.style.objectFit = "contain";
    var container = document.getElementById('image-show');
    container.appendChild(viewimage);
    console.log(viewimage);

  })
}

function updatefile(){

  const season=document.getElementById('season')
    const type=document.getElementById('type')
    const color=document.getElementById('color')
    const material=document.getElementById('material')
    const UploadPic=document.getElementById('UploadPic')
    console.log(UploadPic)

    const urlparam= new URL(location.href).searchParams;
    const clothnum = urlparam.get('alt');

    console.log(UploadPic.files[0])


    const formdata= new FormData();
    formdata.append('file',UploadPic.files[0])
    formdata.append(
      "jsonClothesDto",
      JSON.stringify({
          season: season.options[season.selectedIndex].value,
          type:type.options[type.selectedIndex].value,
          color:color.options[color.selectedIndex].value,
          material: material.options[material.selectedIndex].value,
      })
    )
    formdata.append('userCode',localStorage.getItem('userCode'))


    console.log(UploadPic.files[0]);
    console.log(localStorage.getItem('userCode'));




  fetch('http://localhost:8080/mycloset/'+clothnum, {
      method: "PUT",
      body: formdata
    }).then((response) => response.json())
    .then((data) => {
      if(data.success==true) {
        window.location="http://127.0.0.1:5500/html/mycloset.html"
        return false}
      else{
        alert(data.message);
      }
  }).catch(error => {
    console.error(error)
  })
  console.log("fetch 요청은 성공")

}



