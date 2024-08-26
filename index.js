let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

// Navigation Bar 
let navbar = document.querySelector('nav');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};
// Number counting
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.num');
    const speed = 200;

    const startCounting = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-val');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, { threshold: .5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


// career form
// document.querySelector("form").addEventListener("submit", function(event) {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;

//     if (name === "" || email === "") {
//         alert("Name and email are required fields.");
//         event.preventDefault();
//     }
// });
