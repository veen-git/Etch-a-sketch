
let d = 16;
createDiv(d);

const button = document.querySelector("button")
button.addEventListener("click", () => {
  let c = parseInt(prompt("pick a number less than 100"));
  (c > 100)?alert("number too high"): deleteDiv();
  createDiv(c);
})

function createDiv(squares) {
    const divContainer = document.querySelector("#Container")
    let i = 0; 
        while (i < (squares**2)){
            const div = document.createElement("div");
            div.setAttribute("class","paper")
            div.style.flexGrow = "1"
            div.style.flexShrink = "1"
            div.style.height = `${100/squares}%`
            div.style.width = `${100/squares}%`
           
            
        
            divContainer.appendChild(div);
        
            i++
        }   
}

function deleteDiv() {
   const parent = document.getElementById("Container")
   while (parent.firstChild) parent.removeChild(parent.firstChild)
}



