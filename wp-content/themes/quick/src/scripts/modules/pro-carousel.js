import Glide, {  Swipe, Controls,Breakpoints,Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

export default function init({ el }) {
    /* The original element that requested the module */
    const context = el;
    // eslint-disable-next-line no-new

    const elements = {
        carousel : context.querySelector('[data-carousel]'),

    }


    new Glide(elements.carousel, {
        type: 'carousel',
        perView: 3,
        autoplay: 6000,
        swipe: true,
        gap:40,
        peek: {before:0,after:250},
        // autoPlay:true,
        breakpoints:{
            440:{
                perView:1,
                peek: {before:0,after:100},
            },
            825:{
                perView: 2,
                gap: 20,
                peek: {before:0,after:150},

            },
            1024:{
                perView: 2,
                gap:20,
                peek: {before:0,after:150},
            },
            1880:{
                perView: 2,
                gap: 40,
                peek: {before:0,after:250},

            },
            2000:{
                perView: 3,
                gap: 40,
            },

        },

    }).mount({ Swipe, Controls,Breakpoints,Autoplay});

}