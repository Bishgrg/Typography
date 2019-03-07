var arr = ["by DEΔN"]

var elem = document.getElementById("type")

i = 0
j = 0

var writeEffect = setInterval(function (){
i++
if(j == arr.length){
clearInterval(writeEffect)
}
if(i > arr[j].length+5){
j++
i = 0
}
elem.innerHTML = arr[j].slice(0, i);
}, 120);