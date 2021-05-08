// window.onload = function() {
    
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
            end: '+=3000px', 
            pin: true, 
            scrub: true
        }
    })


    const arcReward = 300;
    const coaInitial = {initial: 745, max: 1524};
    const cdmInitial = {initial: 236, max: 956};
    const swapThreadSize = 100;

    let totalSpend = {value: 0};
    let contributed = {value: 0};

    // get up the values and ids of the goods...
    let arcValues = [
        { name: 'Arc10', multi: 1.31, reward: arcReward * 1.31, spent: 0, id: '10', loss: false},
        { name: 'Arc30', multi: 1.51, reward: arcReward * 1.51, spent: 0, id: '30', loss: false},
        { name: 'Arc60', multi: 1.80, reward: arcReward * 1.80, spent: 0, id: '60', loss: false}, 
        { name: 'Arc80', multi: 1.90, reward: arcReward * 1.90, spent: 0, id: '80', loss: false}
    ];

    setArcValues();
    setGbValues();

    p6tl.to('body', {})
    .from('.panel-six__arc', {
        scale: 7, opacity: 0, stagger: 2, duration: 4
    })
    .from('.panel-six__messages', {
        width: 0, duration: 3, x: 50
    })
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
                gsap.to(contributed, {
                    value: "+=" + swapThreadSize, 
                    duration: 1.2, 
                    onStart: () => { addGlowEffect(); },
                    onUpdate: () => { updateArcValues(); updateMessageProgress('cdm', contributed.value + cdmInitial.initial, cdmInitial.max); },
                    onComplete: () => { removeGlowEffect(); }
                })
            }
        }
    }, "<5")
    .from('.panel-six__msg--2', {
        stagger: {  // animate each swap thread message popping up
            each: 10, 
            onComplete: function() {
                // animate the values after each swap thread message comes up
                gsap.to(totalSpend, {
                    value: "+=" + swapThreadSize, 
                    duration: 1.2, 
                    onStart: () => { addGlowEffect(); },
                    onUpdate: () => { updateArcValues(); updateMessageProgress('coa', totalSpend.value + coaInitial.initial, coaInitial.max); },
                    onComplete: () => { removeGlowEffect(); }
                })
            }
        }
    },"<8")
    .to('.panel-six__messages', {
        duration: 8, x: "150%"
    })
    .to('.panel-six__arc', {
        duration: 8, x: "-300%"
    }, "<")

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
            document.getElementById('spent' + arc.id).innerHTML = contributed.value.toFixed();
            document.getElementById('net' + arc.id).innerHTML = (arc.reward - totalSpend.value).toFixed();
        }
    }

    function updateMessageProgress(gbClassName, value, max) {
        // set the values on the messages fp bars
        const gb = document.getElementsByClassName(gbClassName + 'Count');
        for(let i = 0 ; i < gb.length ; i++) {
            gb[i].innerHTML = value.toFixed();
        }
        // set the size of the progress bars
        const bars = document.getElementsByClassName(gbClassName + 'Progress');
        for(let i = 0 ; i < bars.length ; i++) {
            bars[i].style.width = (value/max)*100 + "%";
        }   
    }

    /** set the values on the arcs... */
    function setArcValues() {
        for(let i = 0; i < arcValues.length; i++) {
            let arc = arcValues[i];
            document.getElementById('reward' + arc.id).innerHTML = arc.reward;
        }
    }


    function setGbValues() {
        // ste initial and final values on the messages
        const coaNow = document.getElementsByClassName('coaCount');
        const cdmNow = document.getElementsByClassName('cdmCount');
        const coaMax = document.getElementsByClassName('coaMax');
        const cdmMax = document.getElementsByClassName('cdmMax');
        // set the size of the progress bars
        const coaProgress = document.getElementsByClassName('coaProgress');
        const cdmProgress = document.getElementsByClassName('cdmProgress');
        // set the values.
        for(let i = 0 ; i < coaNow.length ; i++) { coaNow[i].innerHTML = coaInitial.initial; }
        for(let i = 0 ; i < cdmNow.length ; i++) { cdmNow[i].innerHTML = cdmInitial.initial; }
        for(let i = 0 ; i < coaMax.length ; i++) { coaMax[i].innerHTML = coaInitial.max; }
        for(let i = 0 ; i < cdmMax.length ; i++) { cdmMax[i].innerHTML = cdmInitial.max; }
        for(let i = 0 ; i < coaProgress.length ; i++) { coaProgress[i].style.width = (coaInitial.initial/coaInitial.max)*100 + "%"; }
        for(let i = 0 ; i < cdmProgress.length ; i++) { cdmProgress[i].style.width = (cdmInitial.initial/cdmInitial.max)*100 + "%"; }
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


    // panel 7
    const p7tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#panel-seven', 
            start: 'top top', 
            end: '+=3000px', 
            pin: true, 
            scrub: true
        }
    })

    p7tl.from('.panel-seven__results--reward div', {
        duration: 1, stagger: -0.1, opacity: 0
    })
    .from('.panel-seven__results--bonus div', {
        duration: 1, stagger: -0.1, opacity: 0
    }, "<")
    .from('.panel-seven__legend', {
        y: 200, opacity: 0, duration: 1
    }, "<2")
    .from('.panel-seven__labels', {
        y: -50, opacity: 0, duration: 1
    }, "<")
    .to(['.lvl30', '.lvl60', '.lvl30 div', '.lvl60 div'], {
        visibility: 'none', opacity: 0, duration: 2, flex: 0, width: 0
    }, "<+2")
    .from('.panel-seven__conclusion', {
        flex: 0, duration: 1 
    }, "<+1")
    .from('.panel-seven__conclusion span', {
        opacity: 0, display: 'none', duration: 1
    })

    // panel 8
    const p8tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#panel-eight', 
            start: 'top top', 
            end: '+=1500px', 
            pin: true, 
            toggleActions: "play none none none"
        }
    })

    p8tl.from('.panel-eight__scroll-pause', {
        scale: 7, opacity: 0, duration: 1
    })
    .from('.panel-eight__data-entry', {
        opacity: 0, duration: 1, 
        onComplete: () => {
            stopScrolling();
        }
    }, "<+=1")

    let scrollLock = {x: 0, y: 0, enabled: false}
    let fpPerDay;
    let arcLevel;

    function scrollingDisabled() {
        // if we are scrolling up undo the lock and resume scroll features
        // otherwise navigate to the lock point
        if(window.pageYOffset < scrollLock.y || scrollLock.enabled === false) {
            resumeScrolling();
        } else {
            window.scrollTo(scrollLock.x, scrollLock.y);
        }
    }
    
    function stopScrolling() {
        // lock the scrolling at the current point
        if(fpPerDay === undefined && arcLevel === undefined) {
            // will only trigger once per values for user friendliness and simplicity
            scrollLock.x = window.pageXOffset;
            scrollLock.y = window.pageYOffset;
            scrollLock.enabled = true;
            window.addEventListener('scroll', scrollingDisabled);
        }
    }

    function resumeScrolling() {
        // resume the scrolling
        scrollLock.enabled = false;
        window.removeEventListener('scroll', scrollingDisabled);
    }

    function setFpPerDay() {
        // sets the fp per day variable from the input box
        fpPerDay = document.getElementById('currentFPIncome').value;
        testLockStatus();
    }
    
    function setArcLevel() {
        // sets the arc l variable from the input box
        arcLevel = document.getElementById('currentArcLevel').value;
        testLockStatus();
    }

    function setDefaultValues() {
        // sets default values for the variables
        fpPerDay = 150;
        arcLevel = 0;
        fpPerDay = document.getElementById('currentFPIncome').value = fpPerDay;
        arcLevel = document.getElementById('currentArcLevel').value = arcLevel;

        testLockStatus();
    }

    // checks to see if all avlues are enetred correctly and disables the lock if so
    function testLockStatus() {
        if(fpPerDay !== undefined && arcLevel !== undefined) {
            if(fpPerDay >= 24 && fpPerDay <= 1000) {
                if(arcLevel >= 0 && arcLevel <= 80) {
                    // animate the red and green signals.
                    gsap.to('.panel-eight__scroll-pause', {
                        scale: 0, opacity: 0, rotate: "10deg", duration: 1
                    })
                    gsap.to('.panel-eight__scroll-continue', {
                        scale: 1, opacity: 1, rotate: "-10deg", duration: 1,
                        onComplete: () => {
                            scrollLock.enabled = false;
                            setFPData(arcLevel, 80);
                            scrollingDisabled();
                        }
                    })
                }
            }
        } else {
            scrollLock.enabled = true;
        }
    }

    /**
     * PANEL 9
     * Detail on fp required per l
    */

    // arc data, as trim as possible. Big array of all data.
    // fp is total fp required to l, r is an array of rewadrs for place 1,2,3,4,5 in order.
    const arcData = [{l: 0, fp: 70, r: [10,5,0,0,0]},{l: 1, fp: 110, r: [15,10,5,0,0]},{l: 2, fp: 200, r: [25,15,5,0,0]},{l: 3, fp: 290, r: [35,20,5,0,0]},{l: 4, fp: 400, r: [45,25,10,5,0]},{l: 5, fp: 510, r: [60,30,10,5,0]},{l: 6, fp: 620, r: [70,35,10,5,0]},{l: 7, fp: 740, r: [85,45,15,5,0]},{l: 8, fp: 860, r: [95,50,15,5,0]},{l: 9, fp: 970, r: [110,55,20,5,0]},{l: 10, fp: 995, r: [120,60,20,5,0]},{l: 11, fp: 1020, r: [135,70,25,5,0]},{l: 12, fp: 1045, r: [150,75,25,5,0]},{l: 13, fp: 1071, r: [165,85,30,10,0]},{l: 14, fp: 1098, r: [180,90,30,10,0]},{l: 15, fp: 1125, r: [195,100,35,10,0]},{l: 16, fp: 1154, r: [210,105,35,10,0]},{l: 17, fp: 1182, r: [225,115,40,10,0]},{l: 18, fp: 1212, r: [240,120,40,10,0]},{l: 19, fp: 1242, r: [255,130,45,10,0]},{l: 20, fp: 1273, r: [270,135,45,10,0]},{l: 21, fp: 1305, r: [290,145,50,15,5]},{l: 22, fp: 1338, r: [305,155,50,15,5]},{l: 23, fp: 1371, r: [320,160,55,15,5]},{l: 24, fp: 1405, r: [335,170,55,15,5]},{l: 25, fp: 1440, r: [355,180,60,15,5]},{l: 26, fp: 1476, r: [370,185,60,15,5]},{l: 27, fp: 1513, r: [385,195,65,15,5]},{l: 28, fp: 1551, r: [405,205,70,20,5]},{l: 29, fp: 1590, r: [420,210,70,20,5]},{l: 30, fp: 1630, r: [435,220,75,20,5]},{l: 31, fp: 1670, r: [455,230,75,20,5]},{l: 32, fp: 1712, r: [470,235,80,20,5]},{l: 33, fp: 1755, r: [490,245,80,20,5]},{l: 34, fp: 1799, r: [505,255,85,20,5]},{l: 35, fp: 1844, r: [525,265,90,25,5]},{l: 36, fp: 1890, r: [540,270,90,25,5]},{l: 37, fp: 1937, r: [560,280,95,25,5]},{l: 38, fp: 1986, r: [575,290,95,25,5]},{l: 39, fp: 2035, r: [595,300,100,25,5]},{l: 40, fp: 2086, r: [615,310,105,25,5]},{l: 41, fp: 2138, r: [630,315,105,25,5]},{l: 42, fp: 2192, r: [650,325,110,30,5]},{l: 43, fp: 2246, r: [670,335,110,30,5]},{l: 44, fp: 2303, r: [685,345,115,30,5]},{l: 45, fp: 2360, r: [705,355,120,30,5]},{l: 46, fp: 2419, r: [725,365,120,30,5]},{l: 47, fp: 2480, r: [740,370,125,30,5]},{l: 48, fp: 2541, r: [760,380,125,30,5]},{l: 49, fp: 2605, r: [780,390,130,35,5]},{l: 50, fp: 2670, r: [800,400,135,35,5]},{l: 51, fp: 2737, r: [815,410,135,35,5]},{l: 52, fp: 2805, r: [835,420,140,35,5]},{l: 53, fp: 2875, r: [855,430,145,35,5]},{l: 54, fp: 2947, r: [875,440,145,35,5]},{l: 55, fp: 3021, r: [895,450,150,40,10]},{l: 56, fp: 3096, r: [915,460,155,40,10]},{l: 57, fp: 3174, r: [930,465,155,40,10]},{l: 58, fp: 3253, r: [950,475,160,40,10]},{l: 59, fp: 3334, r: [970,485,160,40,10]},{l: 60, fp: 3418, r: [990,495,165,40,10]},{l: 61, fp: 3503, r: [1010,505,170,45,10]},{l: 62, fp: 3591, r: [1030,515,170,45,10]},{l: 63, fp: 3681, r: [1050,525,175,45,10]},{l: 64, fp: 3773, r: [1070,535,180,45,10]},{l: 65, fp: 3867, r: [1090,545,180,45,10]},{l: 66, fp: 3964, r: [1110,555,185,45,10]},{l: 67, fp: 4063, r: [1130,565,190,50,10]},{l: 68, fp: 4164, r: [1150,575,190,50,10]},{l: 69, fp: 4268, r: [1170,585,195,50,10]},{l: 70, fp: 4375, r: [1190,595,200,50,10]},{l: 71, fp: 4484, r: [1210,605,200,50,10]},{l: 72, fp: 4596, r: [1230,615,205,50,10]},{l: 73, fp: 4711, r: [1250,625,210,55,10]},{l: 74, fp: 4829, r: [1270,635,210,55,10]},{l: 75, fp: 4950, r: [1290,645,215,55,10]},{l: 76, fp: 5074, r: [1310,655,220,55,10]},{l: 77, fp: 5200, r: [1335,670,225,55,10]},{l: 78, fp: 5330, r: [1355,680,225,55,10]},{l: 79, fp: 5464, r: [1375,690,230,60,10]},{l: 80, fp: 5600, r: [1395,700,235,60,10]}];
    
    // set sniper to TRUE if its malicious taking of profit.
    // set sniper to FALSE for helpful contribution, like a 1.9 thread.
    function calculateSnipability(l, multiplier, sniper) {
        let profitability = [
            {position: 1, profitable: false},
            {position: 2, profitable: false},
            {position: 3, profitable: false},
            {position: 4, profitable: false},
            {position: 5, profitable: false}
        ];
        const levelData = arcData[l];
        let remainder = levelData.fp;

        for(let i = 0; i < levelData.r.length; i++) {
            if(levelData.r[i]*multiplier > remainder * 0.5) {
                profitability[i].profitable = true;
                if(sniper=== true) {
                    // sniper takes just enough to stop others taking their place
                    remainder *= 0.5;
                } else {
                    // helpful guildies take as much as possiblewith the multi
                    remainder -= levelData.r[i]*multiplier;
                }
            } else {
                // set to default, the rest is not snipable.
                break;
            }
        }
        return profitability;
    }

    function costCalculation(fromLvl, toLvl, multiplier, snipers) {
        let totalCost = 0;
        let selfPay = 0;
        let contributions = 0;

        for(let i = fromLvl ; i < toLvl ; i++) {
            let l = arcData[i];
            let contribution = calculateSnipability(i, multiplier, snipers);
            let lvlContrib = 0;
            let fpRemaining = l.fp;

            for(let o = 0; o < contribution.length; o++) {

                if(contribution[o].profitable === true) {
                    // assume its sniped or taken in a thread
                    let val = (snipers ? fpRemaining * 0.5 : multiplier*l.r[o]);
                    lvlContrib += val;
                    fpRemaining -= val;
                }

            }
            
            selfPay += (l.fp - lvlContrib); // 5th is always self pay, never safe
            contributions += lvlContrib;
            totalCost += l.fp;
        }

        return {totalCost: totalCost, contribution: contributions, selfPay: selfPay};
    }

    function setXAxis(fromLvl, toLvl) {
        const xRange = document.getElementById('xGrid');
        const xLabels = document.getElementById('xLabels');
        let htmlRange = "";
        let htmlLabels = "";

        const range = toLvl - fromLvl;

        let labelMultiplier = 1;
        let division = 80  / range;

        if(range > 50) {
            // division = 80 / (0.25 * range);
            labelMultiplier = 4;
        } else if(range > 20) {
            // division = 80 / (0.5 * range);
            labelMultiplier = 2;
        }
        
        for(let i = fromLvl; i <= toLvl; i+=labelMultiplier) {
            let position = 10 + (i - fromLvl) * division;

            htmlRange += "<line x1=\"" + position + "%\" x2=\"" + position + "%\" y1=\"10%\" y2=\"90%\"></line>";
            htmlLabels += "<text x=\""+ (position - 1) +"%\" y=\"95%\">"+ i +"</text>";
        }
        
        xRange.innerHTML = htmlRange;
        xLabels.innerHTML = htmlLabels;
    }
    
    function setYAxis(fpMin, fpMax) {
        const yRange = document.getElementById('yGrid');
        const yLabels = document.getElementById('yLabels');
        let htmlRange = "";
        let htmlLabels = "";

        const range = fpMax - fpMin; // used for labels
        const division = 10;
        const fpPerDivision = range / division;

        // 10 line sin the y direction for now...
        for(let i = 0; i <= division; i++) {
            let position = 90 - i * (80 / division);
            htmlRange += "<line y1=\"" + position + "%\" y2=\"" + position + "%\" x1=\"10%\" x2=\"90%\"></line>";
            htmlLabels += "<text text-anchor=\"end\" y=\""+ (position + 0.5) +"%\" x=\"9%\">"+ (fpMin + (i * fpPerDivision)) +"</text>";
        }
        
        yRange.innerHTML = htmlRange;
        yLabels.innerHTML = htmlLabels;

    }

    // not happy with the function on the whole but good enough for this purpose...
    function placeGraphPoints(fromLvl, toLvl, fpMin, fpMax, multiplier, snipers, total, selfpay) {
        const xDivision = 80 / (toLvl - fromLvl);
        const yRange = fpMax - fpMin;
        
        if(total) {
            // user wants to see total values...
            const points = document.getElementById('totalPoints');
            let htmlPosition = "";
            for(let i = fromLvl; i <= toLvl; i++) {
                htmlPosition += pointPlacement(i, fromLvl, fpMin, xDivision, yRange, arcData[i].fp);
            }
            points.innerHTML = htmlPosition;
        }

        if(selfpay) {
            // user wants to see self pay
            const points = document.getElementById('selfPoints');
            let htmlPosition = "";
            for(let i = fromLvl; i <= toLvl; i++) {
                htmlPosition += pointPlacement(i, fromLvl, fpMin, xDivision, yRange, costCalculation(i, i+1, multiplier, snipers).selfPay);
            }
            points.innerHTML = htmlPosition;
        }
    }

    // generates the specific position of the point on the grid
    function pointPlacement(i, fromLvl, fpMin, xDivision, yRange, level) {
        const xPos = 10 + (i - fromLvl) * xDivision;
        const yPos = 90 - (80 / yRange) * (level - fpMin);  
        return "<circle class=\"point\" cx=\"" + xPos + "%\" cy=\"" + yPos + "%\" data-value=\"" + level + "\" r=\"6\"></circle>";     
    }

    function setGraph(lvlMin, lvlMax) {
        setXAxis(lvlMin, lvlMax);
        setYAxis(arcData[lvlMin].fp, arcData[lvlMax].fp);
        placeGraphPoints(   lvlMin, lvlMax, 
                            arcData[lvlMin].fp, arcData[lvlMax].fp,
                            1.9, false, 
                            true, true);
    }

    

    function setFPData(id, lvlMin, lvlMax) {

        toggleControls(false); // turn custom controls off

        switch(id) {
            case -1:
                lvlMin = arcLevel;
                break;
            case -2:
                break;
            default:
                lvlMin = arcLevelDescriptors[id].fromLvl;
                lvlMax = arcLevelDescriptors[id].toLvl;
                break;
        }

        // animate the on off for seamless changes!
        const timeline = gsap.timeline({});

        timeline.to('.panel-nine__graph', {
            x: "-100%", duration: 0.5, ease: "ease-out", opacity: 0, onComplete: () => {
                setGraph(lvlMin, lvlMax);
            }
        })
        .to('.panel-nine__data', {
            opacity: 0, duration: 0.5, onComplete: () => {
                if(id >= 0 && id < arcLevelDescriptors.length) {
                    document.getElementById('levellingTips').innerHTML = arcLevelDescriptors[id].descriptor;
                }
                if(id === -2) {
                    toggleControls(true); // turn custom controls on...
                }
            }
        }, "<")
        .to('.panel-nine__graph', {
            x: 0, ease: "ease-in", duration: 0.5, opacity: 1
        })
        .to('.panel-nine__data', {
            opacity: 1, duration: 0.5
        }, "<");
        
    }

    function toggleControls(onoff) {
        (onoff ? 
            document.getElementById('customControls').classList.add('showControls') :
            document.getElementById('customControls').classList.remove('showControls')
        );
    }

    const arcLevelDescriptors = [
        {fromLvl: 0, toLvl: 10, descriptor: "This is a hard one, the first few levels your guild may help you get through but after that its quite a tough slog up to 10, especially if you have a low FP income. Its a steep slope, and big increases in FP required from level to level, but also big increases in the contribution bonus from level to level. Keep at it, it gets easier after this!"},
        {fromLvl: 10, toLvl: 25, descriptor: "An easier range this but still quite tough at first - my recommendation is to sink all your FP into it and let people take positions at 1.9 when they become available. Swap threads are poor in this realm because you have no purchasing power against the bigger players in your guild, they can outbid you because they get much better rewards."},
        {fromLvl: 25, toLvl: 32, descriptor: "The start of the easy period, put a few FP on yourself and then plough into a 1.9 club. Finish in swap threads or put your own earnings in the hope a freind or neighbor will fight for the remianing spots when they ceome available."},
        {fromLvl: 32, toLvl: 40, descriptor: "From here on, only open a level when you are ready for it to level. If you have it open to start someone might level you then snipe the next level top position, losing you hundreds of FP. Open when ready and get it in a 1.9 thread for 80% of the FP required for free."},
        {fromLvl: 40, toLvl: 64, descriptor: "Here, the Arc levels itself. The first three spots are always 1.9 clubbable from the opening, and level 51 has the first four spots ready to take - meaning you pay in the region of 100 FP for a level. If you have a group ready for a bigger guild, you can zip through 50-60 in one or two days, at minimal cost to yourself."},
        {fromLvl: 64, toLvl: 74, descriptor: "Now we are edging on the slow times again. This range is still 1.9 clubbable for the first two spots but after that you will need contributions. Start the first few levels by putting a few on yourself and getting it in the 1.9 club, but then start to use swap threads. You have over 1.8x contribution rewards back now which mean you are starting to become competition for those with a lvl 80 Arc."},
        {fromLvl: 74, toLvl: 80, descriptor: "I am not going to lie, this part is tough. No longer clubbable even for first and second without self contribution this is going to be slow. Use swap threads, dump everything you can onto them and do still use the clubs for first and second. This is the final slog - you are nearly there!"},
    ]



// }


