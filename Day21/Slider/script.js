const slides = document.querySelectorAll(".slide")

var counter = 0;
console.log(slides)

slides.forEach(
    (slide, index)=>{
        slide.style.left = `${index * 100}%`
    }
)