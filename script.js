var images = [
	'https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&h=350',
	'https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&h=350',
	'http://www.un.org/sites/www.un.org/files/styles/large/public/2016/02/11/ocean.jpg'
];

var num = 0;

function next() {
	var slider = document.getElementById('slider');
	num++;
	if (num >= images.length) {
		num = 0;
	}
	slider.src = images[num];
}

function prev() {
	var slider = document.getElementById('slider');
	num--;
	if (num < 0) {
		num = images.length-1;
	}
	slider.src = images[num];
}