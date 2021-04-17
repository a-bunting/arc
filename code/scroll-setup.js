window.onload = function() {
    
    // register the scrolltrigger pluger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    const p1tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#panel-one', 
            start: 'top top', 
            end: '+=1500rem', 
            pin: true, 
            scrub: true
        }
    })

    p1tl.to('body', {duration: 1})
        .to(['.panel-one__image'], {
            duration: 1, opacity: 0 
        })
        .to(['.panel-one__text'], {
            duration: 1, opacity: 0 
        }, 1)
        .to('body', {duration: 1})

    // animations for panel two..
    // fade out
    gsap.to('.panel-two', {
        ease: 'expo.in',
        opacity: 0,
        scrollTrigger: {
            trigger: '#panel-two', 
            start: () =>  0.5*document.querySelector('.panel-two__text').offsetHeight + ' center',
            end: 'center top-=700rem', 
            scrub: true
        }
    })

    // right now fly ins
    gsap.from('#panel-two .panel-two__flare--item', {
        stagger: {
            each: 3, 
            onComplete: () => {
                // play slamming noise?
            }
        },
        ease: 'expo.out',
        scale: 6, 
        opacity: 0,
        scrollTrigger: {
            trigger: '#panel-two', 
            start: () =>  0.5*document.querySelector('.panel-two__text').offsetHeight + ' center',
            end: 'center top-=400rem', 
            scrub: true
        }  
    })

    // separate pin for panel-two
    gsap.to('.panel-two', {
        scrollTrigger: {
            trigger: '#panel-two', 
            start: () =>  0.5*document.querySelector('.panel-two__text').offsetHeight + ' center',
            end: 'center top-=1150rem', 
            pin: true
        }
    })

    // question marks section...
    // in
    gsap.from('.question-marks__qm', {
        opacity: 0, stagger: 0.1, 
        scrollTrigger: {
            trigger: '#question-marks', toggleActions: 'play none none reverse',
            start: 'center center', 
            end: 'center top-=300rem', 
            scrub: true
        } 
    })
    // out
    gsap.to('.question-marks__qm', {
        opacity: 0, stagger: 0.1, scale: 8,
        scrollTrigger: {
            trigger: '#question-marks', toggleActions: 'play none none reverse',
            start: 'center top-=700rem', 
            end: 'center top-=1300rem', 
            scrub: true
        }
    })

    // and the text fades out.
    gsap.to('.question-marks__text', {
        opacity: 0, ease: 'expo.in',
        scrollTrigger: {
            trigger: '#question-marks', toggleActions: 'play none none reverse', 
            start: 'center center',
            end: 'bottom+=70rem top-=900rem',
            scrub: true
        }
    })

    // pin the section
    gsap.to('.question-marks', {
        scrollTrigger: {
            trigger: '#question-marks', 
            start: 'center center',
            end: 'center top-=1450', 
            pin: true, scrub: true
        }
    })

    // panel 3
    // what does an arc do
    gsap.to('#panel-three', {
        scrollTrigger: {
            trigger: '#panel-three', 
            start: 'top top', 
            end: '+=5000rem', 
            pin: true, 
            scrub: true
        }
    })

    gsap.to('.panel-three__text', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#panel-three', 
            start: '+=2000rem', 
            end: '+=2500rem', 
            scrub: true, 
        }
    })

    gsap.to('.close', {
        top: '105%',
        rotateY: 360, 
        scrollTrigger: {
            trigger: '.panel-three', 
            start: 'top top', 
            end: '+=2000rem', 
            scrub: true
        }
    })

    gsap.to('.medium', {
        top: '105%',
        rotateY: 360, 
        scrollTrigger: {
            trigger: '.panel-three', 
            start: 'top top', 
            end: '+=3500rem', 
            scrub: true
        }
    })

    gsap.to('.far', {
        top: '105%',
        rotateY: 360, 
        scrollTrigger: {
            trigger: '.panel-three', 
            start: 'top top', 
            end: '+=5000rem', 
            scrub: true
        }
    })

    // panel-four
    gsap.to('#panel-four', {
        scrollTrigger: {
            trigger: '#panel-four', 
            start: 'top top', 
            end: '+=2000rem', 
            pin: true, 
            scrub: true
        }
    })
}

