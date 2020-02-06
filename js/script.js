// Circle
let circle = Math.floor(Math.random() * 100);
// Circle Number
let circleNumber = Math.floor((circle * 30 + 1) / 100);
// Progression Bar
let progressionBar1 = Math.floor(Math.random() * 20);
let progressionBar2 = Math.floor(Math.random() * 10);
let progressionBar3 = Math.floor(Math.random() * 40);
let progressionBar4 = Math.floor(Math.random() * 50);


document.getElementById("circle").innerHTML = `<path class="circle" stroke-dasharray="${circle}, 100" d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831" />
<text id="svg-text-01" x="50%" y="50%" text-anchor="middle" stroke="#fff"
stroke-width="0.1px" dy=".1em">${circleNumber}</text>
<text id="svg-text-02" x="50%" y="50%" text-anchor="middle" stroke="#fff"
stroke-width="0.1px" dy="1.5em">/30</text>`;

document.getElementById("progressBar01").innerHTML = `<div class="progress-bar" role="progressbar" style="width: ${progressionBar1}%" aria-valuenow="${progressionBar1}" aria-valuemin="0"
aria-valuemax="100"></div>
<div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-danger" role="progressbar" style="width: 5%" aria-valuenow="5"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-primary" role="progressbar" style="width: 5%" aria-valuenow="5"
aria-valuemin="0" aria-valuemax="100"></div>`;

document.getElementById("progressBar02").innerHTML = `<div class="progress-bar" role="progressbar" style="width: ${progressionBar2}%" aria-valuenow="${progressionBar2}" aria-valuemin="0"
aria-valuemax="100"></div>
<div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-danger" role="progressbar" style="width: 5%" aria-valuenow="5"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-primary" role="progressbar" style="width: 5%" aria-valuenow="5"
aria-valuemin="0" aria-valuemax="100"></div>`;

document.getElementById("progressBar03").innerHTML = `<div class="progress-bar" role="progressbar" style="width: ${progressionBar3}%" aria-valuenow="${progressionBar3}" aria-valuemin="0"
aria-valuemax="100"></div>
<div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-danger" role="progressbar" style="width: 5%" aria-valuenow="5"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-primary" role="progressbar" style="width: 5%" aria-valuenow="5"
aria-valuemin="0" aria-valuemax="100"></div>`;

document.getElementById("progressBar04").innerHTML = `<div class="progress-bar" role="progressbar" style="width: ${progressionBar4}%" aria-valuenow="${progressionBar4}" aria-valuemin="0"
aria-valuemax="100"></div>
<div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-danger" role="progressbar" style="width: 5%" aria-valuenow="5"
aria-valuemin="0" aria-valuemax="100"></div>
<div class="progress-bar bg-primary" role="progressbar" style="width: 5%" aria-valuenow="5"
aria-valuemin="0" aria-valuemax="100"></div>`;