function autorization () {
	document.querySelector('#registration_client').classList.add("autorization_active");
	document.querySelector('#registration_mobile_code').classList.remove("autorization_active");
	document.querySelector('#registration_avatar').classList.remove("autorization_active");
	document.querySelector('#registration_mobile').classList.remove("autorization_active");			
}
function code_autorization () {
	document.querySelector('#registration_client').classList.remove("autorization_active");
	document.querySelector('#registration_mobile_code').classList.add("autorization_active");
	document.querySelector('#registration_avatar').classList.remove("autorization_active");
	document.querySelector('#registration_mobile').classList.remove("autorization_active");			
}
function avatar () {
	document.querySelector('#registration_client').classList.remove("autorization_active");
	document.querySelector('#registration_mobile_code').classList.remove("autorization_active");
	document.querySelector('#registration_avatar').classList.add("autorization_active");
	document.querySelector('#registration_mobile').classList.remove("autorization_active");			
}
function registration () {
	document.querySelector('#registration_client').classList.remove("autorization_active");
	document.querySelector('#registration_mobile_code').classList.remove("autorization_active");
	document.querySelector('#registration_avatar').classList.remove("autorization_active");
	document.querySelector('#registration_mobile').classList.add("autorization_active");			
}
function exit_autorization() {
	document.querySelector('#registration_client').classList.remove("autorization_active");
	document.querySelector('#registration_mobile_code').classList.remove("autorization_active");
	document.querySelector('#registration_avatar').classList.remove("autorization_active");
	document.querySelector('#registration_mobile').classList.remove("autorization_active");			
}



// ==
// right side bar moving
// ==

const sideBarButtons = document.querySelectorAll('.scroll_');
const sideBarSlides = document.querySelectorAll('.side-bar__slide');

sideBarButtons[0].classList.add('active');

let sideBarMove = function(wherever) {

	if (!wherever) {
		return console.log(`Количество кнопок и слайдов не равно. Кнопок ${sideBarButtons.length}, Слайдов ${sideBarSlides.length}.`)
	}

	wherever.scrollIntoView({block: "end", behavior : "smooth"});
}

let sideBarButtonsRemoveActive = function() {

	for (let i = 0; i < sideBarButtons.length; i++) {

		sideBarButtons[i].classList.remove('active');
	}
}


for (let i = 0; i < sideBarButtons.length; i++) {

	sideBarButtons[i].addEventListener('click', () => {

		sideBarButtonsRemoveActive();

		sideBarButtons[i].classList.add('active');

		sideBarMove(sideBarSlides[i]);
	})
}

// for (let i = 0; i < sideBarSlides.length; i++) {

// 	sideBarSlides[i].addEventListener('wheel', function(e) {

// 		sideBarButtonsRemoveActive();

// 	    if (e.deltaY > 0) {

// 	    	sideBarMove(sideBarSlides[i + 1]);
// 	    	sideBarButtons[i + 1].classList.add('active');

// 	    } else if (e.deltaY < 0) {

// 	    	sideBarMove(sideBarSlides[i - 1]);

// 	    	if (!sideBarButtons[i - 1]) return;

// 	    	sideBarButtons[i - 1].classList.add('active');
// 	    }
// 	});
// }

// ==
// END right side bar moving
// ==



// ==
// Slider 4 slide
// ==



// ==
// END OF Slider 4 slide
// ==




function open_lock(){
	var lock = document.querySelectorAll("#lock")
	for (var i = 0; i < lock.length; i++) {
		lock[i].setAttribute("src", "./images/open_lock/icons8_open_lock_24.svg")
	}
	var lock = document.querySelectorAll("#lock_active_password")
	for (var i = 0; i < lock.length; i++) {
		lock[i].setAttribute("type", "email")
	}	
}

function closed_lock(){
	var lock = document.querySelectorAll("#lock")
	for (var i = 0; i < lock.length; i++) {
		lock[i].setAttribute("src", "./images/closed_lock/icons_closed_lock_24.svg")
	}
	var lock = document.querySelectorAll("#lock_active_password")
	for (var i = 0; i < lock.length; i++) {
		lock[i].setAttribute("type", "password")
	}		
}

function slaider_blog(name, text, images){
	var slaider =`
		<div class="dostoprimechatelnost">
			<div class="dostoprimechatelnost_optimization">
				<div>
					<div class="dostoprimechatelnost_title center">
						${name}
						<div class="dostoprimechatelnost_close center" onclick="exit()">
							<img src="./images/close/icons_close_24.svg">
						</div>					
					</div>
				</div>	
				<div class="dostoprimechatelnost_main">
					<div class="dostoprimechatelnost_images">
						<img src="./images/outlined/icons8_outlined_48.svg">
					</div>
					<div class="dostoprimechatelnost_texts">
						<div class="dostoprimechatelnost_description">
							<div>
								${text}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			`
	where = document.querySelector(".attractions_construction")
	where.insertAdjacentHTML("afterbegin", slaider);
}

function exit(){
	document.querySelector(".dostoprimechatelnost").remove();
}


let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);


var spisokX = [
		
]


spisokX.forEach(function(slaider) {
	var isDown;
	var startX;
	var scrollLeft;

	slaider.addEventListener('mousedown', e => {
		isDown = true;
		startX = e.pageX - slaider.offsetLeft;
		scrollLeft = slaider.scrollLeft;
	});


	slaider.addEventListener('mouseleave', _ => {
		isDown = false;
	});

	slaider.addEventListener('mouseup', _ => {
		isDown = false;
	});

	slaider.addEventListener('mousemove', e => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slaider.offsetLeft;
		const walk = x - startX;
		slaider.scrollLeft = scrollLeft - walk;
	});
});


var spisokY = [

]

spisokY.forEach(function(slaider) {
	var isDown;
	var startY;
	var scrollTop;

	slaider.addEventListener('mousedown', e => {
		isDown = true;
		startY = e.pageY - slaider.offsetTop;
		scrollTop = slaider.scrollTop;
	});


	slaider.addEventListener('mouseleave', _ => {
		isDown = false;
	});

	slaider.addEventListener('mouseup', _ => {
		isDown = false;
	});

	slaider.addEventListener('mousemove', e => {
		if (!isDown) return;
		e.preventDefault();
		const y = e.pageY - slaider.offsetTop;
		const walk = y - startY;
		slaider.scrollTop = scrollTop - walk;
	});
});




function block_close_open_absolute(number) {
	var lock = document.querySelectorAll(".absolute_block")
	for (var i = 0; i < lock.length; i++) {
		lock[number].classList.add("absolute_block_active")
	}		

	var lock = document.querySelectorAll(".events_search_close")
	for (var i = 0; i < lock.length; i++) {
		lock[number].classList.add("events_search_close_active")
	}

	var lock = document.querySelectorAll(".events_menu_add_left_cansel")
	for (var i = 0; i < lock.length; i++) {
		lock[number].classList.add("events_menu_add_left_cansel_active")
	}

	var lock = document.querySelectorAll(".events_contents_blocks")
	for (var i = 0; i < lock.length; i++) {
		lock[number].style = 'overflow: hidden;'
	}
}

function block_close_(number) {
	var lock = document.querySelectorAll(".absolute_block")
	for (var i = 0; i < lock.length; i++) {
		lock[number].classList.remove("absolute_block_active")
	}		

	var lock = document.querySelectorAll(".events_search_close")
	for (var i = 0; i < lock.length; i++) {
		lock[number].classList.remove("events_search_close_active")
	}

	var lock = document.querySelectorAll(".events_menu_add_left_cansel")
	for (var i = 0; i < lock.length; i++) {
		lock[number].classList.remove("events_menu_add_left_cansel_active")
	}

	var lock = document.querySelectorAll(".events_contents_blocks")
	for (var i = 0; i < lock.length; i++) {
		lock[number].classList.remove("events_menu_add_left_cansel_active")
	}

	var lock = document.querySelectorAll(".events_contents_blocks")
	for (var i = 0; i < lock.length; i++) {
		lock[number].style = 'overflow: auto;'
	}
}

function function_name0() {
	document.querySelector(".max_w_h").style = "display:none;"
	document.querySelector(".absolute_inform_dostoprem").classList.add("absolute_inform_dostoprem_active")
}

function function_name1() {
	document.querySelector(".max_w_h").style = "display:flex;"
	document.querySelector(".absolute_inform_dostoprem").classList.remove("absolute_inform_dostoprem_active")
}






function fixed_dop_open() {
	document.querySelector(".redactor_dobavite").style = "display:flex;"
}

function fixed_dop_close() {
	document.querySelector(".redactor_dobavite").style = "display:none;"
}





function fixed_dop_open_cosdanie() {
	document.querySelector(".cosdanie_content_blocka").style = "display:flex;"
}

function fixed_dop_close_cosdanie() {
	document.querySelector(".cosdanie_content_blocka").style = "display:none;"
}




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};



var element = document.querySelectorAll('.places_to_visit_content_block_block_');
element.forEach((blocke) => {

	var slideIndex = 0;
	var slides = blocke.querySelectorAll('#img')
	var constanta = '';


	blocke.addEventListener('mouseenter', () => {
		start_slader(slides)
		console.log('start')
		constanta = setInterval(start_slader, 2000, slides)
	});

	blocke.addEventListener('mouseleave', _ => {
		end_slader(slides);
		console.log('end')
	});



	function start_slader(slides) {
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		};			
		if (slideIndex == slides.length) {slideIndex = 0};
		slides[Number(slideIndex)].style.display = "block";
		slideIndex++;
		console.log(constanta)
	}

	function end_slader(slides) {
		clearInterval(constanta);
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		};		
	}
});





document.addEventListener('keydown', function(e) {
	if (e.keyCode == 13 && e.shiftKey){
		document.querySelector('.textarea').value += '';
	}

	if (e.keyCode == 13 && !e.shiftKey){
	    e.preventDefault();

		document.querySelector('.textarea').value = '';
		document.querySelector(".textarea").style.height = "80px";
	}
});



function auto_height(elem) {
    elem.style.height = "80px";
    document.querySelector(".textarea").style.height = "88px";

    elem.style.height = (elem.scrollHeight)+"px";
    document.querySelector(".textarea").style.height = (elem.scrollHeight)+"px";

    if (elem.scrollHeight > "161"){
    	elem.style.height = "181px";
    	 document.querySelector(".textarea").style.height = "181px";
    }
}





 
let elems = document.querySelectorAll('.attractions_block');

for (let i = 0; i < elems.length; i++) {

	elems[i].addEventListener('click', () => {

		let param = elems[i].getAttribute('data_param_rest')
		document.querySelector('.places_to_visit').style.display = 'flex';
		document.querySelector('.attractions_construction').style.display = 'none';
		
	})
}

function exit_main(){
	document.querySelector('.places_to_visit').style.display = 'none';
	document.querySelector('.attractions_construction').style.display = 'flex';	
}













// Работа с глазами
// Создание переменных
var open = document.querySelector('.open_eye');
var hidden = document.querySelector('.hidden_eye');

// Отслеживание события
document.querySelector('.cursor_setting_eye').addEventListener('click', () => {
	open.classList.toggle("open_eye_active");
	hidden.classList.toggle("hidden_active");
})



// Работа со сладером
// Создание переменных
var left = document.querySelector('.left_switch_triangle');
var right = document.querySelector('.right_switch_triangle');
var slaider_cursor = document.querySelector('.cursors_grid');

// Отслеживание события прокрутки влево
left.addEventListener('click', () => {
	slaider_cursor.scrollBy({top: 0,left: -60, behavior: "smooth"});
})

// Отслеживание события прокрутки вправо
right.addEventListener('click', () => {
	slaider_cursor.scrollBy({top: 0,left: 60, behavior: "smooth"});
})