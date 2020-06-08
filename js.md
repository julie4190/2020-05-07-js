var a = 10;
alert(a);
var html = document.getElementById("sample").innerHTML; //Getter
document.getElementById("sample").innerHTML = '<div>Hello World</div>'; //Setter

var html = $("#sample").html();	//Getter
$("#sample").html('<div>Hello World</div>');	//Setter
<script>
document.write('<div>Hello World</div>');
</script>
<!-- 결과가 위와 같다. -->
<div>Hello World</div>

<!-- 현재 문서를 프린트 할 수 있는 옵션창을 띄운다. -->
<button onclick="window.print()">Print this page</button>
var num = 5;
typeof num //"number"
var str = "Hello"
typeof str //"string"
var bool = true
typeof bool //"boolean"

var a = 10;
console.log(a++);	// 10

var a = 10;
console.log(++a);	// 11

var car = ""
undefined
if(car) {console.log("hi")}
undefined
var car = " ";
undefined
if(car) {console.log("hi")}
hi
undefined
""
""
if("") console.log("찍나?")
if(" ") console.log("찍나?") //찍나?
if('A') console.log("찍나?") //찍나?

if(0) console.log("찍나?")
if(1) console.log("찍나?") //찍나?
if(2) console.log("찍나?") //찍나?

if(undefined) console.log("찍나?")
if(null) console.log("찍나?")

typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"
primittive(원시) type: Number(숫자), String(문자), Boolean(true, false), undefined(정해지지않은)
reference(참조) type: Array(배열), function, Object(객체), null(빈값, 초기화할때 많이 사용)
var a = 10; //Number
var b = "A"; //String
var c = true; //Boolean
var d = null;
var e = undefined;
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate"); // return 7

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate"); // return 21

// slice(시작인덱스, 끝인덱스) - 시작인덱스에서 끝인덱스까지의 글자
// slice(시작인덱스) - 시작인덱스에서 모든 글자
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); // Banana

var str = "Apple, Banana, Kiwi";
var res = str.slice(7); // Banana, Kiwi

// substring(시작인덱스, 끝인덱스) - 시작인덱스에서 끝인덱스까지의 글자
// substring(시작인덱스) - 시작인덱스에서 모든 글자
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13); // Banana

var str = "Apple, Banana, Kiwi";
var res = str.substring(7); // Banana, Kiwi

// substr(7, 6) - 7번째 index 글자부터 6개의 글자
// substr(7) - 7번째 index 글자부터 모든 글자
var str = "Apple, Banana, Kiwi";
var res = str.substr(7); // Banana, Kiwi