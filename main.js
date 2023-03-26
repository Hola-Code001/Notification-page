let markAll = document.querySelector("#mark-all");
let notNumber = document.querySelector("#not-number");

markAll.addEventListener("click", () =>{
  notNumber.textContent = '0';
  
  var notIcon = document.querySelectorAll(".red-dot");
  var clear = document.querySelectorAll(".unactive");

  for(let i = 0; i < clear.length; i++){
    clear[i].classList.remove('active');
  }

  for(let i = 0; i < notIcon.length; i++){
    notIcon[i].style.display = 'none'
  }
})