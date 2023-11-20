let box = document.querySelector('#box');

box.addEventListener("mousemove", (det) => {

    let boxLocation = box.getBoundingClientRect();
    let mouseLocationOnBox = det.x - boxLocation.left;

    if(mouseLocationOnBox < boxLocation.width/2){
        let colour = gsap.utils.mapRange(0, boxLocation.width/2, 255, 0, mouseLocationOnBox);
        gsap.to(box, {
            backgroundColor: `rgb(${colour}, 0, 0)`,
            ease: Power4
        });
    }else{
        let colourRight = gsap.utils.mapRange(boxLocation.width/2, boxLocation.width, 0, 255, mouseLocationOnBox);
        gsap.to(box, {
            backgroundColor: `rgb(0, 0, ${colourRight})`,
            ease: Power4
        });
    }
});

box.addEventListener('mouseleave', () => {
    gsap.to(box, {
        backgroundColor: "transparent"
    })
});