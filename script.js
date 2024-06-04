let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function navigateTo(sectionId) {
    let sections = document.getElementsByClassName("info-section");
    for (let section of sections) {
        section.classList.remove("active");
    }
    document.getElementById(sectionId).classList.add("active");
}
