const container1 = document.querySelector('.box1')
const create_note = document.querySelector('.create');
const note = document.querySelector('.box2')
const xNote = document.querySelector('.fa-xmark')
const acceptNote = document.querySelector('.fa-check')

create_note.addEventListener('click', () => newNote()) 

  function newNote(){
    if(note.style.display === "none"){
        note.style.display = "block"
    }else{
        
        note.style.display = "none"
    }
    console.log("elo")
  }

  xNote.addEventListener('click', () => newNote())
   
  acceptNote.addEventListener('click', () => create())

  function create(){
    const noteText = document.querySelector('.text').value;

    let note1 = document.createElement("div");
    let note2 = document.createElement("p");
    let upStrap = document.createElement("div");
    
    note1.className = "note"
    upStrap.className ="strap"
    
    
    note2.innerHTML = noteText

    upStrap.style.background = cos();

    note1.appendChild(upStrap);
    note1.appendChild(note2);
    document.querySelector(".box1").appendChild(note1);
    
    note1.addEventListener("dblclick", () => note1.remove())
  }

  
  
 function cos(){
     let random_slide = ["yellow", "red", "blue", "green", "gold"];

     return random_slide[Math.floor(Math.random() * random_slide.length)];

 }
  