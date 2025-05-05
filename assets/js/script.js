function loaderAnimation() {
    var tl = gsap.timeline()
    tl.to(".loaderBox", {
        display: "flex"
    })
    tl.to(".loader", {
        duration: 5.5,
        display: "none"
    })
    tl.to(".loaderBox", {
        duration: 2,
        transform: "translateY(-1000px)",
        display: "none"
    })
}
loaderAnimation()

let opennav = document.querySelector(".opennav")
let closenav = document.querySelector(".closenav")
let header = document.querySelector("header nav")

opennav.addEventListener("click",()=>{
    header.classList.add("active")
})
closenav.addEventListener("click",()=>{
    header.classList.remove("active")
})
