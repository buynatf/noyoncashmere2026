const swiper = new Swiper(".mySwiper",{

    loop:true,

    autoplay:{
        delay:5000,
        disableOnInteraction:false
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true
    }

});