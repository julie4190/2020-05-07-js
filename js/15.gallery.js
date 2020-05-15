/*
<div class="list">
<img src="../img/house4.jpg" alt="p1.jpg" class="photo img">
<div class="photo-desc">그림 설명</div>
</div>
*/
var list = [];
list[0] = {
	title: "그림1",
	img: '../img/house4.jpg'

}
list[1] = {
	title: "그림2",
	img: '../img/house4.jpg'

}
list[2] = {
	title: "그림3",
	img: '../img/house4.jpg'

}
list[3] = {
	title: "그림4",
	img: '../img/house4.jpg'

}
list[4] = {
	title: "그림5",
	img: '../img/house4.jpg'

}
list[5] = {
	title: "그림6",
	img: '../img/house4.jpg'

}
list[6] = {
	title: "그림7",
	img: '../img/house4.jpg'

}
list[7] = {
	title: "그림8",
	img: '../img/house4.jpg'

}
$("#btMake").click(function () {
	for (var i = 0; i < list.length; i++) {
		insertData(list[i]);
	}

});
$("#btRemove").click(function () {
	$(".lists").empty();
});

function insertData(data) {
	var html = '';
	html += '<div class="list">';
	html += '	<img src="' + data.img + '" alt="그림" class="photo img">';
	html += '	<div class="photo-desc">' + data.title + '</div>';
	html += '</div>';
	$(".lists").append(html);
}