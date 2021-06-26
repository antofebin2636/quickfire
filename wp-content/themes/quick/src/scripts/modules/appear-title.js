import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText'
import { ElementObserver } from 'viewprt';

export default function init() {
  
    const title = document.querySelectorAll('[data-appear]');
    const line = document.querySelectorAll('[data-line]');
    const show =        document.querySelectorAll('[data-show]');
    var wrapper = gsap.utils.toArray(".homeBanner__linkWrapper");

    var upTxt = document.querySelectorAll('[data-up]');

    if (title) {
        title.forEach((element) => {
            gsap.set(element, { autoAlpha: 0 });

            ElementObserver(element, {

                onEnter: () => {

                    const timeline = gsap.timeline({
                            delay: 0.6
                        }
                    );

                    const split = new SplitText(element, {
                        type: 'words',
                    })
                    gsap.set(element, { autoAlpha: 1 });
                    timeline.fromTo(split.words, {
                            x: -15,
                            opacity: 0,

                        },
                        {
                            duration: 1,
                            x: 0,
                            autoAlpha:1,
                            opacity: 1,
                            stagger: 0.1
                        }
                    ).from(line,{x:-20,autoAlpha:0,duration:0.5},'-=1')

                },
                offset: 0,
                once: true,
            });
        });
    }

    wrapper.forEach(wrap => {

        const boxes = wrap.querySelectorAll('[data-show]');
        ElementObserver(wrap, {
            onEnter:() =>{

                gsap.from(boxes, {
                    opacity:0,
                    y:100,
                    ease: "expo.out",
                    duration:2,
                    stagger: 0.2,
                });
            }
            ,
            offset: 0,
            once: true,
        });

    });



    if (upTxt) {
        upTxt.forEach((element) => {
            gsap.set(element, { autoAlpha: 0 });

            ElementObserver(element, {

                onEnter: () => {
                    console.log(1);
                    gsap.set(element, { autoAlpha: 1 });
                    gsap.from(element, {
                        opacity:0,
                        y:50,
                        ease: "expo.out",
                        duration:3,
                        stagger: 0.2,
                    });

                },
                offset: 0,
                once: true,
            });
        });
    }




}
