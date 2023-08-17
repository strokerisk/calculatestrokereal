
function submitForm() {
    
    /*var male = document.querySelector('input[name="sex"][value="M"]').checked;
    var female = document.querySelector('input[name="sex"][value="F"]').checked;*/
    const age = document.getElementById("age").value;

    const weight = document.getElementById("weight").value;
    const tall = document.getElementById("tall").value;

    const systolic = document.getElementById("systolic").value;
    const diastolic = document.getElementById("diastolic").value;
    const HR = document.getElementById("HR").value;
    const cholesterol = document.getElementById("cholesterol").value;
    const HDL = document.getElementById("HDL").value;
    const LDL = document.getElementById("LDL").value;
    const sugar = document.getElementById("sugar").value;

    //console.log(male); // true if Male is selected
    //console.log(female); // female if Female is selected
    //console.log(age);
    //console.log(weight);
    //console.log(tall);
    //console.log(systolic);
    //console.log(diastolic);
    //console.log(HR);
    //console.log(cholesterol);
    //console.log(HDL);
    //console.log(LDL);
    //console.log(sugar);
    
  
    
}



    
window.onload = () => {

    const butttes = document.getElementById("btn1");

    butttes.addEventListener("click", calculate);
    
    
};

function calculate() {
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let sexs = 0;
    if (gender === "Male") {
        sexs = 1;
      } else if (gender === "Female") {
        sexs = 0;
      }

    let smokeshow = document.querySelector('input[name="smoke"]:checked').value;
      let smokecheck = 0; 
      if (smokeshow === "SS") {
          smokecheck = 1;
          
        } else if (smokeshow === "S") {
          smokecheck = 0;
          
        }

    const sugarexe = document.getElementById("sugar").value;
      var dm = 0;
        if (sugarexe <= 100) {
          dm =  0;
        } else if (sugarexe >= 126 ) {
          dm =  1;
        }
        

    console.log("sexs =", sexs);
    //console.log("smoke3 =", option1); 
    
    //console.log("smoke1 =", option3);
    console.log("dm =", dm);  

    const bmi = (weight.value / Math.pow( (tall.value/100), 2 )).toFixed(1);
    localStorage.setItem('bmi',JSON.stringify(bmi));
    //console.log("bmi =", bmi);

    
    
    var stoke = (0.08183*age.value)+(0.39499*sexs)+(0.02084*systolic.value)+(0.69974*dm)+(0.00212*cholesterol.value)+(0.41916*(smokecheck));
    //console.log("smokecheck",smokecheck);  
    console.log("full_score",stoke);  
    
    var sur_root = 0.964588;

    //var fullscoretext = (1 - Math.pow( 0.978296 , stoke - 7.04423 ));
    var fullscoretext =  (1 - (Math.pow(sur_root, Math.exp(stoke- 7.04423))));
    localStorage.setItem('fullscoretext',JSON.stringify(fullscoretext));
    console.log("predicted_risk",fullscoretext);
      
    var percentfullscore = (fullscoretext*100).toFixed(2);
    localStorage.setItem('percentfullscore',JSON.stringify(percentfullscore));
    console.log("percentfullscore",percentfullscore);    



    var compare_score = (0.08183 * age.value) + (0.39499 * sexs) + (0.02084 * 120) + (0.00212 * 200);
    var compare_risk = 1 - (Math.pow(sur_root, Math.exp(compare_score - 7.04423)));
    //console.log("compare_score",compare_score);
    //console.log("compare_risk",compare_risk);

    const sugartext = (sugarexe/1);
    localStorage.setItem('sugartext',JSON.stringify(sugartext));
   //console.log("sugar =",sugartext);
    

    const cholesteroltext = (cholesterol.value/1);
    localStorage.setItem('cholesteroltext',JSON.stringify(cholesteroltext));
    //console.log("cholesterol =",cholesteroltext);

    const HDLtext = (HDL.value/1);
    localStorage.setItem('HDLtext',JSON.stringify(HDLtext));
    //console.log("HDL =",HDLtext);

    const LDLtext = (LDL.value/1);
    localStorage.setItem('LDLtext',JSON.stringify(LDLtext));
    //console.log("LDL =",LDLtext);
}




      