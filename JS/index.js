

    // var swiper = new Swiper('.swiper-container', {
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
           
    //     },
        
    // });
    


    // Films by EIP
    new Swiper("#swiper-2", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 24,
        // pagination: {
        //     el: ("#swiper-2 .swiper-custom-pagination"),
        //     clickable: true,
        //     renderBullet: function (index, className) {
        //     return `<div class=${className}>
        //         <span class="number">${index + 1}</span>
        //         <span class="line"></span>
        //         </div>`;
        //     }
        // },
        lazyLoading: true,
        loop: true,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: "#nav-right",
            prevEl: "#nav-left"
        },
        breakpoints: {
            800: {
                slidesPerView: 2
            },
            3000: {
                slidesPerView: 4
            }
        }
    });