$(function() {

//carousel plugin init
	$('#carousel').carousel({
		//раскомментировать, чтобы проверить кастомизацию

		// borderImg: '1px dashed red',
		// widthImg: '365px',
		// imgWrap: '756px'
  });

//template
	var html = $('#test').html();
	var articles = [
		{
			title: 'Иванов Иван Иванович',
			content: 'Системный администратор ',
			motivationOne: 'Хочу развиваться, как профессионал',
			motivationTwo: 'Мне нравится фронтенд',
			motivationThree: 'Достойная оплата труда',
			phone: '+38 (050)111-11-11 ',
			social: 'facebook.com',
			hobby: 'Футбол',
			photo: 'img/photo.jpg'
		
		},
		{
			title: 'Фамилия Имя Отчество 2',
			content: 'Должность 2',
			motivationOne: 'Мотивация 2',
			motivationTwo: 'Мотивация 2',
			motivationThree: 'Мотивация 2',
			phone: '+38 (050)222-22-22 ',
			social: 'vk.com',
			hobby: 'Хобби 2',
			photo: 'img/image12.jpg'
		}
	];

	var content = tmpl(html, {
		data: articles
	});

	$('.container').append(content); 

});