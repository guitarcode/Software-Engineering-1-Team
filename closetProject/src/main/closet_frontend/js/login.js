function login() {
    console.log("로그인 버튼클릭.")
    const id = document.querySelector("#id").value
    const password = document.querySelector("#password").value
    
    // json만들기
    const data = {}
    data.id = id
    data.password = password
  

    // 로그인 검증
    fetch('http://localhost:8080/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((data) => {
      console.log(data)
      if(data.success==true) {
        alert(data.message)  
      localStorage.setItem('userCode', data.userCode)    
      window.location = "http://127.0.0.1:5500/html/main.html"}
      else{
        alert(data.message)
        return null
      }
    })
}

