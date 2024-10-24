let products = {
    data: [
    {
        productName: "Retinol 0.5",
        // image: "/Product/IMAGEOBAGI/Retinol05.jpg",
        link: "Retinol05.html",
    },
    {
        productName: "BHA",
        link: "BHA.html",
    },
    ],
};
// for (let i of products.data) {
//     // Create Card
//     let Card =document.createElement("form");
//     // image div
//     let imgContainer = document.createElement("form");
//     imgContainer.classList.add("image-container");
//     // image tag
//     let image =document.
// }

// for (let i of products.data) {
//     // Create Card
//     let Card =document.createElement("form");
//     // // image div
//     // let imgContainer = document.createElement("form");
//     // imgContainer.classList.add("image-container");
//     // // image tag
//     // let image =document.
//     let container = document.createElement("form");
//     container.classList.add("container");

//     let name = document.createElement("h5");
//     name.classList.and("product-name");
//     name.innerText = i.productName.toUpperCase();
//     container.appendChild(name);
// };
// document.getElementById("search").addEventListener("click", ()=>{
// let searchInput = document.getElementById("search-input").value;
// let elements = document.querySelectorAll("product-name");
// });

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search');

searchButton.addEventListener('click', function(){
    localStorage.setItem('searching', searchInput.value);
    window.location.href = 'link';
});