// let myDiv = document.querySelector('#test');

// let plusBtn = document.querySelector('#plus');

// const minusBtn = document.querySelector('#minus');

// let width = parseInt(getComputedStyle(myDiv).width);


// console.log(width);

// plusBtn.addEventListener('click', ()=>{
//     width += 5;
//     myDiv.style.width = width + "px"
// })


let elements = document.querySelectorAll('.element');

elements.forEach(el =>{
    el.addEventListener('mouseover', (e)=>{
        console.log("MIQ");
    })
})

document.addEventListener('keypress', (e)=>{
    if (e.key == '9') {
        window.location = "https://google.com/"
    }
})

// elements.forEach(element => {
//     element.addEventListener('click' , (e)=>{      
//         let index = [...elements].indexOf(e.target);
//         elements.forEach(((el, i) => {
//             el.style.backgroundColor = i <= index ? 'red' : 'white'
//         }))
//     })
// })

console.log(Math.trunc(-5.5));
console.log(Math.floor(-5.5));


let arr = ['Asiman', 'Memmed', 'Hesen', 'Ismayil'];

let obj = {
    username : "Hesen",
    password : "Salam123"
}

localStorage.setItem('user' , JSON.stringify(obj))

console.log(JSON.parse(localStorage.getItem('user')))
localStorage.removeItem('user')