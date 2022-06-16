const divcontainer =document.querySelector(".divcont")
const divrows=document.createElement('div');
divrows.classList.add('divrow')

let temp;
for(let i=0;i<16;i++)
{
    const divcols=document.createElement('div');
    divcols.classList.add('divcol')
    divcols.style.display="flex"
    for(let i=0;i<16;i++)
    {
        const div1=document.createElement('div'); 
        div1.style.border= "2px solid black"
        div1.style.width="40px"
        div1.style.height="40px"
        divcols.appendChild(div1);
    }
    divrows.appendChild(divcols)
}
console.log(1)
divcontainer.appendChild(divrows);