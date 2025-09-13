const september28 = () => {
    const messages = gsap.utils.toArray(".message--september28");
    const $conversation = document.querySelector(".conversation--september28");

    gsap.set(messages, {
        opacity: 0,
        scale: 1,
    });

    gsap.set(messages[0], {
        opacity: 1,
    });

    gsap.set(messages[1], {
        transformOrigin: '0% 0%',
        y: gsap.getProperty(messages[0], 'height') + 10, //puur text zonder padding...)
        x: -gsap.getProperty(messages[1], 'width') - 30, //puur text zonder padding...)
        opacity: 1,
        scaleY: 0,
    });

    // let scrollConversation = gsap.to(messages, {
    //     x: -4500,
    //     scrollTrigger: {
    //         trigger: $conversation,
    //         start: "top 30%",
    //         end: "bottom 0%",
    //         pin: '.september28',
    //         scrub: 1,
    //         //markers: true,
    //     }
    // })

    // const tlMessages1 = gsap.timeline();
    // tlMessages1
    //     .to(messages[1], {
    //         duration: 1,
    //         scaleY: 1,
    //         opacity: 1,

    //         scrollTrigger: {
    //             trigger: $conversation,
    //             start: "top 60%",
    //             end: "top 65%",
    //             //pin: messages[0], 
    //             scrub: 1,
    //             //markers: true,
    //         }
    //     })

    //let tlMessages = gsap.timeline();

    ScrollTrigger.create({
        trigger: messages[0],
        containerAnimation: tlMessages,
        animation: tlMessages1,
        start: "left 75%",
        scrub: true,
        //markers: true,
    });

    // ScrollTrigger.create({
    //     trigger: $conversation,
    //     containerAnimation: scrollConversation,
    //     animation: tlMessages,
    //     pin: ".september28",
    //     start: "left 75%",
    //     end: "right -1000%",
    //     scrub: true,
    //     markers: true,
    // })
}