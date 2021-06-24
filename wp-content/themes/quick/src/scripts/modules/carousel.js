import Glide, { Autoplay, Swipe, Controls,Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

export default function init({ el }) {
    /* The original element that requested the module */
    const context = el;
    // eslint-disable-next-line no-new

    const elements = {
        carousel : context.querySelector('[data-carousel]'),
    }

    new Glide(elements.carousel, {
        type: 'gallery',
        perView: 1,
        autoplay: 6000,
        swipe: true,
    }).mount({ Swipe, Controls,Breakpoints});

}