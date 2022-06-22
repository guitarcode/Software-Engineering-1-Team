function loadFile(input){

    var file = input.files[0]

    var newImage=document.createElement("img");
    newImage.setAttribute("class",'img')

    newImage.src = URL.createObjectURL(file);   

    newImage.style.width = "70%";
    newImage.style.height = "70%";
    newImage.style.objectFit = "contain";

    var container = document.getElementById('image-show');
    container.appendChild(newImage);
    console.log("이미지 삽입 성공")


}   



function addfile(){



    const season=document.getElementById('season')
    const type=document.getElementById('type')
    const color=document.getElementById('color')
    const material=document.getElementById('material')
    const UploadPic=document.getElementById('UploadPic')
    console.log(UploadPic)


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



    fetch('http://localhost:8080/mycloset/', {
        method: "POST",
        body: formdata
      }).then((response) => response.json())
      .then((data) => {
        if(data.success==true) {
          alert(data.message);
        }
        else{
          alert(data.message);
        }
    }).catch(error => {
      console.error(error)
    })

    console.log("fetch 요청은 성공")

}

