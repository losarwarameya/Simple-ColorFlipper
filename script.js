const body = document.getElementsByTagName("body")[0];
const flipButton = document.querySelector(".btn");
const heading = document.getElementsByTagName("h1")[0];
function numToHexa() {
    const num=Math.floor(Math.random()*16);
    if (num>=0 && num<=9) {
        return String(num);
    }else if(num===10){
        return "A";
    }else if(num===11){
        return "B";
    }else if(num===12){
        return "C";
    }else if(num===13){
        return "D";
    }else if(num===14){
        return "E";
    }else{
        return "F";
    }
}

function randomColorGenerator() {
    const randomColor="#"+numToHexa()+numToHexa()+numToHexa()+numToHexa()+numToHexa()+numToHexa();
    return randomColor;
}

flipButton.addEventListener('click', ()=>{
    const color=randomColorGenerator();
    heading.innerHTML=color;
    body.style.backgroundColor=color;

})