// group of message handle 
let msg = {
    normal : 'Your Cat Age compare to Human age is : ',
    rangeErr : " Please, insert cat's age between 1-14 years",
    stringErr : "Please nsert cat's age in number"
}

// Provided html from exercise 2
function displayHumanAge(target ="app"){
    document.getElementById(target).innerHTML = `
  <h1>JS Quiz</h1>
  <div>
    <h3>2. Calculate Cat Years to Human Years</h3>
    <a href="http://www.catster.com/wp-content/uploads/2015/06/catages.png">Diagram</a>
  </div> ${inputBoxes()}<br> `;
  }

// Insert input boxes to html file 
function inputBoxes(){
    return submitForm = `
    <div align ="">
    <img src="http://www.catster.com/wp-content/uploads/2015/06/catages.png" alt="Trulli">
    <br>
    Please choose your cat's type : <br>
    <input type="radio" name="catType" value="indoor" checked> Indoor Cat<br>
    <input type="radio" name="catType" value="outdoor"> Outdoor Cat<br><br>
    
    Please insert your cat's age : <br>
    <input type="text" name="ageCat" id="inputText" value=""><br><br>
    <button onclick="convertCatAge()"> Submit </button>
    </div>
 `;
}

// function to convert cat's age to human's age
function calCatAge(catAged,typeOfCat){
    let humanAgeAns ='';
    catAge = Math.round(catAged); // Handle floating input value
    switch(catAge){
        case 1: 
            humanAge = 15;
            humanAgeAns = `${msg.normal} ${humanAge}`;   
            break;
        case 2: 
            humanAge = 24;
            humanAgeAns = `${msg.normal} ${humanAge}`;   
            break;
        default:
            if(!isNaN(catAge)) // check whether input is number or not
            {   
                if(catAge>=3 && catAge <15) // check whether input is between 3-14 or not
                {
                    if(typeOfCat === 'indoor'){
                        humanAge = 28;
                        for(let initAge = 3; initAge < catAge; initAge++){
                            humanAge +=4;
                        }
                    }else {
                        humanAge = 32;
                        for(let initAge = 3; initAge < catAge; initAge++){
                            humanAge +=8;
                        }
                    }
                    humanAgeAns = `${msg.normal} ${humanAge}`;       
                }
                else{
                    humanAgeAns = msg.rangeErr;
                }
            }
            else{ 
                humanAgeAns = msg.stringErr;
            }
    } 
    displayHumanAge();
    return humanAgeAns;
}

//main function to provide result
function convertCatAge(){
    let catAge = parseFloat(document.getElementById("inputText").value);
    let catType = document.querySelector('input[name="catType"]:checked').value;
    let humanAgeResult = calCatAge(catAge,catType);
    alert(humanAgeResult);

}

displayHumanAge();





//----------------------------------------------------------------------------------
// const humanAge = 1;

// function calCatAge(humanAge){
//     let indoorCatAge = 0, outdoorCatAge =0;
//     switch(humanAge){
//         case 1: 
//             indoorCatAge = 15, outdoorCatAge = 15;
//             break;
//         case 2: 
//             indoorCatAge = 24, outdoorCatAge = 24;
//             break;
//         default:
//             indoorCatAge = 28, outdoorCatAge = 32;
//             if(humanAge>=3 && humanAge <15){
//                 for(let init =3; init < humanAge; init++){
//                     indoorCatAge +=4;
//                     outdoorCatAge +=8;
//                 }
//             }
//             else{
//                 indoorCatAge = 0, outdoorCatAge = 0;
//                 alert("Input Cat Age out of Range")
//             }
//     } 
//     let arrCatAge = [indoorCatAge,outdoorCatAge];
//     return arrCatAge;
// }

// function displayHumanAge(catAgeMarkup ="",target ="app"){
//     document.getElementById("app").innerHTML = `
//   <h1>JS Quiz</h1>
//   <div>
//     <h3>2. Calculate Cat Years to Human Years</h3>
//     <a href="http://www.catster.com/wp-content/uploads/2015/06/catages.png">Diagram</a>
//   </div>
//     ${catAgeMarkup}
//     `;

//   }

// function wrapAgeResult(data){
//     return    `Indoor Cat Age : ${data[0]} </br>
//                     Outdoor Cat Age : ${data[1]}`;
     
// }

// function main(humanAge){
//     let x = calCatAge(humanAge);
//     let y = wrapAgeResult(x)
//     displayHumanAge(y);
// }
// main(15);