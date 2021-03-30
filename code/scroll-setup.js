window.onload = function() {
    
    // register the scrolltrigger pluger with GSAP
    gsap.registerPlugin(ScrollTrigger);


    gsap.to(['.panel-one img'], {
        opacity: 0, 
        ease: 'none',
        scrollTrigger: {
            trigger: '#panel-one img', 
            pin: true,
            start: () => 
                'top ' + document.querySelector('.panel-one__text').offsetTop * 0.5
            ,  
            end: 'bottom top-=40%',
            scrub: true
        }
    })

    gsap.to(['.panel-one__text'], {
        opacity: 0, 
        ease: 'expo.in', 
        scrollTrigger: {
            trigger: '.panel-one__text', 
            start: () => 
                'top ' + document.querySelector('.panel-one__text').offsetTop
            , 
            end: 'bottom top-=50%',
            pin: true,
            scrub: true
        }  
    })

    // animations for panel two..
    gsap.to('.panel-two', {
        ease: 'expo.in',
        opacity: 0,
        scrollTrigger: {
            trigger: '#panel-two', 
            start: () =>  0.5*document.querySelector('.panel-two__text').offsetHeight + ' center',
            end: 'center top-=700', 
            scrub: true
        }
    })

    gsap.from('#panel-two .panel-two__flare--item', {
        stagger: {
            each: 2, 
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
            end: 'center top', 
            scrub: true
        }  
    })

    // separate pin for panel-two
    gsap.to('.panel-two', {
        scrollTrigger: {
            trigger: '#panel-two', 
            start: () =>  0.5*document.querySelector('.panel-two__text').offsetHeight + ' center',
            end: 'center top-=700', 
            pin: true
        }
    })

    // question marks section...
    gsap.from('.question-marks__qm', {
        opacity: 0, 
        stagger: 0.1, 
        scrollTrigger: {
            trigger: '#question-marks', 
            start: 'center center', 
            end: 'center top', 
            toggleActions: 'play none none reverse',
            scrub: true
        } 
    })

    gsap.to('.question-marks__qm', {
        opacity: 0, 
        stagger: 0.1,
        scale: 8,
        scrollTrigger: {
            trigger: '#question-marks', 
            start: 'center top-=300', 
            end: 'center top-=800', 
            toggleActions: 'play none none reverse', 
            scrub: true
        }
    })

    gsap.to('.question-marks', {
        scrollTrigger: {
            trigger: '#question-marks', 
            start: 'center center',
            end: 'center top-=1200', 
            pin: true
        }
    })

    gsap.to('.question-marks__text', {
        opacity: 0,
        ease: 'expo.in',
        scrollTrigger: {
            trigger: '#question-marks', 
            start: 'center center',
            end: 'bottom+=700 top', 
            markers: true, 
            toggleActions: 'play none none reverse', 
            scrub: true
        }
    })
    

}

