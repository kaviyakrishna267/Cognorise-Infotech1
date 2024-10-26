
let result = document.getElementById("result");
let resultArea = document.querySelector(".result");
let error = document.querySelector(".error");
function calculate(){
    let age = document.getElementById("age");
    let male = document.getElementById("m");
    let female = document.getElementById("f");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
        error.style.display = "block";
      error.innerHTML = "please Fill all fields";
        setTimeout(()=>{
            error.style.display = "none";
        },2000)
    }else{
      calculateBmi();
    }
  
  }
  
function calculateBmi(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let bmi = weight/(height/100)**2;
    let bmirange = bmi.toFixed(2);

    let comment = '';
    if(bmirange < 16){
        comment = 'Severe Thinness';
    }else if(bmirange > 16 && bmirange < 17){
        comment = 'Moderate Thinness';
    }else if(bmirange > 17 && bmirange < 18.5){
        comment = 'Mild Thinness';
    }else if(bmirange > 18.5 && bmirange < 25){
        comment = 'Normal';
    }else if(bmirange > 25 && bmirange < 30){
        comment = 'Overweight';
    }else if(bmirange > 30 && bmirange < 34){
        comment = 'Obese Class I';
    }else if(bmirange > 35 && bmirange < 40){
        comment = 'Obese Class II';
    }else if(bmirange > 40){
        comment = 'Obese Class III';
    }
    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `You are <span id="comment">${comment}</span>`;
    result.innerHTML= "Your BMI is : "+bmirange;
    
}