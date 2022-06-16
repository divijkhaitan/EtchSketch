const size=640
const divcontainer=document.querySelector(".divcont")    
draw(16);

let eraser=false;
const rgb=false;

let drawing= false;
document.addEventListener('mousedown',pressed)
document.addEventListener('mouseup',left)
function pressed()
{
    //console.log("Pressed")
    drawing=true;
}
function left()
{
    //console.log('left')
    drawing=false;
}

const btn=document.querySelector('.btn')
btn.addEventListener('click',clicked)
function clicked()
{
    const inp=document.querySelector('input');
    const squares=inp.value;
    if(squares<1)
    return
    draw(squares);
}
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
            div1.style.border= "1px solid black"
            div1.style.width=`${size/boxnumber}px`
            div1.style.height=`${size/boxnumber}px`
            div1.addEventListener('mouseenter',colour)
            divcols.appendChild(div1);
        }
        divrows.appendChild(divcols)
    }
    divcontainer.appendChild(divrows);
}
function colour(e)
{
    //console.log(drawing)
    if(drawing)
    {
        if(eraser)
        {
            e.target.style.backgroundColor="white";
        }
        else
        {
            if(rgb)
            {
                let randcol= Math.floor(Math.random()*16777215).toString(16);
                console.log(randcol)
                e.target.style.backgroundColor=Math.floor(Math.random()*16777215).toString(16);
                console.log(e.target)
            }
            else
            {
                e.target.style.backgroundColor="black";
            }
        }
    }
}
function erase()
{
    if(eraser)
    eraser=false
    else
    eraser=true
}