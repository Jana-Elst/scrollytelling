const moveCoronatest = () => {
    const coronaTest = document.querySelector('.header__img');

    gsap.to(coronaTest, {
        y: 20,
        duration: 0.75,
        yoyo: true,
        repeat: -1, //blijft herhalen
        ease: "power1.inOut",
    });
}

const messagesSetup = () => {
    const messages = document.querySelectorAll('.conversation--vertical .message');
    const messagesSent = document.querySelectorAll('.conversation--vertical .message--sent');

    messages.forEach(message => {
        gsap.set(message, {
            transformOrigin: '0% 100%',
            scale: 0,
            opacity: 0,
        });
    });

    messagesSent.forEach(message => {
        gsap.set(message, {
            transformOrigin: '100% 100%',
            scale: 0,
        });
    });
}

const intro = () => {
    const intros = document.querySelectorAll('.intro__content');
    intros.forEach(intro => {
        if (intro.dataset.intro) {
            gsap.set(intro, {
                transformOrigin: '100% 0%',
                scale: 0,
            });


            gsap.to(intro, {
                scale: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: intro.dataset.intro,
                    start: "top 50%",
                    end: "top 0%",
                    toggleActions: "play none reverse none", // Play on enter, reverse on leave
                }
            });
        }
    });
}

const march11 = () => {
    const conversation = document.querySelector('.march11__conversation > .conversation');
    const messagesMarch11 = document.querySelectorAll('.message--march11');

    /*--- setup ---*/
    gsap.set('.mail', {
        x: 575
    });

    messagesSetup();

    let conversationHeight = gsap.getProperty(conversation, 'height');
    gsap.set(conversation, {
        y: conversationHeight,
    })


    /*--- timeline ---*/
    const tlMarch11 = gsap.timeline({
        scrollTrigger: {
            trigger: '.march12',
            start: "top 90%",
            end: "top 0%",
            pin: '.march11',
            scrub: true, //scrollt mee
        }
    });

    tlMarch11.to('.mail', {
        x: 0,
        duration: 2,
        ease: "power1.inOut",
    })

    messagesMarch11.forEach(message => {
        conversationHeight = conversationHeight - (gsap.getProperty(message, 'height')) - 40;

        tlMarch11
            .to(conversation, {
                y: conversationHeight,
            })

            .to(message, {
                scale: 1,
                opacity: 1,
                duration: 1,
            })
    });
}

const checkUpDown = (yPrev, yNow) => {
    if (yNow < yPrev) {
        return '0% 0%';
    } else {
        return '0% 100%';
    }
}

const agendaMarch12 = () => {
    const $agenda = document.querySelector(".agenda");
    const agendaItems = gsap.utils.toArray(".agenda__container");

    const y = 63;

    gsap.set(agendaItems[0], {
        y: y,
    })

    for (let i = 1; i < agendaItems.length; i++) {
        gsap.set(agendaItems[i], {
            transformOrigin: checkUpDown(gsap.getProperty(agendaItems[i - 1], 'y'), gsap.getProperty(agendaItems[i], 'y')),
            zIndex: -i,
        });
    }

    gsap.set(agendaItems[1], {
        y: 2 * y,
        x: -150,
    })

    gsap.set(agendaItems[2], {
        y: y,
        x: -350,
    })

    gsap.set(agendaItems[3], {
        y: 0,
        x: -500,
    })

    gsap.set(agendaItems[4], {
        y: y,
        x: -650,
        zIndex: -4,
    })

    gsap.set(agendaItems[5], {
        y: y * 2,
        x: -820,
    })

    gsap.set(agendaItems[6], {
        y: y * 3,
        x: -1000,
    })

    gsap.set(agendaItems[7], {
        y: y * 2,
        x: -1200,
    })

    gsap.set(agendaItems[8], {
        y: y,
        x: -1400,
    })

    gsap.set(agendaItems[9], {
        y: 0,
        x: -1600,
    })

    gsap.set(agendaItems[10], {
        y: y,
        x: -1750,
    })

    gsap.set(agendaItems[11], {
        y: y * 2,
        x: -1900,
    })

    const tlAgenda = gsap.timeline({
        scrollTrigger: {
            trigger: $agenda,
            start: "top 50%",
            end: "bottom -90%",
            scrub: true,
            markers: true,
        }
    });

    for (let i = 1; i < agendaItems.length; i++) {
        tlAgenda.from(agendaItems[i], {
            scaleY: 0,
            backgroundColor: "#14C3FF",
        });
    }

    /* ---- scroll animatie Agenda ----*/
    let scrollAgenda = gsap.to($agenda, {
        x: -1950,
        scrollTrigger: { //scrolltrigger om heel de conversatie naar links te laten scrollen
            trigger: $agenda,
            start: "top 20%",
            end: "bottom -200%",
            pin: '.march12',
            scrub: true,
            //markers: true,
        }
    })
}

const lockdownMarch12 = () => {
    const $lockdownRows = Array.from(document.querySelectorAll('.lockdown__row'));

    gsap.to('.lockdown', {
        scrollTrigger: {
            trigger: ".lockdown",
            start: "top 10%",
            end: "0 -50%",
            scrub: true,
            pin: ".lockdown",
        }
    })

    $lockdownRows.forEach($lockdownRow => {
        gsap.to($lockdownRow, {
            x: parseInt($lockdownRow.dataset.targetX),
            scrollTrigger: {
                trigger: ".lockdown",
                scrub: true,
                start: "top 100%",
                end: "0 -200%",
            }
        })
    });
}

const march16 = () => {
    /*--- setup ---*/
    gsap.set(".zoom__member", {
        scale: 0,
    })

    gsap.set(".zoom__member--miguel", {
        zIndex: 1,
    })

    gsap.set(".miguel__img--content", {
        opacity: 0,
    })

    gsap.set(".miguel__content", {
        opacity: 0,
        scale: 1,
        x: -350,
    })

    /*--- timeline ---*/
    const tlMarch16 = gsap.timeline({
        scrollTrigger: {
            trigger: ".september28",
            start: "top 105%",
            end: "top 0%",
            scrub: true,
            pin: '.march16',
        }
    })

    /* verschijnen zoom members */
    tlMarch16.to('.zoom__member', {
        scale: 1,
        duration: 0.3,
        ease: "power1.inOut",
        stagger: {
            each: 0.1,
            from: "random",
            grid: "auto",
            amount: 1,
        }
    });

    tlMarch16.to('.zoom__member--standard', {
        scale: 0,
        duration: 0.3,
        ease: "power1.inOut",
        stagger: {
            each: 0.1,
            from: "random",
            grid: "auto",
            amount: 1,
        }
    });

    tlMarch16.to('.zoom', {
        duration: 1,
        backgroundColor: '#FFF',
        boxShadow: 'none',
    }, "<");

    tlMarch16.to(".zoom__member--miguel", {
        duration: 2,
        scale: 3.7,
    }, "< +0.5");

    tlMarch16.to(".zoom__member--miguel", {
        duration: 0.5,
        x: -350,
    });

    tlMarch16.to(".miguel__content", {
        opacity: 1,
        x: 0,
        scale: 1,
    }, "<");
}

const september28 = () => {
    const messages = gsap.utils.toArray(".message--september28");
    const $conversation = document.querySelector(".conversation--september28");

    /*----- PART 1 -----*/
    gsap.set(messages[1], {
        transformOrigin: '0% 0%',
        y: gsap.getProperty(messages[0], 'height') + 10, //puur text zonder padding...)
        x: -gsap.getProperty(messages[1], 'width') - 30,
        scaleY: 0,
    });

    gsap.set(messages[2], {
        transformOrigin: '0% 100%',
        y: 145, //puur text zonder padding...)
        x: -700, //puur text zonder padding...)
        rotation: -5.5,
        scale: 1.5,
    });

    gsap.set(messages[3], {
        transformOrigin: '0% 100%',
        y: 20, //puur text zonder padding...)
        x: -700, //puur text zonder padding...)
        rotation: 10,
        scale: 1.5,
    });

    gsap.set(messages[4], {
        transformOrigin: '0% 100%',
        y: 210, //puur text zonder padding...)
        x: -800, //puur text zonder padding...)
        rotation: -20,
        scale: 1.5,
    });

    gsap.set(messages[5], {
        transformOrigin: '0% 100%',
        y: 240, //puur text zonder padding...)
        x: -1350, //puur text zonder padding...)
        rotation: 9,
        scale: 1.5,
    });

    const tlMessages1 = gsap.timeline({
        scrollTrigger: {
            trigger: $conversation,
            start: "top 65%",
            end: "top 20%",
            scrub: true,
            //markers: true,
        }
    });

    tlMessages1
        .to(messages[1], {
            scaleY: 1,
        })
        .from(messages[2], {
            scale: 0,
        })
        .from(messages[3], {
            scale: 0,
        })
        .from(messages[4], {
            scale: 0,
        })
        .from(messages[5], {
            scale: 0,
        })

    /*----- PART 2 -----*/
    gsap.set(messages[6], {
        transformOrigin: '0% 100%',
        y: 120, //puur text zonder padding...)
        x: -900 - 200, //puur text zonder padding...)
        scale: 2,
    });

    gsap.set(messages[7], {
        transformOrigin: '0% 100%',
        y: 210, //puur text zonder padding...)
        x: -1000 - 200, //puur text zonder padding...)
        scale: 1.5,
        rotation: -3,
    });

    gsap.set(messages[8], {
        transformOrigin: '0% 100%',
        y: -15, //puur text zonder padding...)
        x: -1550 - 200, //puur text zonder padding...)
        scale: 1.5,
        rotation: 6,
    });

    gsap.set(messages[9], {
        transformOrigin: '0% 100%',
        y: 120, //puur text zonder padding...)
        x: -1510 - 200, //puur text zonder padding...)
        scale: 1.5,
        rotation: -6,
    });

    gsap.set(messages[10], {
        transformOrigin: '0% 0%',
        y: 0, //puur text zonder padding...)
        x: -1500 + 300 - 300, //puur text zonder padding...)
    });

    gsap.set(messages[11], { //omg ik kom naar jou!
        transformOrigin: '0% 0%',
        y: gsap.getProperty(messages[9], 'height') + 40,
        x: -1750 + 300 - 300, //puur text zonder padding...)
    });

    gsap.set(messages[12], {
        transformOrigin: '0% 100%',
        y: 170, //puur text zonder padding...)
        x: -2000 + 300 - 300, //puur text zonder padding...)
        scale: 1.5,
        rotation: -6,
    });

    gsap.set(messages[13], {
        transformOrigin: '0% 100%',
        y: 230, //puur text zonder padding...)
        x: -2500 + 300 - 300, //puur text zonder padding...)
        scale: 1.5,
        rotation: 3,
    });

    gsap.set(messages[14], {
        transformOrigin: '0% 100%',
        y: 200, //puur text zonder padding...)
        x: -2150 - 300, //puur text zonder padding...)
        scale: 1.5,
        rotation: -20,
    });

    gsap.set(messages[15], {
        transformOrigin: '0% 100%',
        y: 200, //puur text zonder padding...)
        x: -2300 - 300, //puur text zonder padding...)
        scale: 1.5,
        rotation: -2,
    });

    const tlMessages2 = gsap.timeline({
        scrollTrigger: {
            trigger: messages[5],
            start: "top 55%",
            end: "top 25%",
            scrub: true,
            //markers: true,
        }
    });

    tlMessages2
        .from(messages[6], {
            scale: 0,
        })
        .from(messages[7], {
            scale: 0,
        })
        .from(messages[8], {
            scale: 0,
        })
        .from(messages[9], {
            scale: 0,
        })

    const tlMessages3 = gsap.timeline({
        scrollTrigger: {
            trigger: messages[15],
            start: "top -10%",
            end: "bottom -200%",
            scrub: true,
            //markers: true,
        }
    });

    tlMessages3
        .from(messages[10], {
            scaleY: 0,
        })
        .from(messages[11], {
            scaleY: 0,
        })
        .from(messages[12], {
            scale: 0,
        })
        .from(messages[13], {
            scale: 0,
        })
        .from(messages[14], {
            scale: 0,
        })
        .from(messages[15], {
            scale: 0,
        })


    /*------- scroll hele conversatie ----------*/
    let scrollConversation = gsap.to($conversation, {
        x: -2250,
        scrollTrigger: { //scrolltrigger om heel de conversatie naar links te laten scrollen
            trigger: $conversation,
            start: "top 30%",
            end: "bottom -150%",
            pin: '.september28',
            scrub: true,
            //markers: true,
        }
    })

    //timeline in de horizontalscroll
    let tlMessages = gsap.timeline();

    tlMessages
        .add(tlMessages2)
        .add(tlMessages3)
}

const october11 = () => {
    /* --- setup ---*/
    gsap.set('.hatchie__coronatest', {
        x: -550,
        y: 150,
        zIndex: 1,
    })

    gsap.set('.doctor-stamp--1', {
        x: 700,
        y: 250,
    })

    gsap.set('.doctor-stamp--2', {
        scale: 0,
        x: 0,
        y: 250,
    })

    gsap.set('.hatchie__hatchie', {
        scale: 0,
    })

    gsap.set('.hatchie__zakdoek', {
        x: 900,
        y: -500,
        scale: 0,
        zIndex: 1,
    });

    /*--- timeline ---*/
    const tlOctober11 = gsap.timeline({
        scrollTrigger: {
            trigger: ".october20",
            start: "top 90%",
            end: "top 0%",
            scrub: true,
            pin: '.october11',
            //markers: true,
        }
    })

    tlOctober11.
        to('.hatchie__hatchie', {
            scale: 1,
        })
        .to('.hatchie__hatchie', {
            scale: -1,
        })
        .to('.hatchie__hatchie', {
            scaleY: 1,
        })
        .to('.hatchie__hatchie', {
            scaleX: 1,
        })

        .to('.hatchie__zakdoek', {
            x: 700,
            y: -100,
            scale: 1,
        })

        .to('.hatchie__coronatest', {
            x: 100,
        })

        .to('.doctor-stamp--1', {
            x: 0,
        })

        .to('.doctor-stamp--2', {
            scale: 1,
        })
}

february12 = () => {
    /*--- setup ---*/
    gsap.set('.team__member', {
        scaleY: 0,
    })

    gsap.set('.team__question', {
        scale: 0,
    })

    gsap.set('.team__answer', {
        scale: 0,
    })

    /*--- timeline ---*/
    const tlfebruary12 = gsap.timeline({
        scrollTrigger: {
            trigger: ".june9",
            start: "top 105%",
            end: "top 0%",
            scrub: true,
            pin: '.february12',
        }
    })

    const $teamMembers = document.querySelectorAll('.team__member');

    tlfebruary12.to('.team__member', {
        scaleY: 1,
        duration: 0.3,
        ease: "power1.inOut",
        stagger: {
            each: 0.1,
            from: "random",
        }
    })

    tlfebruary12.to('.team__question', {
        scale: 1,
    })

    tlfebruary12.to('.team__answer', {
        scale: 1,
    })

    tlfebruary12.to('.team__question', {
        scale: 0,
    })

    tlfebruary12.to('.team__answer', {
        scale: 0,
    })

    tlfebruary12.to('.team__member', {
        scaleY: 0,
        duration: 0.3,
        ease: "power1.inOut",
        stagger: {
            each: 0.1,
            from: "random",
        }
    })
}

october20Les = () => {
    const $lesstijlenIMG = document.querySelectorAll('.lesstijlen__img');
    const $lesstijlenText = document.querySelectorAll('.lesstijlen__text');
    let yPosImg = 0;

    $lesstijlenIMG.forEach(img => {
        gsap.set(img,
            {
                y: yPosImg,
            }
        )

        yPosImg = yPosImg + gsap.getProperty(img, 'height') + 50;
    });

    $lesstijlenText.forEach(text => {
        gsap.set(text,
            {
                scale: 0,
            }
        )
    });

    gsap.set('.lesstijlen__text--1',
        {
            scale: 1,
        }
    )


    /*--- timeline ---*/
    const tloctober20 = gsap.timeline({
        scrollTrigger: {
            trigger: ".october20__friends",
            start: "top 105%",
            end: "top 0%",
            scrub: true,
            pin: '.lesstijlen',

            // markers: true,
        }
    })

    tloctober20.to('.lesstijlen__img--1', {
        scale: 0.5,
    })

    tloctober20.to('.lesstijlen__text--1', {
        scale: 0,
    })

    tloctober20.to('.lesstijlen__text--2', {
        scale: 1,
    })

    tloctober20.to('.lesstijlen__img--2', {
        y: 0,
    })

    tloctober20.to('.lesstijlen__img--2', {
        scale: 0.5,
    })

    tloctober20.to('.lesstijlen__text--2', {
        scale: 0,
    })

    tloctober20.to('.lesstijlen__text--3', {
        scale: 1,
    })

    tloctober20.to('.lesstijlen__img--3', {
        y: 0,
    })
}

october20Friends = () => {
    const ankaIMG = document.querySelector('.friends__img--anka');
    const miguelIMG = document.querySelector('.friends__img--miguel');

    gsap.set(ankaIMG, {
        transformOrigin: '0% 100%',
        x: 200,
    });

    gsap.set(miguelIMG, {
        transformOrigin: '100% 100%',
        x: -200,
    })

    let tlMiguel = gsap.timeline({
        scrollTrigger: {
            trigger: '.friends',
            start: 'top 90%',
            end: 'top -100%',
            markers: true,
            scrub: true,
        },
    });

    tlMiguel
        .to(miguelIMG, {
            duration: 3,
            rotation: 30,
            y: -200,
            x: 350,
        })
        .to(".friends__name--miguel",
            {
                duration: 0.5, text: "Miguel"
            }, "<+1")

    let tlAnka = gsap.timeline({
        scrollTrigger: {
            trigger: '.friends',
            start: 'top 90%',
            end: 'top -100%',
            markers: true,
            scrub: true,
        },
    });

    tlAnka
        .to(ankaIMG, {
            duration: 3,
            rotation: -30,
            y: -200,
            x: -350,
        })
        .to(".friends__name--anka",
            {
                duration: 0.5, text: "Anka"
            }, "<+1")
}

const june9 = () => {
    const $conversationKatrijn = document.querySelector('.conversation__katrijn');
    const $conversationSiebe = document.querySelector('.conversation__siebe');
    const $conversationSilke = document.querySelector('.conversation__silke');

    const $messagesSiebe = document.querySelectorAll('.conversation__siebe > .message');
    const $messagesSilke = document.querySelectorAll('.conversation__silke > .message');
    const $messagesKatrijn = document.querySelectorAll('.conversation__katrijn > .message');


    /*--- setup ---*/
    messagesSetup();

    let conversationHeightSilke = gsap.getProperty($conversationSilke, 'height');
    let conversationHeightSiebe = gsap.getProperty($conversationSiebe, 'height');
    let conversationHeightKatrijn = gsap.getProperty($conversationKatrijn, 'height');
    conversationHeightKatrijn = conversationHeightKatrijn - 105;

    gsap.set($conversationKatrijn, {
        y: conversationHeightKatrijn,
    })

    gsap.set($conversationSiebe, {
        y: conversationHeightSiebe,
    })

    gsap.set($conversationSilke, {
        y: conversationHeightSilke,
    })

    /*--- timeline ---*/
    const tlJune9 = gsap.timeline({
        scrollTrigger: {
            trigger: '.july17',
            start: "top 105%",
            end: "top 0%",
            pin: '.june9',
            scrub: true, //scrollt mee
        }
    });

    messagesJune9($messagesSiebe, $conversationSiebe, conversationHeightSiebe, tlJune9);
    messagesJune9($messagesKatrijn, $conversationKatrijn, conversationHeightKatrijn, tlJune9);
    messagesJune9($messagesSilke, $conversationSilke, conversationHeightSilke, tlJune9);

}

const messagesJune9 = (messages, conversation, conversationHeight, tl) => {
    messages.forEach(message => {
        conversationHeight = conversationHeight - (gsap.getProperty(message, 'height')) - 40;

        tl.to(conversation, {
            y: conversationHeight,
        })

        tl.to(message, {
            scale: 1,
            opacity: 1,
            duration: 1,
        })
    });
}

const july17 = () => {
    const panels = gsap.utils.toArray(".trouw__img");
    const $explore = document.querySelector(".trouw__imgs");
    let scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: $explore,
            start: "top top",
            end: () => {
                return "+=" + ($explore.offsetWidth) //neemt breedte van element als eindpositie --> 
            },
            pin: $explore,
            scrub: 1,
        }
    })
}

const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(MotionPathPlugin);

    moveCoronatest();
    march11();
    agendaMarch12();
    lockdownMarch12();
    march16();
    september28();
    october11();
    october20Les();
    october20Friends();
    february12();
    june9();
    july17();
    intro();
}

init();