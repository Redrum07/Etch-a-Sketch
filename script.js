"use strict";
const body = document.querySelector("body");
body.style = "box-sizing:border-box; display:flex; flex-direction:column; align-items: center ;background-color: rgb(53, 52, 52);";

let sketchPadLength = 16;

const container = document.querySelector(".container");
container.style = "display:flex; flex-direction:column; height:500px; width:500px;";

const h1 = document.querySelector("h1");
h1.style.color = "yellow";

const container2 = document.querySelector(".container2");

const btn = document.createElement("button");
btn.textContent = "Click ME!";
btn.style.marginBottom = '5px';
container2.appendChild(btn);

btn.addEventListener('click', e=>{
        
        sketchPadLength = Number(prompt("Enter a number between 1 and 100", ""));
        container.innerHTML = "";
        generateSketchPad();
        console.log(sketchPadLength);
});
function getRandomColor(){

        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);

        return `rgb(${r}, ${g}, ${b})`;
}


const generateSketchPad = function (){
        for(let i=0; i<sketchPadLength; i++){
             const row = document.createElement("div");
             row.style ="display:flex; flex-grow:1";   
                
             for(let j=0; j<sketchPadLength; j++){
                const square = document.createElement("div");
                square.style = "flex-grow:1 ; border : 1px solid white";
                square.addEventListener("mouseover", e=>{
                        e.target.style.backgroundColor = getRandomColor();
                });
                row.appendChild(square);
                }
                container.appendChild(row);
        }
};
generateSketchPad();





