// let btn = document.querySelector(".top button") ;

// let url = 

// let shopSection = document.querySelector('.shop-section');

// shopSection.innerHTML = `
// <div class="box1 box">
// <h2>Just in: gifts from Coach</h2>
// <div class="img1"></div>
// <a href="">Shop Now</a>
// </div>
// `;


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);
            