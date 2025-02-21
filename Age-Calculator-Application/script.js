document.getElementById("birthdate").addEventListener("input", function (e) {
  let value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  
  if (value.length > 2) {
      value = value.slice(0, 2) + "-" + value.slice(2);
  }
  if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5);
  }
  if (value.length > 10) {
      value = value.slice(0, 10); // Restrict length to 10 characters
  }
  
  e.target.value = value;
});

function calculateAge(){

  const today = new Date();
  const birthdateInput = document.getElementById("birthdate").value;
  const birthdateParts = birthdateInput.split("-");   
  const birthDay = birthdateParts[0];
  const birthMonth = birthdateParts[1] - 1; 
  const birthYear = birthdateParts[2];
 
  const birthDate = new Date(birthYear,birthMonth,birthDay);

  console.log(birthdateInput);
  console.log(birthdateParts);
  console.log(birthDay);
  console.log(birthMonth);
  console.log(birthYear);

  const isValidDate = (date) =>{
  return(
      Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)  
  );

  };

  if(!isValidDate(birthDate)){
  alert("Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format.");
  return;
  }

 const ageInMilliseconds = today - birthDate;  
 const ageInseconds = Math.floor(ageInMilliseconds/1000);
 const ageInMinutes = Math.floor(ageInseconds/60);
 const ageInHours= Math.floor(ageInMinutes/60);
 const ageInDays= Math.floor(ageInHours/24);
 const ageInWeeks= Math.floor(ageInDays/7);
 const ageInMonths= Math.floor(ageInDays/30.436875);
 const ageInYears= Math.floor(ageInDays/365.25);

 const resultContainer = document.getElementById("resultContainer");
 const result = document.getElementById("result");

 result.innerHTML = `
    <div class="result-item">
      <h3>Age:</h3>
      <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
    </div>  
    <div class="result-item">
      <h3>Months:</h3>
      <p>${ageInMonths} </p>
    </div> 
    <div class="result-item">
      <h3>Weeks:</h3>
      <p>${ageInWeeks} </p>
    </div> 
    <div class="result-item">
    <h3>Days:</h3>
    <p>${ageInDays} </p>
   </div> 
   <div class="result-item">
    <h3>Hours:</h3>
    <p>${ageInHours} </p>
   </div>  
   <div class="result-item">
    <h3>Minutes:</h3>
    <p>${ageInMinutes} </p>
   </div> 
   <div class="result-item">
    <h3>Seconds:</h3>
    <p>${ageInseconds} </p>
   </div> 
 `;

 resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  calculateAge();
});