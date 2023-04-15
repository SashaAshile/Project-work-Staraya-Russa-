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

function scroll_blocks_1() {
	document.querySelector('.start_construction').scrollIntoView({block: "end", behavior : "smooth"});
}

function scroll_blocks_2() {
	document.querySelector('.events_construction').scrollIntoView({block: "end", behavior : "smooth"});
}

function scroll_blocks_3() {
	document.querySelector('.places_to_visit').scrollIntoView({block: "end", behavior : "smooth"});
}

function scroll_blocks_4() {
	document.querySelector('.news_construction').scrollIntoView({block: "end", behavior : "smooth"});
}

function scroll_blocks_5() {
	document.querySelector('.attractions_construction').scrollIntoView({block: "end", behavior : "smooth"});
}

function scroll_blocks_6() {
	document.querySelector('.video_construction').scrollIntoView({block: "end", behavior : "smooth"});
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
		document.querySelector("#moving_3"), 
		document.querySelector("#moving_2"), 
		document.querySelector("#moving_1"),

		document.querySelector("#moving_5"),
		document.querySelector("#moving_6"),
		document.querySelector("#moving_8"),
		document.querySelector("#moving_9"),
		document.querySelector("#moving_15"),		
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
		document.querySelector("#moving_7"),		
		document.querySelector("#moving_10"),
		document.querySelector("#moving_11"),
		document.querySelector("#moving_12"),
		document.querySelector("#moving_13"),
		document.querySelector("#moving_14"),
		document.querySelector("#moving_16"),
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
	var isDown = false;	
	var slides = blocke.querySelectorAll('#img')

	blocke.addEventListener('mouseover', () => {
		isDown = true;
	});

	blocke.addEventListener('mouseleave', _ => {
		isDown = false;
	});

	setInterval(lol, 100)
	function lol() {
		if (isDown == true) {
			for (var i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			};			
			if (slideIndex == slides.length) {slideIndex = 0};
			slides[Number(slideIndex)].style.display = "block";
			slideIndex++;
		}

		if (isDown == false) {
			for (var i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			};
		}	
	}

});


