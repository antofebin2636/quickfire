export default function init({ el }) {
    document.querySelector('.has__child').addEventListener('click',
        function (){
            this.querySelector('.sub__menu').classList.toggle('active');
        });


    document.querySelector('.headerBanner__menu--item').addEventListener('click',
        function (){
            document.querySelector('.menu').classList.toggle('active');
        });


    document.querySelector('.menu-btn').addEventListener('click',function (){
        document.querySelector('.menu').classList.toggle('active');
    })
}