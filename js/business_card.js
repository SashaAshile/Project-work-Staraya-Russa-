
function description_active() {
	document.querySelector(".description").classList.toggle("description_active");
}

function button_order_a_website_active() {
	document.querySelector(".button_order_a_website").classList.toggle("button_order_a_website_active");
	document.querySelector(".link_moving").classList.toggle("link_moving_active");	
}





var bodyRect = document.body.getBoundingClientRect();
var blocks = document.querySelector(".persone_blocks");
var writing = document.querySelector(".writing");

blocks.addEventListener("mouseover", function() {
	var elemRect = document.querySelector(".setting_position").getBoundingClientRect()
    var offsetX   = elemRect.top - bodyRect.top;
    var offsetY   = elemRect.left - bodyRect.left;

	
	writing.classList.toggle("writing_active");	

	writing.style.top = `${offsetX}px`;
	writing.style.left = `${offsetY}px`;
});


blocks.addEventListener("mouseout", function() {
	writing.classList.toggle("writing_active");		
});



