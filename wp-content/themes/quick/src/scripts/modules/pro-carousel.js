import Glide, {  Swipe, Controls,Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

export default function init({ el }) {
    /* The original element that requested the module */
    const context = el;
    // eslint-disable-next-line no-new

    const elements = {
        carousel : context.querySelector('[data-carousel]'),

    }

    new Glide(elements.carousel, {
        type: 'carousel',
        perView: 4,
        autoplay: 6000,
        swipe: true,
        //gap:16,
        peek: {before:0,after:100},
        autoPlay:true,
        breakpoints:{
            414:{
                perView: 1,
                gap: 20,

            },
            1024:{
                gap:20,
                perView: 2,

            },
            1440:{
                gap: 20,
                perView: 3,
            },

        },

    }).mount({ Swipe, Controls,Breakpoints});

}