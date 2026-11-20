const toggleList = document.querySelector(".toggle-icon");
const navLinks = document.querySelector(".nav-links");
const galleryImgages = document.querySelectorAll(".gallery-img");
const eachImages = document.querySelectorAll(".each-image");
const imgDisplay = document.getElementById("img-display");
const imageDisplay = document.querySelector(".image-display");
const closeBtn = document.querySelector(".close-btn");
const navItems = document.querySelectorAll(".nav-links li a")




toggleList.addEventListener("click", ()=>{
   const isOpen = navLinks.classList.toggle("show");
    toggleList.innerHTML = isOpen ? '<span class="material-symbols-outlined">close</span>' : '<span class="material-symbols-outlined">menu</span>'

})

navItems.forEach(item=>{
    item.addEventListener("click",()=>{
        navItems.forEach(nav =>{
            nav === item  ? nav.classList.add("active") : nav.classList.remove("active");
        })
    })
})


eachImages.forEach(eachImage=>{
    eachImage.addEventListener("click",()=>{
         imageDisplay.style.display = "flex"
         imgDisplay.src =  eachImage.src
    })
})

// galleryImgages.forEach(galleryImgage=>{
//     galleryImgage.addEventListener("click",()=>{
//         eachImages.forEach(eachImage=>
//         {
//            imageDisplay.style.display = "flex"
//            imgDisplay.src =  eachImage.src
//         }
//         )
        
//     })
// })

closeBtn.addEventListener("click",()=>{
    imageDisplay.style.display = "none"
})