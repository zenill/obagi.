let dropdown =document.querySelector('.dropdown');
let dropdownBtn = document.getElementById('dropdown-btn');

dropdownBtn.addEventListener('click', ()=>{
    dropdown.classList.toggle('dropdown-active');
});