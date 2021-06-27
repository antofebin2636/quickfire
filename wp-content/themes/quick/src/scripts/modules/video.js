import $ from 'jquery';

export default function init() {
    $('.videoImg__box').on('click',function (){
        $('.Popup__wrapper').toggle();
        $('body').toggleClass('disable');
    });

    $('.close').on('click',function (){
        $('.Popup__wrapper').toggle();
        $('body').toggleClass('disable');
    });
}