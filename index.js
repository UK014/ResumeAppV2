function firstpage() {
  window.location.href = "resume.html";
  }
  
document.getElementById("skillsbtn").addEventListener("click", addskills);
  function addskills() {
      var skills = document.createElement("li");
      skills.innerHTML = document.getElementById("Skills").value;
      document.getElementById("skillslist").appendChild(skills);
  }
  document.getElementById("languagebtn").addEventListener("click", addlanguages);
function addlanguages() {
      var languages = document.createElement("li");
      languages.innerHTML = document.getElementById("Language").value;
      document.getElementById("languagelist").appendChild(languages);
  } 
function SecondDiv() {
    document.getElementById("first").style.visibility = "hidden";
    document.getElementById("second").style.visibility = "visible";
    document.getElementById("circle1").style.backgroundColor = "green";
    document.getElementById("stick1").style.backgroundColor = "green";
  }
function ThirdDiv() {
    document.getElementById("second").style.visibility = "hidden";
    document.getElementById("third").style.visibility = "visible";
    document.getElementById("circle2").style.backgroundColor = "green";
    document.getElementById("stick2").style.backgroundColor = "green";
  }  
function FourthDiv(){
  document.getElementById("circle3").style.backgroundColor = "green";
  document.getElementById("third").style.visibility = "hidden";
  document.getElementById("fourth").style.visibility = "visible";
}  
function Backtofirstdiv() {
    document.getElementById("second").style.visibility = "hidden";
    document.getElementById("first").style.visibility = "visible";
    document.getElementById("circle1").style.backgroundColor = "rgb(65, 135, 255)";
    document.getElementById("stick1").style.backgroundColor = "rgb(65, 135, 255)";
  }
function BacktoSeconddiv() {
    document.getElementById("second").style.visibility = "visible";
    document.getElementById("third").style.visibility = "hidden";
    document.getElementById("circle2").style.backgroundColor = "rgb(65, 135, 255)";
    document.getElementById("stick2").style.backgroundColor = "rgb(65, 135, 255)";
  }    
  function experience() {
    if (document.getElementById("workexperience").value == "jobone") {
        document.getElementById("secondexperience").style.visibility = "hidden";
    }
    else if (document.getElementById("workexperience").value == "jobtwo") {
        document.getElementById("secondexperience").style.visibility = "visible";
    }
} 
function handleCheckboxClick(clickedCheckboxId) {
    
  const bachelorCheckbox = document.getElementById('bachelor');
  const masterCheckbox = document.getElementById('master');
  const phdCheckbox = document.getElementById('phd');

 
  const clickedCheckbox = document.getElementById(clickedCheckboxId);

  
  if (clickedCheckbox.checked) {
    if (clickedCheckboxId === 'bachelor') {
      masterCheckbox.checked = false;
      phdCheckbox.checked = false;
      console.log(bachelorCheckbox.value);
      document.getElementById("masterdiv").style.visibility = " hidden";
      document.getElementById("phddiv").style.visibility = " hidden";
    } else if (clickedCheckboxId === 'master') {
      bachelorCheckbox.checked = false;
      phdCheckbox.checked = false;
      document.getElementById("masterdiv").style.visibility = " visible";
      document.getElementById("phddiv").style.visibility = " hidden";
    } else if (clickedCheckboxId === 'phd') {
      bachelorCheckbox.checked = false;
      masterCheckbox.checked = false;
      document.getElementById("masterdiv").style.visibility = " visible";
      document.getElementById("phddiv").style.visibility = " visible";
    }
  }
} 

