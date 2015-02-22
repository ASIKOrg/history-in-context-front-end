//array of all json date objects
var events[];

document.getElementById("hello").push("eh");

function search(){
	var text = '{"start":1999,"end":2015,"description":"Stuart Lives"}';

	var obj = JSON.parse(text);

	document.getElementById("hello").innerHTML =
	obj.start + " - " +
	obj.end + "<br>" +
	obj.description;
	display();
	events[events.length] = obj;
	display();
}

//displays each of the objects
function display(){
	var empty = true;
	var minYear = -9999;
	for(var b: event)
}