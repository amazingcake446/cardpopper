/* Selecting Elements */
const form = document.querySelector('.form');
const inputUser = document.querySelector('#input-user');
const inputCourse = document.querySelector('#input-course');
const inputAuthor = document.querySelector('#input-author');
const list = document.querySelector('.wrapper');


/* Load events */
loadEventListeners();


/* Events */
function loadEventListeners() {
	form.addEventListener('submit', addItems);

	/* blur fires when an element has lost focus */
	inputUser.addEventListener('blur', checkInput1);
	inputCourse.addEventListener('blur', checkInput2);
	inputAuthor.addEventListener('blur', checkInput3);
}

/* Create cards and save to code varible with three parameters use them when appending above */
function createCards(element1, element2, element3, element4) {

	const code =
		 /* fill in with the paremeters in the htmlcode and use it when adding items */
		`
    <div class="card">
        <img src="${element4}" class="card-image" alt="">
        <div class="card-container">
            <p><span class="card-title1">Name: </span><span class="name-value pd"></span>${element1}</p>
            <p><span class="card-title2">Course:</span><span class="course-value pd"></span>${element2}</p>
            <p><span class="card-title3">Author: </span><span class="author-value pd"></span></span>${element3}</p>
        </div>
    </div>

    `;

	return code;
}

function addItems(e) {
	/* Prevent default behavior. Prevent the form from sending its information */
	e.preventDefault();


	/* Do this if every inputfield isnt empty */
	if (inputUser.value && inputCourse.value && inputAuthor.value !== '') {


		 /* CREATE ELEMENTS */ 

		/* The first three parameters is the values from the inputfields and the last one is calling a function which return a url */

		const htmlCode = createCards(inputUser.value, inputCourse.value, inputAuthor.value, randomImage());

		 /* append to DOM with timeout */
		setTimeout(function() {

			list.innerHTML = list.innerHTML + htmlCode;


		}, 2100);

		/* show the loading and the calculating alert when submit*/
		document.querySelector(".loading").style.display = "block";
		document.querySelector(".calculating-alert").style.display = "block";

		/* remove after 2000 seconds */
		setTimeout(function() {
			document.querySelector(".loading").style.display = "none";
			document.querySelector(".calculating-alert").style.display = "none";
		}, 2000);

		 /* clear inputs  */
		inputUser.value = '';
		inputCourse.value = '';
		inputAuthor.value = '';

		  /* calling reset function */ 
		resetFor();



	} else {
        /* do nothing until condition is true */

	}
}

 /* check input state setErrorFor if value is empty if not set success */
function checkInput1() {
	const inputUserValue = inputUser.value;
	if (inputUserValue === '') {


		setErrorFor(inputUser);
	} else {
		setSuccessFor(inputUser);
	}
}
/* repeat */
function checkInput2() {
	const inputCourseValue = inputCourse.value;
	if (inputCourseValue === '') {


		setErrorFor(inputCourse);
	} else {
		setSuccessFor(inputCourse);
	}
}
/* repeat */
function checkInput3() {
	const inputAuthorValue = inputAuthor.value;
	if (inputAuthorValue === '') {


		setErrorFor(inputAuthor);
	} else {
		setSuccessFor(inputAuthor);
	}
}

/* Set error  */
function setErrorFor(element) {

	/* add error class */
	element.className = "input error";
}
/* Set success */
function setSuccessFor(element) {

	/* add success class */
	element.className = "input success";
}

function resetFor() {
	 /* select every input and reset classes to default ==> just "input" class */
	inputUser.className = "input";
	inputCourse.className = "input";
	inputAuthor.className = "input";
}

function randomImage() {
	 /* returns a random integer from 1 to 10 */
	const randomInt = Math.floor(Math.random() * 10) + 1;
	/* store the url in a variable and call it in AddItems function */
	const url = `https://source.unsplash.com/random/80${randomInt}x600`;
	return url;

}