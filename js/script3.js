/*----------------------- setup general elements -----------------------*/
//intro snippet
const intro = () => {
    const intros = gsap.utils.toArray('.intro__content');

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
                    end: "bottom 45%",
                    toggleActions: "play none reverse none", // Play on enter, reverse on leave
                }
            });
        }
    });
}

//messages messagesSetup
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


/*----------------------- HEADER -----------------------*/
const moveCoronatest = () => {
    const $coronaTest = document.querySelector('.header__img');

    gsap.to($coronaTest, {
        y: 20,
        duration: 0.75,
        yoyo: true,
        repeat: -1, //blijft herhalen
        ease: "power1.inOut",
    });
}

/*----------------------- march11 -----------------------*/
const march11 = () => {
    const $section = document.querySelector('.march11');
    const $mail = document.querySelector('.mail');
    const $conversation = document.querySelector('.march11__conversation > .conversation');
    const messagesMarch11 = gsap.utils.toArray('.message--march11');


    /*--------------- setup --------------- */
    gsap.set($mail, {
        x: 575
    });

    messagesSetup();

    let conversationHeight = gsap.getProperty($conversation, 'height');
    gsap.set($conversation, {
        y: conversationHeight,
    })

    /*--------------- timeline --------------- */
    const tlMarch11 = gsap.timeline({
        scrollTrigger: {
            trigger: $section,
            start: "top 0%",
            end: "bottom 50%",
            pin: $section,
            scrub: 0.5, //scrollt mee
        }
    });

    tlMarch11.to($mail, {
        x: 0,
        duration: 2,
        ease: "power1.inOut",
    })

    messagesMarch11.forEach(message => {
        conversationHeight = conversationHeight - (gsap.getProperty(message, 'height')) - 40;

        tlMarch11
            .to($conversation, {
                duration: 0.5,
                y: conversationHeight,
                ease: "power1.inOut",
            })
            .to(message, {
                duration: 1,
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
            })
    });
}

/*----------------------- march12 -----------------------*/
const checkUpDown = (yPrev, yNow) => {
    if (yNow < yPrev) {
        return '0% 100%';
    } else {
        return '0% 0%';
    }
}

const agendaMarch12 = () => {
    const $agenda = document.querySelector(".agenda");
    const agendaItems = gsap.utils.toArray(".agenda__container");
    const $section = gsap.utils.toArray('.march12');
    const y = 63;

    /*--------------- setup --------------- */
    gsap.set(agendaItems[0], {
        y: y,
    });

    gsap.set(agendaItems[1], {
        y: 2 * y,
        x: -150,
    });

    gsap.set(agendaItems[2], {
        y: y,
        x: -350,
    });

    gsap.set(agendaItems[3], {
        y: 0,
        x: -500,
    });

    gsap.set(agendaItems[4], {
        y: y,
        x: -650,
        zIndex: -4,
    });

    gsap.set(agendaItems[5], {
        y: y * 2,
        x: -820,
    });

    gsap.set(agendaItems[6], {
        y: y * 3,
        x: -1000,
    });

    gsap.set(agendaItems[7], {
        y: y * 2,
        x: -1200,
    });

    gsap.set(agendaItems[8], {
        y: y,
        x: -1400,
    });

    gsap.set(agendaItems[9], {
        y: 0,
        x: -1600,
    });

    gsap.set(agendaItems[10], {
        y: y,
        x: -1750,
    });

    gsap.set(agendaItems[11], {
        y: y * 2,
        x: -1900,
    });

    for (let i = 1; i < agendaItems.length; i++) {
        gsap.set(agendaItems[i], {
            transformOrigin: checkUpDown(gsap.getProperty(agendaItems[i - 1], "y"), gsap.getProperty(agendaItems[i], "y")),
            zIndex: -i,
        });
    }

    /* ---- scrollanimatie agenda elements ----*/
    const tlAgenda = gsap.timeline({
        scrollTrigger: {
            trigger: $agenda,
            start: "top 50%",
            end: "bottom -90%",
            scrub: 1,
        }
    });

    for (let i = 1; i < agendaItems.length; i++) {
        tlAgenda.from(agendaItems[i], {
            duration: 1,
            scaleY: 0,
            backgroundColor: "#14C3FF",
            ease: "power1.inOut",
        });
    }

    /* ---- scrollanimatie section ----*/
    const scrollAgenda = gsap.to($agenda, {
        x: -2000,
        scrollTrigger: { //scrolltrigger om heel de conversatie naar links te laten scrollen
            trigger: $agenda,
            start: "top 20%",
            end: "bottom -200%",
            pin: $section,
            scrub: true,
        }
    });
}

const lockdownMarch12 = () => {
    const $lockdownRows = Array.from(document.querySelectorAll('.lockdown__row'));
    const $section = document.querySelector('.lockdown');

    //pin element center
    gsap.to($section, {
        scrollTrigger: {
            trigger: $section,
            start: "top 10%",
            end: "0 -150%",
            scrub: 1,
            pin: $section,
        }
    })

    //scroll lockdown
    $lockdownRows.forEach($lockdownRow => {
        gsap.to($lockdownRow, {
            x: parseInt($lockdownRow.dataset.targetX),
            scrollTrigger: {
                trigger: $section,
                scrub: 5,
                start: "top 100%",
                end: "0 -200%",
            }
        })
    });
}

/*----------------------- MARCH16 -----------------------*/
const march16 = () => {
    const members = gsap.utils.toArray('.zoom__member');
    const $zoomFrame = document.querySelector('.zoom');
    const membersStandard = gsap.utils.toArray('.zoom__member--standard');
    const $memberMiguel = document.querySelector('.zoom__member--miguel');
    const $imgMiguel = document.querySelector('.miguel__img--content');
    const $contentMiguel = document.querySelector('.miguel__content');
    const $section = document.querySelector('.march16');

    /*---- setup ----*/
    gsap.set(members, {
        scale: 0,
    })

    gsap.set($memberMiguel, {
        zIndex: 1,
    })

    gsap.set($imgMiguel, {
        opacity: 0,
    })

    gsap.set($contentMiguel, {
        opacity: 0,
        scale: 1,
        x: -350,
    })

    gsap.to($section, {
        scrollTrigger: {
            trigger: $section,
            start: "top -5%",
            end: "bottom -5%",
            pin: $section,
        }
    })

    /*---- timeline ----*/
    const tlMarch16 = gsap.timeline({
        scrollTrigger: {
            trigger: $section,
            start: "top 25%",
            end: "bottom -20%",
            scrub: 0.5,
        }
    })

    tlMarch16
        .to(members, {
            scale: 1,
            duration: 1,
            ease: "power1.inOut",
            stagger: {
                each: 0.1,
                from: "random",
                grid: "auto",
                amount: 1,
            }
        })
        .to(membersStandard, {
            scale: 0,
            duration: 0.5,
            ease: "power1.inOut",
            stagger: {
                each: 0.1,
                from: "random",
                grid: "auto",
                amount: 1,
            }
        }, ">+2")
        .to($zoomFrame, {
            duration: 1,
            backgroundColor: '#FFF',
            boxShadow: 'none',
        }, "<")
        .to($memberMiguel, {
            duration: 2,
            scale: 3.7,
        }, "< +0.5")
        .to($memberMiguel, {
            duration: 1,
            x: -350,
        }, ">+1")
        .to($contentMiguel, {
            duration: 2,
            opacity: 1,
            x: 0,
            scale: 1,
        }, "<");
}

/*----------------------- SEPTEMBER28 -----------------------*/
const september28 = () => {
    const messages = gsap.utils.toArray(".message--september28");
    const $conversation = document.querySelector(".conversation--september28");
    const $section = document.querySelector('.september28');

    /*---- setup (to end state) ----*/
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

    /*---- scroll messages ----*/
    const tlMessages1 = gsap.timeline({
        scrollTrigger: {
            trigger: $conversation,
            start: "top 65%",
            end: "top 20%",
            scrub: true,
        }
    });

    const animationMessage = {
        ease: "power1.inOut",
        scale: 0,
    }

    const animationSpeak = {
        ease: "power1.inOut",
        scaleY: 0,
    }

    tlMessages1
        .to(messages[1], {
            ease: "power1.inOut",
            scaleY: 1,
        });

    for (let i = 2; i < 6; i++) {
        tlMessages1.from(messages[i], animationMessage);
    }

    const tlMessages2 = gsap.timeline({
        scrollTrigger: {
            trigger: messages[5],
            start: "top 55%",
            end: "top 25%",
            scrub: true,
        }
    });

    for (let i = 6; i < 12; i++) {
        tlMessages2.from(messages[i], animationMessage);
    }

    const tlMessages3 = gsap.timeline({
        scrollTrigger: {
            trigger: messages[15],
            start: "top -10%",
            end: "bottom -200%",
            scrub: true,
        }
    });

    tlMessages3
        .from(messages[10], animationSpeak)
        .from(messages[11], animationSpeak)
        .from(messages[12], animationMessage)
        .from(messages[13], animationMessage)
        .from(messages[14], animationMessage)
        .from(messages[15], animationMessage)

    // for (let i = 12; i < 16; i++) {
    //     tlMessages3.from(messages[i], {
    // ease: "power1.inOut",
    //         scale: 0,
    //     });
    // }

    let tlMessages = gsap.timeline();
    tlMessages
        .add(tlMessages2)
        .add(tlMessages3);

    /*---- scroll container ----*/
    gsap.to($conversation, {
        x: -2250,
        scrollTrigger: { //scrolltrigger om heel de conversatie naar links te laten scrollen
            trigger: $conversation,
            start: "top 30%",
            end: "bottom -150%",
            pin: $section,
            scrub: true,
        }
    });
}

/*----------------------- october11 -----------------------*/
const october11 = () => {
    const $coronaTest = document.querySelector('.hatchie__coronatest');
    const $doctorStamp1 = document.querySelector('.doctor-stamp--1');
    const $doctorStamp2 = document.querySelector('.doctor-stamp--2');
    const $word = document.querySelector('.hatchie__hatchie');
    const $zakdoek = document.querySelector('.hatchie__zakdoek');
    const $section = document.querySelector('.october11');

    /*---- setup ----*/
    gsap.set($coronaTest, {
        x: -550,
        y: 150,
        zIndex: 1,
    })

    gsap.set($doctorStamp1, {
        x: 700,
        y: 250,
    })

    gsap.set($doctorStamp2, {
        scale: 0,
        x: 0,
        y: 250,
    })

    gsap.set($word, {
        scale: 0,
    })

    gsap.set($zakdoek, {
        x: 900,
        y: -500,
        scale: 0,
        zIndex: 1,
    });

    /*---- pin section ----*/
    gsap.set($section, {
        scrollTrigger: {
            trigger: $section,
            start: "top 0%",
            end: "bottom 25%",
            pin: $section,
        }
    })

    /*---- timeline ----*/
    const tlOctober11 = gsap.timeline({
        scrollTrigger: {
            trigger: $section,
            start: "top 35%",
            end: "bottom 0%",
            scrub: true,
        }
    })

    tlOctober11.
        to('.hatchie__hatchie', {
            ease: "power1.inOut",
            duration: 0.3,
            scale: 1,
        })
        .to('.hatchie__hatchie', {
            ease: "power1.inOut",
            duration: 0.3,
            scale: -1,
        })
        .to('.hatchie__hatchie', {
            ease: "power1.inOut",
            duration: 0.3,
            scaleY: 1,
        })
        .to('.hatchie__hatchie', {
            ease: "power1.inOut",
            duration: 0.3,
            scaleX: 1,
        })

        .to('.hatchie__zakdoek', {
            ease: "power1.inOut",
            duration: 0.8,
            x: 700,
            y: -100,
            scale: 1,
        }, "<-0.5")

        .to('.hatchie__coronatest', {
            ease: "power1.inOut",
            duration: 1,
            x: 100,
        }, "<")

        .to('.doctor-stamp--1', {
            ease: "power1.inOut",
            duration: 1,
            x: 0,
        }, "<")

        .to('.doctor-stamp--2', {
            ease: "power1.inOut",
            scale: 1,
        })
}

/*----------------------- october20 -----------------------*/
/*---- les ----*/
const october20Les = () => {
    const lesstijlenImages = gsap.utils.toArray('.lesstijlen__img');
    const lesstijlenTexts = gsap.utils.toArray('.lesstijlen__text');
    const $section = document.querySelector('.lesstijlen');
    let yPosImg = 0;

    /*---- setup ----*/
    lesstijlenImages.forEach(img => {
        gsap.set(img,
            {
                y: yPosImg,
            }
        )

        yPosImg = yPosImg + gsap.getProperty(img, 'height') + 50;
    });

    lesstijlenTexts.forEach(text => {
        gsap.set(text,
            {
                transformOrigin: 'left bottom',
                scaleY: 0,
            }
        )
    });

    gsap.set(lesstijlenTexts[0],
        {
            transformOrigin: 'left top',
            scaleY: 1,
        }
    )

    /*---- pin section ----*/
    gsap.set($section, {
        scrollTrigger: {
            trigger: $section,
            start: "top 5%",
            end: "bottom 0%",
            pin: $section,
            markers: true,
        }
    })

    /*---- timeline ----*/
    const tlOctober20 = gsap.timeline({
        scrollTrigger: {
            trigger: $section,
            start: "top 5%",
            end: "bottom 0%",
            scrub: true,
            // markers: true,
        }
    });

    for (let i = 0; i < lesstijlenImages.length - 1; i++) {
        tlOctober20
            .to(lesstijlenImages[i], {
                ease: "power1.inOut",
                duration: 1,
                scale: 0.5,
            })
            .to(lesstijlenImages[i + 1], {
                ease: "power1.inOut",
                duration: 1,
                y: 0,
            }, "<")
            .to(lesstijlenTexts[i], {
                ease: "power1.inOut",
                transformOrigin: 'left top',
                duration: 1,
                scaleY: 0,
                opacity: 0,
            }, "<")

            .to(lesstijlenTexts[i + 1], {
                ease: "power1.inOut",
                duration: 1,
                scaleY: 1,
                opacity: 1,
            }, "<")
    }
}

/*---- friends ----*/
const october20Friends = () => {
    const $ankaIMG = document.querySelector('.friends__img--anka');
    const $miguelIMG = document.querySelector('.friends__img--miguel');
    const $miguelName = document.querySelector('.friends__name--miguel');
    const $ankaName = document.querySelector('.friends__name--anka');
    const $section = document.querySelector('.october20__friends');
    const lesstijlenImages = gsap.utils.toArray('.lesstijlen__list');

    /*---- setup ----*/
    gsap.set($ankaIMG, {
        transformOrigin: '0% 100%',
        x: 200,
    });

    gsap.set($miguelIMG, {
        transformOrigin: '100% 100%',
        x: -200,
    })

    /*---- timeline ----*/
    const tlFriendsScrolltrigger = {
        scrollTrigger: {
            trigger: '.friends',
            start: 'top 90%',
            end: 'top -100%',
            markers: true,
            scrub: 0.5,
        }
    }

    const tlMiguel = gsap.timeline(tlFriendsScrolltrigger);
    const tlAnka = gsap.timeline(tlFriendsScrolltrigger);

    tlMiguel
        .to(lesstijlenImages, {
            ease: "power1.inOut",
            duration: 1,
            opacity: 0,
        })
        .to($miguelIMG, {
            ease: "power1.inOut",
            duration: 3,
            rotation: 30,
            y: -200,
            x: 350,
        }, "<")
        .to($miguelName,
            {
                ease: "power1.inOut",
                duration: 0.5, text: "Miguel"
            }, "<+1")

    tlAnka
        .to($ankaIMG, {
            ease: "power1.inOut",
            duration: 3,
            rotation: -30,
            y: -200,
            x: -350,
        })
        .to($ankaName,
            {
                ease: "power1.inOut",
                duration: 0.5, text: "Anka"
            }, "<+1")
}

/*----------------------- february12 -----------------------*/
const february12 = () => {
    const team__members = gsap.utils.toArray('.team__member');
    const $question = document.querySelector('.team__question');
    const $answer = document.querySelector('.team__answer');
    const $section = document.querySelector('.february12');

    /*---- setup ----*/
    gsap.set(team__members, {
        scaleY: 0,
    })

    gsap.set($question, {
        scale: 0,
    })

    gsap.set($answer, {
        scale: 0,
    })

    /*---- pin section ----*/
    gsap.set($section, {
        scrollTrigger: {
            trigger: $section,
            start: "top -5%",
            end: "bottom 30%",
            pin: $section,
            markers: true,
        }
    })

    /*---- timeline ----*/
    const tlfebruary12 = gsap.timeline({
        scrollTrigger: {
            trigger: $section,
            start: "top 0%",
            end: "bottom 20%",
            scrub: true,
        }
    })

    tlfebruary12
        .to(team__members, {
            scaleY: 1,
            duration: 0.3,
            ease: "power1.inOut",
            stagger: {
                each: 0.1,
                from: "random",
            }
        })
        .to($question, {
            ease: "power1.inOut",
            duration: 1,
            scale: 1,
        }, "<1")
        .to($answer, {
            ease: "power1.inOut",
            duration: 1,
            scale: 1,
        }, "<2")
        .to($question, {
            ease: "power1.inOut",
            duration: 0.5,
            scale: 0,
        }, "<3")
        .to($answer, {
            ease: "power1.inOut",
            duration: 0.5,
            scale: 0,
        }, "<0.1")
        .to(team__members, {
            scaleY: 0,
            duration: 0.3,
            ease: "power1.inOut",
            stagger: {
                each: 0.1,
                from: "random",
            }
        }, "<0.1")
}

/*----------------------- june9 -----------------------*/
const june9 = () => {
    const $section = document.querySelector(".june9");

    const $conversationKatrijn = document.querySelector('.conversation__katrijn');
    const $conversationSiebe = document.querySelector('.conversation__siebe');
    const $conversationSilke = document.querySelector('.conversation__silke');

    const $messagesSiebe = document.querySelectorAll('.conversation__siebe > .message');
    const $messagesSilke = document.querySelectorAll('.conversation__silke > .message');
    const $messagesKatrijn = document.querySelectorAll('.conversation__katrijn > .message');

    /*---- setup ----*/
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

    /*---- pin section ----*/
    gsap.set($section, {
        scrollTrigger: {
            trigger: $section,
            start: "top -5%",
            end: "bottom 0%",
            pin: $section,
            markers: true,
        }
    })

    /*---- timeline ----*/
    const tlJune9 = gsap.timeline({
        scrollTrigger: {
            trigger: $section,
            start: "top 0%",
            end: "bottom 0%",
            scrub: true, //scrollt mee
        }
    });

    const animationMessage = {
        scale: 1,
        opacity: 1,
        duration: 1,
    };

    conversationHeightSiebe = conversationHeightSiebe - (gsap.getProperty($messagesSiebe[0], 'height')) - 40;
    conversationHeightKatrijn = conversationHeightKatrijn - (gsap.getProperty($messagesKatrijn[0], 'height')) - 40;
    conversationHeightSilke = conversationHeightSilke - (gsap.getProperty($messagesSilke[0], 'height')) - 40;
    tlJune9
        .to($conversationSiebe, {
            duration: 1,
            y: conversationHeightSiebe,
        })
        .to($messagesSiebe[0], animationMessage)
        .to($conversationKatrijn, {
            duration: 1,
            y: conversationHeightKatrijn,
        }, ">-1.5")
        .to($messagesKatrijn[0], animationMessage, ">")
        .to($conversationSilke, {
            duration: 1,
            y: conversationHeightSilke,
        }, ">-1.5")
        .to($messagesSilke[0], animationMessage, ">");

    conversationHeightKatrijn = conversationHeightKatrijn - (gsap.getProperty($messagesKatrijn[1], 'height')) - 40;
    tlJune9
        .to($conversationKatrijn, {
            duration: 1,
            y: conversationHeightKatrijn,
        }, ">-0.3")
        .to($messagesKatrijn[1], animationMessage, ">")

    conversationHeightKatrijn = conversationHeightKatrijn - (gsap.getProperty($messagesKatrijn[2], 'height')) - 40;
    conversationHeightSilke = conversationHeightSilke - (gsap.getProperty($messagesSilke[1], 'height')) - 40;
    tlJune9
        .to($conversationKatrijn, {
            duration: 1,
            y: conversationHeightKatrijn,
        })
        .to($messagesKatrijn[2], animationMessage)
        .to($conversationSilke, {
            duration: 1,
            y: conversationHeightSilke,
        }, ">-1.8")
        .to($messagesSilke[1], animationMessage, ">");

    conversationHeightKatrijn = conversationHeightKatrijn - (gsap.getProperty($messagesKatrijn[3], 'height')) - 40;
    tlJune9
        .to($conversationKatrijn, {
            duration: 1,
            y: conversationHeightKatrijn,
        })
        .to($messagesKatrijn[3], animationMessage)

    conversationHeightKatrijn = conversationHeightKatrijn - (gsap.getProperty($messagesKatrijn[4], 'height')) - 40;
    tlJune9
        .to($conversationKatrijn, {
            duration: 1,
            y: conversationHeightKatrijn,
        })
        .to($messagesKatrijn[4], animationMessage)


    conversationHeightSiebe = conversationHeightSiebe - (gsap.getProperty($messagesSiebe[1], 'height')) - 40;
    conversationHeightSilke = conversationHeightSilke - (gsap.getProperty($messagesSilke[2], 'height')) - 40;
    tlJune9
        .to($conversationSiebe, {
            duration: 1,
            y: conversationHeightSiebe,
        }, ">-1.5")
        .to($messagesSiebe[1], animationMessage, ">")
        .to($conversationSilke, {
            duration: 1,
            y: conversationHeightSilke,
        }, ">-1")
        .to($messagesSilke[2], animationMessage, ">");

    conversationHeightSiebe = conversationHeightSiebe - (gsap.getProperty($messagesSiebe[2], 'height')) - 40;
    conversationHeightKatrijn = conversationHeightKatrijn - (gsap.getProperty($messagesKatrijn[5], 'height')) - 40;
    conversationHeightSilke = conversationHeightSilke - (gsap.getProperty($messagesSilke[3], 'height')) - 40;
    tlJune9
        .to($conversationSiebe, {
            duration: 1,
            y: conversationHeightSiebe,
        }, ">-1.5")
        .to($messagesSiebe[2], animationMessage, ">")
        .to($conversationSilke, {
            duration: 1,
            y: conversationHeightSilke,
        }, ">-1")
        .to($messagesSilke[3], animationMessage, ">")
        .to($conversationKatrijn, {
            duration: 1,
            y: conversationHeightKatrijn,
        })
        .to($messagesKatrijn[5], animationMessage)
}

/*----------------------- july17 -----------------------*/
const july17 = () => {
    const images = gsap.utils.toArray(".trouw__img");
    const imagesBox = document.querySelector(".trouw__imgs");
    const $section = document.querySelector(".july17");

    gsap.set($section, {
        scrollTrigger: {
            trigger: $section,
            start: "top -7%",
            end: "bottom 0%",
            pin: $section,
            markers: true,
        }
    })

    scrollImages = gsap.to(images, {
        xPercent: -100 * (images.length - 1) - 30,
        ease: "none",
        scrollTrigger: {
            trigger: $section,
            start: "top -7%",
            end: () => {
                return "+=" + (imagesBox.offsetWidth) //neemt breedte van element als eindpositie --> 
            },
            scrub: 1,
        }
    })
}

/*----------------------- INIT -----------------------*/
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