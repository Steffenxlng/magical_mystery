(function () {

	let doc = $(document),
		nav = $("nav"),
		distance = 80;

	doc.on('scroll', function() {

		if(doc.scrollTop() >= distance && !nav.hasClass("scrolling")) {
			nav.addClass("scrolling");
		}
		else if(doc.scrollTop() < distance) {
			nav.removeClass("scrolling");
		}

	});

	let swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
	});

	$("#projects a")
	.each(function() {

		let link = $(this),
			target = link.attr("href");

		link.on("click", function(event) {
			event.preventDefault();
			if(target !== "#") {
				$(target)
				.modal({
					onHide: function() {
						$('video').trigger('pause');
				}})
				.modal("show");
			}
		});

	});

	$('.ui.sidebar')
		.sidebar({ transition: 'overlay' })
		.sidebar('attach events', '#toggle-sidebar');

$('#example1').calendar();
$('#example2').calendar({
  type: 'date'
});
$('#example3').calendar({
  type: 'time'
});
$('#rangestart').calendar({
  endCalendar: $('#rangeend')
});
$('#rangeend').calendar({
  startCalendar: $('#rangestart')
});
$('#example4').calendar({
  startMode: 'year'
});
$('#example5').calendar();
$('#example6').calendar({
  ampm: false,
  type: 'time'
});
$('#example7').calendar({
  type: 'month'
});
$('#example8').calendar({
  type: 'year'
});
$('#example9').calendar();
$('#example10').calendar({
  on: 'hover'
});
var today = new Date();
$('#example11').calendar({
  minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
  maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)
});
$('#example12').calendar({
  monthFirst: false
});
$('#example13').calendar({
  monthFirst: false,
  formatter: {
    date: function (date, settings) {
      if (!date) return '';
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      return day + '/' + month + '/' + year;
    }
  }
});
$('#example14').calendar({
  inline: true
});
$('#example15').calendar();
}());