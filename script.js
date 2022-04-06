"use strict";
const ratings = document.querySelector(".ratings");
const ratePlate = document.querySelector(".rate-plate");
const submit = document.querySelector(".submit");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const rate = document.querySelector(".rate");
const numBtn = document.querySelectorAll(".num-btn");
const back = document.querySelector(".close-rate-plate");

// for (let i = 1; i <= numBtn.length; 1++)
//     numBtn[i].addEventListener('click', function () {
//         submit.addEventListener('click', function () {
//             ratePlate.classList.remove('hidden');
//             ratings.classList.add('hidden');
//         });
//         document.querySelector('.rate').textContent = numBtn[i];
//     });
one.addEventListener("click", function () {
  submit.addEventListener("click", function () {
    ratePlate.classList.remove("hidden");
    ratings.classList.add("hidden");
    rate.textContent = 1;
  });
});
two.addEventListener("click", function () {
  submit.addEventListener("click", function () {
    ratePlate.classList.remove("hidden");
    ratings.classList.add("hidden");
    rate.textContent = 2;
  });
});
three.addEventListener("click", function () {
  submit.addEventListener("click", function () {
    ratePlate.classList.remove("hidden");
    ratings.classList.add("hidden");
    rate.textContent = 3;
  });
});
four.addEventListener("click", function () {
  submit.addEventListener("click", function () {
    ratePlate.classList.remove("hidden");
    ratings.classList.add("hidden");
    rate.textContent = 4;
  });
});
five.addEventListener("click", function () {
  submit.addEventListener("click", function () {
    ratePlate.classList.remove("hidden");
    ratings.classList.add("hidden");
    rate.textContent = 5;
  });
});
back.addEventListener("click", function () {
  ratePlate.classList.add("hidden");
  ratings.classList.remove("hidden");
});
