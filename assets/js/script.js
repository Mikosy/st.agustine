// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//         loop: true, // Allows infinite loop sliding
//         margin: 10, // Space between items
//         nav: true,  // Show next and prev buttons
//         autoplay: true, // Automatically start sliding
//         autoplayTimeout: 3000, // 3 seconds delay for autoplay
//         responsive: {
//             0: {
//                 items: 1 // Show 1 item on screens less than 600px
//             },
//             600: {
//                 items: 2 // Show 2 items on screens 600px and up
//             },
//             1000: {
//                 items: 3 // Show 3 items on screens 1000px and up
//             }
//         }
//     });
// });


function animateCounter(counterElement, targetValue, duration, isFormatted) {
    let startValue = 0;
    const stepTime = Math.abs(Math.floor(duration / targetValue));
    const counter = setInterval(function () {
        startValue += 1;
        if (isFormatted) {
            // Format the number with commas and add a "+" sign
            counterElement.textContent = startValue.toLocaleString() + '+';
        } else {
            // No formatting, just the number
            counterElement.textContent = startValue;
        }
        if (startValue >= targetValue) {
            clearInterval(counter);
        }
    }, stepTime);
}

// Run animation when the page has loaded
window.onload = function () {
    const parishionersCounter = document.getElementById("parishioners-counter");
    const priestsCounter = document.getElementById("priests-counter");

    // Format parishioners with commas and "+" sign
    animateCounter(parishionersCounter, parishionersCounter.getAttribute('data-count'), 500, true);

    // Do not format priests (no commas or "+" sign)
    animateCounter(priestsCounter, priestsCounter.getAttribute('data-count'), 500, false);
};