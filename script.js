function sendWhatsAppMessage(){

    const number = "+8766453107";

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    console.log(name+ message);

    const url = "https://wa.me/"  + number +"?text="+ "Name : " +name+ "%0a" +"Message : " +message + "%0a%0a";
    
    window.open(url, '_blank').foucs();

}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 123;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}


// function colorChange(){

//     const cards = document.getElementById('cards-1');
//     cards.style.backgroundColor="#e2ded9";
// }
