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

const march11 = () => {
    const mail = document.querySelector('.mail');
    const messagesMarch11 = document.querySelectorAll('.message--march11');
    const messagesSent = document.querySelectorAll('.message--sent');

    const tlMarch11 = gsap.timeline({
        scrollTrigger: {
            trigger: mail,
            start: "top 75%",
            end: "top 20%",
            scrub: true, //scrollt mee
        }
    });

    /*mail setup*/
    gsap.set(mail, { x: 575 });

    /*messages setup*/
    messagesMarch11.forEach(message => {
        gsap.set(message, {
            transformOrigin: '0% 100%',
            scale: 0,
            opacity: 0,
        });
    });

    messagesSent.forEach(message => {
        gsap.set(message, {
            transformOrigin: '100% 100%',
        });
    });

    /*tl animation*/
    tlMarch11.to(mail, {
        x: 0,
        duration: 2,
        ease: "power1.inOut",
    })

    messagesMarch11.forEach(message => {
        tlMarch11.to(message, {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.5,
        })
    });
}

const agendaMarch11 = () => {
    const agendaItems = gsap.utils.toArray(".agenda__container");

    const $agenda_830 = document.querySelector(".agenda__8-30");
    const $agenda_900 = document.querySelector(".agenda__9-00");
    const $agenda_930 = document.querySelector(".agenda__9-30");
    const $agenda_1100 = document.querySelector(".agenda__11-00");
    const $agenda_1300 = document.querySelector(".agenda__13-00");
    const $agenda_1500 = document.querySelector(".agenda__15-00");
    const $agenda_1630 = document.querySelector(".agenda__16-30");
    const $agenda_1700 = document.querySelector(".agenda__17-00");
    const $agenda_1800 = document.querySelector(".agenda__18-00");
    const $agenda_1900 = document.querySelector(".agenda__19-00");
    const $agenda_2000 = document.querySelector(".agenda__20-00");
    const $agenda_2100 = document.querySelector(".agenda__21-00");

    const itemHeight = $agenda_830.getBoundingClientRect().height + 10;

    /*agenda setup*/
    agendaItems.forEach(item => {
        gsap.set(item, {
            y: -150,
        });
    });

    gsap.set($agenda_900, {
        x: -125,
    })

    gsap.set($agenda_930, {
        x: -($agenda_900.getBoundingClientRect().width),
    })

    gsap.set($agenda_1100, {
        x: -($agenda_900.getBoundingClientRect().width) - 80,
    })

    gsap.set($agenda_1300, {
        x: -800,
    })

    gsap.set($agenda_1500, {
        x: -1000,
    })

    gsap.set($agenda_1630, {
        x: -1080,
    })

    gsap.set($agenda_1700, {
        x: -1300,
    })

    gsap.set($agenda_1800, {
        x: -1390,
    })

    gsap.set($agenda_1900, {
        x: -1600,
    })

    gsap.set($agenda_2000, {
        x: -1800,
    })

    gsap.set($agenda_2000, {
        x: -1800,
    })

    gsap.set($agenda_2100, {
        x: -1945,
    })


    /*agenda timeline*/
    let tlAgenda = gsap.timeline({
        scrollTrigger: {
            trigger: ".march12__agenda",
            start: "top 50%",
            end: "top -50%",
            scrub: true, //scrollt mee
            horizontal: true,
        }
    });

    tlAgenda.to($agenda_830, {
        y: -(itemHeight) / 2,
    });

    tlAgenda.to(".agenda__9-00", {
        y: (itemHeight) / 2,
    });

    tlAgenda.to(".agenda__9-30", {
        y: -(itemHeight) / 2,
    });

    tlAgenda.to(".agenda__11-00", {
        y: (itemHeight) / 2,
    })

    tlAgenda.to(".agenda__13-00", {
        y: -(itemHeight) / 2,
    })

    tlAgenda.to(".agenda__15-00", {
        y: (itemHeight) / 2,
    })

    tlAgenda.to(".agenda__16-30", {
        y: -(itemHeight) / 2,
    })

    tlAgenda.to(".agenda__17-00", {
        y: (itemHeight) / 2,
    })

    tlAgenda.to(".agenda__18-00", {
        y: -(itemHeight) / 2,
    })

    tlAgenda.to(".agenda__19-00", {
        y: (itemHeight) / 2,
    })

    tlAgenda.to(".agenda__20-00", {
        y: -(itemHeight) / 2,
    })

    tlAgenda.to(".agenda__21-00", {
        y: (itemHeight) / 2,
    })

    /*agenda horizontalscroll*/
    gsap.set('.agenda', {
        x: 300,
    });

    gsap.to('.agenda', {
        xPercent: -100 * (agendaItems.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".march12__agenda",
            start: "top 50%",
            end: "top -100%",
            scrub: true,
            pin: '.march12',
        }
    });
}

const lockdownMarch12 = () => {
    const $lockdownRows = Array.from(document.querySelectorAll('.lockdown__row'));
    $lockdownRows.forEach($lockdownRow => {
        const targetX = ;
        gsap.to($lockdownRow, {
            x: targetX,
            scrollTrigger: {
                trigger: ".lockdown",
                scrub: true,
            }
        })
    });

    // const $lockdown1 = document.querySelector('.lockdown__row--1');
    // const $lockdown2 = document.querySelector('.lockdown__row--2');
    // const $lockdown3 = document.querySelector('.lockdown__row--3');

    // gsap.to($lockdown1, {
    //     x: -700,
    //     scrollTrigger: {
    //         trigger: ".lockdown",
    //         scrub: true,
    //     }
    // })

    // gsap.to($lockdown2, {
    //     x: 700,
    //     scrollTrigger: {
    //         trigger: ".lockdown",
    //         scrub: true,
    //     }
    // })

    // gsap.to($lockdown3, {
    //     x: -700,
    //     scrollTrigger: {
    //         trigger: ".lockdown",
    //         scrub: true,
    //     }
    // })

    gsap.to('.lockdown', {
        scrollTrigger: {
            trigger: ".lockdown",
            start: "top 10%",
            end: "0 -50%",
            pin: ".lockdown",
            scrub: true,
        }
    })
}

const march16 = () => {
    /*setup timeline*/
    const tlMarch16 = gsap.timeline({
        scrollTrigger: {
            trigger: ".zoom",
            start: "top 10%",
            pin: ".march16",
            scrub: true,
        }
    })

    /* setup zoom */
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
    })

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
    })

    tlMarch16.to('.zoom', {
        duration: 1,
        backgroundColor: '#FFF',
        boxShadow: 'none',
    }, "<")

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

const october11 = () => {
    gsap.set('.hatchie__zakdoek', {

    })

    const tlOctober11 = gsap.timeline({
        scrollTrigger: {
            trigger: ".hatchie",
            start: "top 20%",
            scrub: true,
            pin: ".october11",
            markers: true,
        }
    })

    tlOctober11.to('.hatchie__a', {
        scaleY: -1,
        stagger: {
            each: 0.1,
            from: "random",
            amount: 1,
        }
    });
}

const intro = () => {
    const tlIntro = gsap.timeline({
        scrollTrigger: {
            trigger: ".september28",
            start: "top 80%",
            end: "top 30%",
            scrub: true, //scrollt mee
        }
    });

    /*intro setup*/
    gsap.set('.intro__content', {
        transformOrigin: '100% 100%',
        scale: 0,
        opacity: 0,
    });

    /*tl animation*/
    tlIntro.to('.intro__content', {
        scale: 1,
        opacity: 1,
        ease: "power1.inOut",
    });
}

const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    //intro();

    moveCoronatest();
    march11();
    // agendaMarch11();
    lockdownMarch12();
    march16();
    october11();

}

init();