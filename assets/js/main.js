/*################################
    Navigation Bar hamburger button
################################*/
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

/*################################
    form validation
################################*/
function validateFoorm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!isValidEmail(email)) {
    alert("Не верная почта");
    return false;
  }

  if (name === "" || email === "" || message === "") {
    // if forms are not filled
    alert("Заполните все поля");
    return false;
  } else {
    //if everything good
    alert("Вы успешно отправили сообщение!");
    startConfetti();
    //later add the function that send an email
  }
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //checks the validity of an email
  return emailRegex.test(email);
}


function startConfetti() {
  console.log("confetti");
  const canvas = document.querySelector("#confetti");
  playSound("assets/sounds/horn-party-horn-smartsound-fx-1-00-01.mp3");
  jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
}

function playSound(audioName) {
  let audio = new Audio(audioName);
  audio.play(); // Call the play method to start the audio
}

// /*################################
//     to do list
// ################################*/

// const ulList = document.querySelector(".ulList ul"); // Select the "li" elements within the "ul" class ".ulList" element
// var listItems = ulList.querySelectorAll("li");

// listItems.forEach((item) => {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   item.appendChild(span);
// });

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// // makes list checked after click
// var listItems = document.querySelectorAll("#list li");
// listItems.forEach((item) => {
//   item.addEventListener("click", function () {
//     console.log("You clicked on: " + item.textContent);
//     item.classList.toggle("checked");
//   });
// });

// function newElementToDoList() {
//   console.log("newElement");
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("inputText").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("Не оставляйте поле пустым!");
//   } else {
//     document.getElementById("list").appendChild(li);
//   }
//   document.getElementById("inputText").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   // Attach a click event listener to the newly created li element
//   li.addEventListener("click", function () {
//     console.log("You clicked on: " + li.textContent);
//     li.classList.toggle("checked");
//   });

//   // Attach a click event listener to the close button of the newly created li element
//   span.onclick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }



// /*################################
//     timer
// ################################*/
// function startCountdown() {
//   const daysInput = document.getElementById("days");
//   const hoursInput = document.getElementById("hours");
//   const minutesInput = document.getElementById("minutes");
//   const secondsInput = document.getElementById("seconds");

//   let countdownInterval = setInterval(function () {
//     let days = parseInt(daysInput.value, 10);
//     let hours = parseInt(hoursInput.value, 10);
//     let minutes = parseInt(minutesInput.value, 10);
//     let seconds = parseInt(secondsInput.value, 10);

//     // Check if any value is NaN and set it to 0
//     days = isNaN(days) ? 0 : days;
//     hours = isNaN(hours) ? 0 : hours;
//     minutes = isNaN(minutes) ? 0 : minutes;
//     seconds = isNaN(seconds) ? 0 : seconds;

//     // Calculate total seconds
//     let totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

//     // If the totalSeconds is greater than 0, decrement it by 1
//     if (totalSeconds > 0) {
//       totalSeconds--;
//       days = Math.floor(totalSeconds / 86400);
//       totalSeconds %= 86400;
//       hours = Math.floor(totalSeconds / 3600);
//       totalSeconds %= 3600;
//       minutes = Math.floor(totalSeconds / 60);
//       seconds = totalSeconds % 60;
//     } else {
//       clearInterval(countdownInterval);
//     }

//     // color animation
//     changeColor("hours", hours);
//     changeColor("minutes", minutes);
//     changeColor("seconds", seconds);

//     // Update the input fields
//     daysInput.value = days;
//     hoursInput.value = hours;
//     minutesInput.value = minutes;
//     secondsInput.value = seconds;
//   }, 1000); // Update every 1 second
// }

// // color animation based on the time left
// function changeColor(id, time) {
//   const element = document.getElementById(id);
//   let color = "rgba(64, 128, 64, 0.664)"; // Default to green

//   if (time > 20 && time <= 40) {
//     color = "rgba(219, 205, 75, 0.664)";
//   } else if (time < 20) {
//     color = "rgba(175, 83, 83, 0.664)";
//   }

//   element.style.background = color;
// }






/*################################
    game
################################*/
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var element = document.getElementById(data);
  if (element) {
      var roomBlock = document.getElementById('roomBlock');
      var rect = roomBlock.getBoundingClientRect();

      var randomX = event.clientX - rect.left - (element.offsetWidth / 2);
      var randomY = event.clientY - rect.top - (element.offsetHeight / 2);

      element.style.position = 'absolute';
      element.style.left = randomX + 'px';
      element.style.top = randomY + 'px';

      roomBlock.appendChild(element);
  }
}

function rotateElement(element) {
  let rotation = (element.getAttribute('data-rotation') || 0) % 360;
  rotation += 90;

  element.style.transform = `rotate(${rotation}deg)`;
  element.setAttribute('data-rotation', rotation);
}

document.addEventListener('DOMContentLoaded', function () {
  var furnitureItems = document.querySelectorAll('.furniture');
  furnitureItems.forEach(item => {
      item.addEventListener('dragstart', drag);
  });
});