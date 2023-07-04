$(function() {

//carousel
 $("#owl-demo").owlCarousel({

  autoPlay: 5000,
  items : 2,
  navigation: true,
  navigationText: ['<', '>'],
  responsive: false

 });

//select
$(".basic-example").heapbox();

//menu
$('.dropdown').hover(
	function(){
		$(this).children('.sub-menu').slideDown()
		.animate({
			backgroundColor: '#1abc9c'
		});
	},
	function(){
		$(this).children('.sub-menu').slideUp()
		.animate({
			backgroundColor: '#2ecc71'
		});
	}
);

//end
});