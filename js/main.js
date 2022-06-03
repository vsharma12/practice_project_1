
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
let data_set;
buttons.forEach((element) => {
    element.addEventListener('click',(e)=>{
        // const slides = element.closest('[data-parent]').querySelector('[data-image]');
        // const attri = ele.parentElement.getAttribute('class');
        // let images = document.getElementsByClassName(attri);
        // let imge = Array.from(images);
        // console.log(imge);
        data_set = element.getAttribute('data-carousel-button') === 'next' ? 1 : -1 ;
        let images = document.querySelectorAll('.img img');//trying to get the image in which i want to add the feature of carousel then i will loop over them and ill get the index of the image that is click using the variable ele which the image that is click then ill change it using a change function that ill update the image shown to the user
        let image = Array.from(images); // this is the array of images..
        let indexOfImage = image.indexOf(ele); // This is the index of the image that is shown when you clicked an image
        let newIndex = indexOfImage + data_set; //new index of the image, old index of the image adds the data_set value according to which button is clicked
        if(newIndex < 0) newItndex =  image.length - 1;
        if(newIndex >= image.length) newIndex = 0;
        // now i have to make a function to change the image accordin to the new index variable to populate change in the image shown to the user 
        let newImage = image[newIndex]
        updateImage(newImage);
    });
});

function updateImage(Image) {
    document.querySelector('.popup-image img').src = Image.getAttribute('src');
}




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
