// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// previous is just for Lauren's Gaussian function below
var previous = false;


// What does this do?
let brandsArr = Object.keys(brandInventoriesObj);

// --------------------------------------------- Where the magic happens!

let htmlString = '';
for(let i=0; i<getRandomIntInclusive(5, 30); i++){
	let randomBrand = brandsArr[getRandomIntInclusive(0, brandsArr.length - 1)];
	let randomPartOfBrand = getRandomIntInclusive(0, brandInventoriesObj[randomBrand]);
	let left = randomGaussian(50, 10);
	let top = randomGaussian(50, 10);
	let element = '<i style="top:' + top +  '%;left:' + left + '%;"';
	element += 'class="logo logo-' + randomBrand + '-' + randomPartOfBrand + '"></i>'
	htmlString += element;
}
let main = document.querySelector('main');
main.innerHTML = htmlString;




// --------------------------------------------- Helpers!

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// thanks, Lauren!
function randomGaussian(mean, sd) {
	var y1, x1, x2, w;
	if (previous) {
		y1 = y2;
		previous = false;
	} else {
		do {
			x1 = (Math.random() * 2) - 1;
			x2 = (Math.random() * 2) - 1;
			w = x1 * x1 + x2 * x2;
		} while (w >= 1);
		w = Math.sqrt(-2 * Math.log(w) / w);
		y1 = x1 * w;
		y2 = x2 * w;
		previous = true;
	}
	var m = mean || 0;
	var s = sd || 1;
	return y1 * s + m;
};