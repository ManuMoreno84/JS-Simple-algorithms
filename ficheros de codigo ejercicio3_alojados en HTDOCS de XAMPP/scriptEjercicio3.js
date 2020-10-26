console.log('Hello');
const cookiesAccepted = confirm("This website will store cookies about your visit");
console.log(cookiesAccepted);
let firstName, lastNameFather, lastNameMother, fecha, expirationDate, showCookie; /*, height, weight, hasJob;*/

let nameInput, fatherNameInput, motherNameInput;
let nameInputValue, fatherNameInputValue, motherNameInputValue;

function required (){
  
}

document.getElementById('Save').addEventListener('click',()=>{

  nameInput = document.getElementById('nameInput').value;
  if(nameInput === ""){
    alert("Por favor, introduce tu nombre para continuar")
  } else {
    nameInputValue = true;
    if(nameInputValue){
      fatherNameInput = document.getElementById('lastNameInput').value;
       if(fatherNameInput === ""){
        alert("Por favor, introduce tu primer appellido para continuar")
      } else {
      fatherNameInputValue = true;
      if(fatherNameInputValue){
        motherNameInput = document.getElementById('lastNameInput2').value;
         if(motherNameInput === ""){
          alert("Por favor, introduce tu segundo appellido para continuar")
        } else {
              motherNameInputValue = true;
              firstName = document.getElementById('nameInput').value;
              lastNameFather = document.getElementById('lastNameInput').value;
              lastNameMother = document.getElementById('lastNameInput2').value;
              fecha = Date.now();
              console.log(`${fecha}`);
              expirationDate = (fecha+259200000);
              console.log(expirationDate);
              console.log(firstName);
              console.log(lastNameFather);
              console.log(lastNameMother);
              document.cookie = `firstName=${firstName}; expires=(${Date.now()}==${expirationDate})`;
              document.cookie = `lastNameFather=${lastNameFather}; expires=(${Date.now()}==${expirationDate}))`;
              document.cookie = `lastNameMother=${lastNameMother}; expires=(${Date.now()}==${expirationDate}))`;
              console.log(document.cookie);
              console.log(expirationDate);
       
           showCookie = `The cookies stored from your session are: \n ${(document.cookie)}`;
           console.log(showCookie);

           const textArea = document.getElementById('textArea');
           textArea.innerHTML = `${showCookie}`;  
           }
          } 
        } 
      }
    }
  }
);