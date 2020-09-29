var d = new Date();
//get date methods
document.getElementById("getMonth").innerHTML = d.getMonth();

document.getElementById("getDate").innerHTML = d.getDate();

document.getElementById("getHours").innerHTML = d.getHours();

document.getElementById("getMinutes").innerHTML = d.getMinutes();

document.getElementById("getSeconds").innerHTML = d.getSeconds();

//set date methods
d.setMonth(11);
document.getElementById("setMonth").innerHTML = d;
d.setDate(d.getDate()+50);
document.getElementById("setDate").innerHTML = d;
d.setHours(22);
document.getElementById("setHours").innerHTML = d;
d.setMinutes(30);
document.getElementById("setMinutes").innerHTML = d;
d.setFullYear(2020,8,29);
document.getElementById("setFullYear").innerHTML = d;

function calculate(){
	d1 = Date.parse(prompt("enter 1st date (mm/dd/yyyy)"));
	d2 = Date.parse(prompt("enter 2nd date(mm/dd/yyyy)"));
	d = Math.abs(d1-d2)

	d = d/1000;
	let sec = parseInt(d%60);
	d = d/60;
	let minute = parseInt(d%60);
	d = d/60;
	let hour = parseInt(d%24);
	d = d/24;
	let day = parseInt(d%30);
	d = d/30;
	let month = parseInt(d%12);
	d = d/12;
	let year = parseInt(d);

	document.getElementById("check").style.display = "None";
	document.getElementById("result").innerHTML = `${year} year ${month} month ${day} day ${hour} hour ${minute} minute ${sec} sec`;
}