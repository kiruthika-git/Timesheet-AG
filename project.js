
// Get the modal
 var modal = document.getElementById("mymodal");

 // Get the button that opens the modal
 var btn = document.getElementById("id01");

// Get the button that closes the modal
var btncancel = document.getElementById("cancelbutton");

//Get the button that closes the model after data entry
var btnstarttimer = document.getElementById ("timerbutton")

 // for array function
 var myArr =[]; 
 var myStatus =[];
 var myNotes =[];
 var myTime =[];
 var repbtn =[];
 var field1 = 0;
 var myField =[];

 
 


 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }

// when the user clicks the cancel button , close the modal
   btncancel.onclick = function(){
   modal.style.display="none";
}


//template and dropdown
function getOption() { 

  selectElement = document.querySelector('#select1'); 

  output = selectElement.value;
  var element = document.querySelector('.output')

  if (output){
  document.querySelector('.output').textContent = output;
}
  selectElement = document.querySelector('#select2');         
  output2 = selectElement.value; 
  if (output2){
  document.querySelector('.output2').textContent = output2;  
  }
  var x = document.getElementById("myTextarea").value;
  document.getElementById("demo").innerHTML = x;  

  var y = document.getElementById("myTextarea1").value;
          document.getElementById("demo1").innerHTML = y;  
           
} 

function getOption2() {
  modal.style.display ="none";
}


var buttonCount = 0;
var listBrand =['start'];

            function printloop() {
                // for (var m = 0; m < listBrand.length; m++) {
                   var repbtn = document.createElement("button");
                   var t = document.createTextNode(listBrand);
                   repbtn.appendChild(t);
                   repbtn.className = "clkbutton";
                   repbtn.id = "btnclk"
                   document.body.appendChild(repbtn);
                //    repbtn.addEventListener("click",()=>{
                //        console.log("Click registered")
                //        startStop(buttonCount);})
                   //repbtn.setAttribute("onClick","startStop(buttonCount)");
                   buttonCount++ ;
                   
                // }
            }

            var watch =['00:00:00'];
           function dogloop() {
                for (var x = 0; x < watch.length; x++) {
                   var display = document.createElement("div");
                   var z = document.createTextNode(watch[x]);
                   display.appendChild(z);


                   display.className = "watchdogC";
                  display.id = "watchdog";
                  var disk = document.getElementById("watchdog");
                  for (let a = 0; a < disk.length; a++){
                      disk(a).id = "watchdog" + a;
                  }

                  display.addEventListener("click",()=>{
                    // console.log("Click registered"+buttonCount-1)
                    startStop(buttonCount);})

                   document.body.appendChild(display);
                  
                   
                   
                }
                var inp = document.getElementsByClassName("watchdogC");
                  var len = inp.length;
                  for (let q=0; q < len ; q++) {
                       
                      var result = document.getElementsByClassName("watchdogC") [q];
                      result.appendChild (q);
                  } 
                  q++;
            }
            
            // function last () {

               
            // }

function pushData()
            {
                // get value from the input text
                var inputOption = document.getElementById('select1').value;
                var inputOption2 = document.getElementById('select2').value;
                var text1 = document.getElementById('myTextarea').value;
                var text2 = document.getElementById('myTextarea1').value;
                
                
                // append data to the array
                myArr.push(inputOption);
                myStatus.push(inputOption2);
                myNotes.push(text1);
                myTime.push(text2);
                
                
                
                 var pval = "";
                var pval2 = "";
                var pval3 = "";
                var pval4 = "";
                
                
                
                for(i = 0, j = 0, k = 0, l = 0;i < myArr.length, j < myStatus.length,k < myNotes.length,
                  l < myTime.length;i++,j++,k++,l++)
                  
                {
                    pval = pval + myArr[i] + "<br/>";
                    pval2 = pval2 + myStatus[j] + "<br/>";
                    pval3 = pval3 + myNotes[k] + "<br/>";
                    pval4 = pval4 + myTime[l] + "<br/>";
                    console.log(pval4)
                    
                   

                }
                
                
                // display array data
                document.getElementById("trial").innerHTML = pval;
                document.getElementById("trial2").innerHTML = pval2;
                document.getElementById("demo").innerHTML = pval3;
                document.getElementById("demo1").innerHTML = pval4;
                

                printloop();
                dogloop();
                // last();
               
                
            }

            
            
            
           


// //show template onclick
// btnM. addEventListener ('click', () => {
//   if (div.style.display =="none"){
//       div.style.display ="block";
//   }
//   else{
//       div.style.display = "none";
//   }
// })

const supportsTemplate = function() {
  //create a template element and make sure it has a 'content' property
  return 'content' in document.createElement('template');
}

document.addEventListener('DOMContentLoaded', ()=> {
  if (supportsTemplate()) {
      //We can use the template element in our HTML
      console.log('Templates are supported.');
      let temp = document.getElementById('myTemplate');
      let content = temp.content;
      console.log(content);
      document.body.appendChild(content.cloneNode(true));
     
    
      
  } else {
      //Use another method, like manually building the elements.
      console.log('The else is running');
      let df = document.createDocumentFragment();
      let div = document.createElement('div');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      h2.textContent = 'A Sub Heading';
      p.textContent = 'Some dynamically created text.';
      div.className = 'box';
      h2.className = 'temp';
      df.appendChild(div);
      div.appendChild(h2);
      div.appendChild(p);
      document.body.appendChild(df);
  }
})
//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayfield1 = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";


function enter () {
       
        if (field1 === 0) {
            field1= document.getElementById ("myTextarea1").value;
        }
        
    //     for(int a = 0; a< myTime.length; a++) {
    //  field1[a] = myTime[]
    //  }

    //  console.log('Yime array', myTime)

           
       //Stopwatch function (logic to determine when to increment next value, etc.)
            seconds++;
       
            
           //Logic to determine when to increment next value
           if(seconds / 60 === 1){
               seconds = 0;
               field1++;
               
           if(field1/ 60 === 1){
                   field1 = 0;
                   hours++;
               }
               
           }
           
           //If seconds/minutes/hours are only one digit, add a leading 0 to the value
           if(seconds < 10){
               displaySeconds = "0" + seconds.toString();
           }
           else{
               displaySeconds = seconds;
           }
       
           if(field1 < 10){
               displayfield1= "0" + field1.toString();
           }
           else{
               displayfield1= field1;
           }
       
           if(hours < 10){
               displayHours = "0" + hours.toString();
           }
           else{
               displayHours = hours;
           }
          
           //Display updated time values to user
           document.getElementById("watchdog[a]").innerHTML = displayHours + ":" + displayfield1 + ":" + displaySeconds;

       }



   



function startStop(position){
    console.log("StartStop")
 
    if(status === "stopped"){
  
        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(enter, 200);
        document.getElementsByClassName("clkbutton")[position].innerHTML = "Stop";
        // status = "started";

        console.log("if function called")
  
    }
    else{
  
        window.clearInterval(interval);
        document.getElementsByClassName("clkbutton")[position].innerHTML = "Start";
        status = "stopped";
        console.log("else function called")
  
    }
    
  }














// //Function to reset the stopwatch
// function reset(){

//     window.clearInterval(interval);
//     seconds = 0;
//     minutes = 0;
//     hours = 0;
//     document.getElementById("display").innerHTML = "00:00:00";
//     document.getElementById("startStop").innerHTML = "Start";

// }