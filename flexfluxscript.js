// ___________________flexFlux Script __________________________

// Disclaimer: 
// This script has been developed for the sole purpose of facilitating personal academic data analysis. 
// It is designed to automate the calculation of Total Absolute Marks, Obtained Absolute marks, and class average absolute marks 
// based on publicly accessible data from the university website.

// Usage of this script is subject to the following conditions:
// 1. The script user agrees to use this script only for personal educational purposes and not for any activities 
//    that may violate university policies or codes of conduct.
// 2. The developer of this script disclaims any responsibility for the consequences, legal or otherwise, arising from the use of this script.

// This script is intended for ethical and responsible use. It should not be used in any way that could harm 
// the university's systems, violate privacy, or infringe upon the rights of others.

// Author: Ajmal Razaq Bhatti
// Github: @theajmalrazaq
// Linkedin: @theajmalrazaq
// ______________________________________________________


var active = document.querySelectorAll('.active');
var activeIndex = 1;
var activeElement = active[activeIndex];
var obtMarks = activeElement.querySelectorAll('.totalColObtMarks');
var ttlMarks = activeElement.querySelectorAll('.weightage');
var avgMarks = activeElement.querySelectorAll('.AverageMarks');
var avgTtlMarks = activeElement.querySelectorAll('.GrandTotal');
var lengthObt = obtMarks.length;
var lengthTtl = ttlMarks.length;
var lengthAvg = avgMarks.length;
var lengthAvgTtl = avgTtlMarks.length;
var sumObt = 0;

for (let i = 0; i < lengthObt; i++) {
    sumObt += parseFloat(obtMarks[i].innerHTML);
}

let sumTtl = 0;
for (let i = 0; i < lengthTtl; i++) {
    sumTtl += parseFloat(ttlMarks[i].innerHTML);
}

let sumAvg = 0;
for (let i = 0; i < lengthAvg; i++) {
    sumAvg += (parseFloat(avgMarks[i].innerHTML) / parseFloat(avgTtlMarks[i].innerHTML)) * parseFloat(ttlMarks[i].innerHTML);
}

var check = sumObt < sumAvg;
var msg = check ? "Your Marks Are " + (sumAvg - sumObt) + " Below Class Average" : "Your Marks Are " + (sumObt - sumAvg) + " Above Class Average";
var message = "Absolute Obtained: " + sumObt + "\nTotal Absolute: " + sumTtl + "\nClass Average Absolute: " + sumAvg + "\n" + msg + "\n\nFind Any Issue Just DM me on Insta: @theajmalrazaq\nDeveloped By: Ajmal Razaq Bhatti\nGithub: @theajmalrazaq\nLinkedin: @theajmalrazaq";

alert(message);
