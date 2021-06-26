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
        perView: 2,
        swipe: true,
        gap:40,
        peek: {before:70,after:70},
        // autoPlay:true,


    }).mount({ Swipe, Controls,Breakpoints});

}