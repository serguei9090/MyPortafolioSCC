// links
// const sections = document.querySelectorAll("section");
// console.log(sections);
// const navLi = document.querySelectorAll("nav ul li a");
// // console.log(navLi);
// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//         current = section.getAttribute("id");
//         console.log(current);
//     }
// });

// navLi.forEach((a) => {
//     a.classList.remove("active");
//     // console.log(a.classList);
//     if (a.classList.contains(current)) {
//         a.classList.add("active");
//     }
// });
// });


const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})
// creating dynamic project card

const projectContainer = document.querySelector('.project-container');

projects.forEach(project => {
    projectContainer.innerHTML += `
    <a class="project-link" href="${project.link}">
    <div class="project-card" data-tags="#all, ${project.tags}">
    <img src="img/${project.image}" alt="">
    <div class="content">
            <h1 class="project-name">${project.name}</h1>
            <span class="tags">${project.tags}</span>
        </div> 
    </div>
    </a>
    `;
})
// filters

const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');
        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if (card.getAttribute('data-tags').includes(id)) {
                card.parentNode.classList.remove('hide');
            } else {
                card.parentNode.classList.add('hide');
            }
        })

        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
    })
})
//contact form
const contactBtn = document.querySelector('.contact-btn');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const msg = document.querySelector('.message');

// contactBtn.addEventListener('click', () => {
//     if(firstName.value.length && lastName.value.length && email.value.length && msg.value.length){
//         fetch('/mail', {
//             method: 'post',
//             headers: new Headers({'Content-Type': 'application/json'}),
//             body: JSON.stringify({
//                 firstname: firstName.value,
//                 lastname: lastName.value,
//                 email: email.value,
//                 msg: msg.value,
//             })
//         })
//         .then(res => res.json())
//         .then(data => {
//             alert(data);
//         })
//     }
// })
//toggle button
const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})
//Language ToggleBtn
const toggleBtns = document.querySelector('.dropdownbt');
const dropdownContents = document.querySelector('.dropdown-content');

toggleBtns.addEventListener('click', () => {
    toggleBtns.classList.toggle('active');
    dropdownContents.classList.toggle('show');
})


//Init AOS Animation
AOS.init({
    easing: 'ease-in-out-sine'
});