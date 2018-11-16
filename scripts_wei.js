var urlArr = [];
var previous = false;
var vw = $(window).width();
function generateRandomPic(t){
	//random might need to fix
	for(i=0;i<t;i++){
		var imgFolder = "logos-stripped/";
		var brandsArr = Object.keys(brandInventoriesObj);
		var rBrand = brandsArr[parseInt(brandsArr.length*Math.random())];
		var rElement = parseInt(brandInventoriesObj[rBrand]*Math.random());
		var url = imgFolder+rBrand+"-"+rElement+".svg";
		
		urlArr[i] = url;
	}
}
$("#btn").click(function(){
	$("#container").empty();
	generateRandomPic(getRandomIntInclusive(5, 30));

	for(j=0;j<urlArr.length;j++){
		// 35 = 50-30/2
		var left = randomGaussian(35, 12);
		var top = randomGaussian(35, 12);
		$("#container").append("<div class = 'imgContainers'><img src='"+urlArr[j]+"'></div>");
		$(".imgContainers:last-of-type").css({"top":top+"%","left":left+"%","width":"30vw"});
	}

});

// --------------------------------------------- Helpers!

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// // thanks, Lauren!
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