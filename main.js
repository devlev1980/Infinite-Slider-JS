let images = document.querySelectorAll('.slider img');
// console.log('images',images)
let current = 0;





// document.querySelector('.slider').addEventListener('click',slider);
document.querySelector('.previous').addEventListener('click',prevSlide);
document.querySelector('.next').addEventListener('click',nextSlide);


function slider() {
    for (let index = 0; index < images.length; index++) {
        images[index].classList.add('opacity-0');
    }
    images[current].classList.remove('opacity-0');
    // if(current  == images.length -1){
    //         current = 0
    // }else{
    //     current ++;
    // }
}
slider()

function prevSlide() {
    if(current -1   ==  -1){
        current = images.length -1 ;
}else{
    current --;
}
    slider() 
}
function nextSlide() {
    if(current  == images.length -1){
        current = 0
}else{
    current ++;
}
    slider()
    
}