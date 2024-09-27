// $(document).ready(function () {
// 	$("#loading").on("click", function () {
// 		$('.loading_box').animate(hide(5000));
// 	});
// });

$(document).ready(function () {
	var bn = $(".box").length;
	$(".box").on("mousewheel DOMMouseScroll", function (e) {
		e.preventDefault();
		var delta = 0;
		var event = 0;
		if (!event) event = window.event;
		if (event.wheelDelta) {
			delta = event.wheelDelta / 120;
			if (window.opera) delta = -delta;
		} else if (event.detail) delta = -event.detail / 3;

		if (delta < 0) {
			n = $(this).index() + 1;
		} else {
			n = $(this).index() - 1;
		}
		console.log(n)
		if (n >= bn) {
			n = bn - 1;
		} else if (n <= -1) {
			n = 0
		}
		$("#portfolioBox").stop().animate({ left: -n * 100 + "%" });
	});
});

