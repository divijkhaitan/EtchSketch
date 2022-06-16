const size=640
const divcontainer=document.querySelector(".divcont")    
draw(16);
const btn=document.querySelector('.btn')
btn.addEventListener('click',clicked)
function draw(boxnumber)
{
    const divrows=document.createElement('div');
    divrows.classList.add('divrow')
    
    while(divcontainer.firstChild)
    divcontainer.removeChild(divcontainer.lastChild)
    
    for(let i=0;i<boxnumber;i++)
    {
        const divcols=document.createElement('div');
        divcols.classList.add('divcol')
        for(let i=0;i<boxnumber;i++)
        {
            const div1=document.createElement('div'); 
            div1.style.border= "2px solid black"
            div1.style.width=`${size/boxnumber}px`
            div1.style.height=`${size/boxnumber}px`
            divcols.appendChild(div1);
        }
        divrows.appendChild(divcols)
    }
    divcontainer.appendChild(divrows);
}

function clicked()
{
    const form=document.querySelector('form')
}