
let main_btn = document.getElementById('all_btn');
let things = document.querySelectorAll('.button-group button');
let items  = document.querySelectorAll('.element-item');

for(let i = 0 ; i<things.length;i++){

    things[i].addEventListener('click',(e)=>{

        for (let j = 0; j<things.length; j++) {
            things[j].classList.remove('active');
        }
        var t = e.target;
        t.classList.add('active');
        let dataFilter = t.getAttribute('data-filter')
        
        items.forEach((element) => {
            let dataItem = element.getAttribute('data-item');
            if(dataFilter != dataItem){
                element.classList.add('hide');
            }else{
                element.classList.remove('hide');
            }
            
        });
    });
}
main_btn.addEventListener('click',()=>{
    items.forEach((element) => {
        element.classList.remove('hide');
    });
})



// ----------------- Start of clickable image ------------------------------\\
let Imagees = document.querySelectorAll('.our-projects .img img');
var ele ; //variable intialised to pass value from one function to another!!!.

Imagees.forEach((element) => {
        element.addEventListener('click',(e)=>{
        let ImgSrc= e.target.getAttribute("src"); 
        e.target.setAttribute("data-active", true);
        document.querySelector('.popup-image img').src= ImgSrc;
        document.querySelector('.popup-image').style.display='block';
        ele = element
    })
});

function exit() {
    document.querySelector('.popup-image').style.display='none';
    ele.removeAttribute("data-active");
}
// ----------------- End of clickable image ------------------------------\\



// -----------------  Making carousel image ------------------------------\\
let buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach((element) => {
    element.addEventListener('click',(e)=>{
        const data_set = element.getAttribute('data-carousel-button') === 'next' ? 1 : -1 ;
        const slides = element.closest('[data-parent]').querySelector('[data-image]');
        console.log(slides)
    });
});




// function Image_popup(Image) {
//     let ImgSrc= Image.getAttribute("src");
//     let spanImage = document.querySelector('.popup-image img').src= ImgSrc;
//     document.querySelector('.popup-image').style.display='block';
// }




// let carouselImages = document.querySelectorAll('.element-item .our-projects .img img');
// let a = Array.from(carouselImages);
// a.addEventListener('Onclick',()=>{
//    console.log('hey')
// })



// console.log('data Item',dataItem)
// console.log('data Filter',dataFilter)

// console.log(element.getAttribute('data-item'))
// console.log(dataItem)
// if(element.getAttribute('data-item').toUpperCase()  != dataFilter.toUpperCase()){
//     // element.classList.add('hide');
//     // console.log(element)
//     console.log(items)
//     // console.log(element.getAttribute('data-item'))
//     // console.log(dataFilter)
// }
// things.forEach(element => {
//     element.addEventListener('click',(e)=>{
//         element.classList.remove('active');
//         e.target.classList.add('active');
//     })
// });
