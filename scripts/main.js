let catPic1 = "images/sphinx-cat.jpg";
let catPic2 = "images/sphinx-cat2.jpg";
let imgSrc = document.querySelector("img");
document.querySelector("button").addEventListener("click", function () {
  let currentSrc = imgSrc.getAttribute("src");
  if (currentSrc === catPic1) {
    imgSrc.setAttribute("src", catPic2);
  } else {
    imgSrc.setAttribute("src", catPic1);
  }
});

function setUserName() {
  let userName = prompt("请输入用户名");
  if (!userName) {
    setUserName();
  } else {
    localStorage.setItem("userName", userName);
  }
}

document.querySelector("#getUser").addEventListener("click", function () {
  let userName = localStorage.getItem("userName");
  // document.querySelector("#user").setAttribute(userName);
  alert(userName);
});

setUserName();
