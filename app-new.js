

const elements = document.querySelector(".wrapper").children
console.log(elements)

for ( el of elements){
    el.style.transform="scale(.95)"
}