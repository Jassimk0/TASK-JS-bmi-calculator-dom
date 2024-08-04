function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  
  let bmi = weight /(height/100)^2;


 if (bmi > 30.0 ) {
  alert("Above Obese")
 } else if (bmi > 25.0){
  alert("Overeight")
  } else if (bmi > 18.5){
    alert("Healthy Weight")
} else {
  alert("UnderWeight")
}
 
//if (bmi > 30.0 && age > 65){
// alert("Not Healthy")
// } else if (bmi > 24 && age > 65){
//  alert("Healthy")
//n} else if (bmi > 28 && age > 64) 

}