// OPERATIONAL BUTTONS 
const buttons= [
    {
        value:"Additional",
        color:"#1080DD"
       
    },
    {
        value:"Minus",
        color:"#1BA1E2"

    },

    {
        value:"Division",
        color:"#F09609"

    },

    {
        value:"Multiplication",
        color:"#E51400"
        
    }


]

var sum = 0;

// DOM ELEMENTS 

var buttonsContainer = document.querySelector('.operational_buttons_container');
const taskForm = document.querySelector('#task-form');
const actual_answer = document.querySelector('.actual_answer')
const first_number_input = document.querySelector('#first_number_input');
const second_number_input = document.querySelector('#second_number_input');



// ADDING THE BUTTONS TO THE DOM 
buttons.forEach( (btn) =>{

    var buttonElement = document.createElement('button');
    buttonElement.innerHTML = `${btn.value}`;

    buttonElement.classList.add(`operation_button`);
    buttonElement.classList.add(`${btn.value}`);
    buttonElement.style.backgroundColor = `${btn.color}`;
    buttonsContainer.appendChild(buttonElement);

})

// VALIDATION FUNCTION 
const validate = (btn)=>{
    var first_number = first_number_input.value;
    var second_number = second_number_input.value;


    if((first_number.trim()).length == 0 || (second_number.trim()).length == 0 )
    {
        alert("Input All numbers")
    }
    else{

    first_number =  Number(first_number);
    second_number= Number(second_number);
    
   if (btn.innerText == "Additional") {
    
    sum = first_number + second_number;
    console.log(sum);
   }
   else if(btn.innerText == "Minus"){

        sum = first_number - second_number;
        console.log(sum);
    }

    else if(btn.innerText == "Division"){
    
        sum = first_number / second_number;
        console.log(sum);
    }

    else {
    
        sum = first_number * second_number;
       
    }


    actual_answer.innerText = sum
    first_number_input.value = '';
    second_number_input.value = '';


   }
}

// GET ARRAY OF OPERATION BUTTONS
let btnss = buttonsContainer.childNodes;

// LOOP THROUGH EACH OPERATIONAL BUTTON FOR FUNCTIONALITY 
btnss.forEach((btn)=>{

    btn.addEventListener("click", () => validate(btn));
});


