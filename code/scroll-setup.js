window.onload = function() {
    
    // register the scrolltrigger pluger with GSAP
    gsap.registerPlugin(ScrollTrigger);
    // set anyd efaults...

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

    // panel-four\
    // get up the values and ids of the goods...
    let goodsValues = [
        { name: 'biolight',     initialQuantity: 3446, id: 'goodsBiolight'},
        { name: 'lubricant',    initialQuantity: 156,  id: 'goodsLubricant'},
        { name: 'superalloys',  initialQuantity: 654,  id: 'goodsSuperalloys'}, 
        { name: 'pearls',       initialQuantity: 78,   id: 'goodsPearls'},
        { name: 'compoundFluid',initialQuantity: 1328, id: 'goodsCompound'}
    ];

    let goodsCounter = {current: 0, max: 350};

    setGoodsValues();

    const p4tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#panel-four', 
            start: 'top top', 
            end: '+=3000rem', 
            pin: true, 
            scrub: true
        }
    })

    p4tl.to('body', {})
        .from('.panel-four__goods--row', {
            duration: 2, opacity: 0, stagger: .5, x: -200
        })
        .from('.panel-four__background', {
            duration: 2, x: "-100%"
        }, 0)
        .to(goodsCounter, {
            current: goodsCounter.max, duration: 4, onUpdate: () => {
                setGoodsValues();
            }
        })
        .to('.panel-four__goods--animatedPicture', {
            opacity: 0, y: -50, duration: 0.5, repeat: 8
        }, "<")

    function setGoodsValues() {
        for(let i = 0; i < goodsValues.length; i++) {
            document.getElementById(''+goodsValues[i].id).innerHTML = (goodsValues[i].initialQuantity + goodsCounter.current).toFixed();
        }
    }

    // panel 5
    gsap.to('#panel-five', {
        scrollTrigger: {
            trigger: '#panel-five', 
            start: 'top top', 
            end: '+=1000rem', 
            pin: true, 
            scrub: true
        }
    })

    // panel 6
    const p6tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#panel-six', 
            start: 'top top', 
            end: '+=3000rem', 
            pin: true, 
            scrub: true
        }
    })


    let arcReward = 400;
    const swapThreadSize = 100;
    let totalSpend = {value: 0};

    // get up the values and ids of the goods...
    let arcValues = [
        { name: 'Arc10', multi: 1.31, reward: arcReward * 1.31, spent: 0, id: '10', loss: false},
        { name: 'Arc30', multi: 1.51, reward: arcReward * 1.51, spent: 0, id: '30', loss: false},
        { name: 'Arc60', multi: 1.80, reward: arcReward * 1.80, spent: 0, id: '60', loss: false}, 
        { name: 'Arc80', multi: 1.90, reward: arcReward * 1.90, spent: 0, id: '80', loss: false}
    ];

    setArcValues();

    p6tl.to('body', {})
    .from('.panel-six__arc', {
        scale: 7, opacity: 0, stagger: 2, duration: 4
    })
    .from('.panel-six__messages', {
        width: 0, duration: 3, x: 50
    })
    // the safe working one, deleta ll below this is things go pear shapes and uncomment
    // .from('.panel-six__msg', {
    //     opacity: 0, 
    //     stagger: {  // animate each swap thread message popping up
    //         each: 5, 
    //         onComplete: function() {
    //             // animate the values after each swap thread message comes up
    //             gsap.to(totalSpend, {
    //                 value: "+=" + swapThreadSize, 
    //                 duration: 1.2, 
    //                 onStart: () => { addGlowEffect(); },
    //                 onUpdate: () => { updateArcValues(); },
    //                 onComplete: () => { removeGlowEffect(); }
    //             })

    //             gsap.to('.panel-six__arc--fp--count--background', {
    //                 width: "-=10%", duration: 1.2
    //             })

    //         }
    //     },
    //     duration: 3, x: 200, display: 'none', height: 0
    // })
    .from('.panel-six__msg', {
        stagger: 5, opacity: 0, duration: 3, x: 200, display: 'none', height: 0
    })
    .from('.panel-six__msg--1', {
        stagger: {  // animate each swap thread message popping up
            each: 10, 
            onComplete: function() {
                gsap.to('.panel-six__arc--fp--count--background', {
                    width: "-=10%", duration: 1.2
                })

            }
        }
    }, "<")
    .from('.panel-six__msg--2', {
        stagger: {  // animate each swap thread message popping up
            each: 10, 
            onComplete: function() {
                // animate the values after each swap thread message comes up
                gsap.to(totalSpend, {
                    value: "+=" + swapThreadSize, 
                    duration: 1.2, 
                    onStart: () => { addGlowEffect(); },
                    onUpdate: () => { updateArcValues(); },
                    onComplete: () => { removeGlowEffect(); }
                })
            }
        }
    },"<5")

    function updateArcValues() {
        for(let i = 0; i < arcValues.length; i++) {
            let arc = arcValues[i];

            if((arc.reward - totalSpend.value) < 0 && arc.loss === false) {
                document.getElementById('gl' + arc.id).innerHTML = "FP Loss";
                document.getElementById('net' + arc.id).classList.add('panel-six__arc--quantityNet--loss');
                arc.loss = true;
            }

            document.getElementById('current' + arc.id).innerHTML = (1000 - totalSpend.value).toFixed();
            document.getElementById('contributed' + arc.id).innerHTML = totalSpend.value.toFixed();
            document.getElementById('spent' + arc.id).innerHTML = totalSpend.value.toFixed();
            document.getElementById('net' + arc.id).innerHTML = (arc.reward - totalSpend.value).toFixed();
        }
    }

    /** set the values on the arcs... */
    function setArcValues() {
        for(let i = 0; i < arcValues.length; i++) {
            let arc = arcValues[i];
            document.getElementById('reward' + arc.id).innerHTML = arc.reward;
        }
    }

    /** glow when the values change. */
    function addGlowEffect() {
        for(let i = 0; i < arcValues.length; i++) {
            let arc = arcValues[i];
            document.getElementById("spent" + arc.id).classList.add("glowEffectPositive");
            document.getElementById("net" + arc.id).classList.add("glowEffectPositive");
        }
    }

    function removeGlowEffect() {
        for(let i = 0; i < arcValues.length; i++) {
            let arc = arcValues[i];
            document.getElementById("spent" + arc.id).classList.remove("glowEffectPositive");
            document.getElementById("net" + arc.id).classList.remove("glowEffectPositive");
        }
    }
}


