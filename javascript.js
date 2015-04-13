var lightingMoneyCost = 0;
var coolingMoneyCost = 0;
var heatingMoneyCost = 0;
var lightingEnergyCost = 0;
var coolingEnergyCost = 0;
var heatingEnergyCost = 0;


function lightingBest() 
{
	var efficiency = 0.14 * 0.0;
	document.getElementById("lights").value = efficiency;
}
function lightingBetter() 
{
	var efficiency = 0.14 * 0.25;
	document.getElementById("lights").value = efficiency;
}
function lightingAve() 
{
	var efficiency = 0.14 * 0.5;
	document.getElementById("lights").value = efficiency;
}
function lightingBad() 
{
	var efficiency = 0.14 * 0.75;
	document.getElementById("lights").value = efficiency;
}
function lightingWorst() 
{
	var efficiency = 0.14 * 0.95;
	document.getElementById("lights").value = efficiency;
}

function coolingBest() 
{
	var efficiency = 0.35 * 0.65;
	document.getElementById("cooling").value = efficiency;
}
function coolingBetter() 
{
	var efficiency = 0.35 * 0.55;
	document.getElementById("cooling").value = efficiency;
}
function coolingAve() 
{
	var efficiency = 0.35 * 0.45;
	document.getElementById("cooling").value = efficiency;
}
function coolingBad() 
{
	var efficiency = 0.35 * 0.35;
	document.getElementById("cooling").value = efficiency;
}
function coolingWorst() 
{
	var efficiency = 0.35 * 0.25;
	document.getElementById("cooling").value = efficiency;
}


function heatingBest() 
{
	var efficiency = 0.40 * 0.65;
	document.getElementById("heating").value = efficiency;
}
function heatingBetter() 
{
	var efficiency = 0.40 * 0.55;
	document.getElementById("heating").value = efficiency;
}
function heatingAve() 
{
	var efficiency = 0.40 * 0.45;
	document.getElementById("heating").value = efficiency;
}
function heatingBad() 
{
	var efficiency = 0.40 * 0.35;
	document.getElementById("heating").value = efficiency;
}
function heatingWorst() 
{
	var efficiency = 0.40 * 0.25;
	document.getElementById("heating").value = efficiency;
}

function calculate()
{
	var cost = document.getElementById('cost').value;
	
	var efficiency = document.getElementById('lights').value;
	var energy = cost * efficiency / 0.187;
	var money = cost * efficiency;
	var lightingEnergyCost = energy.toFixed(0) + ' kWh';
	var lightingMoneyCost = '$' + energy.toFixed(2);
	document.getElementById("lightingEnergyResult").innerHTML = lightingEnergyCost;
	document.getElementById("lightingMoneyResult").innerHTML = lightingMoneyCost;
	
	efficiency = document.getElementById('cooling').value;
	energy = cost * efficiency / 0.187;
	money = cost * efficiency;
	coolingEnergyCost = energy.toFixed(0) + ' kWh';
	coolingMoneyCost = '$' + energy.toFixed(2);
	document.getElementById("coolingEnergyResult").innerHTML = coolingEnergyCost;
	document.getElementById("coolingMoneyResult").innerHTML = coolingMoneyCost;
	
	efficiency = document.getElementById('heating').value;
	energy = cost * efficiency / 0.187;
	money = cost * efficiency;
	heatingEnergyCost = energy.toFixed(0) + ' kWh';
	heatingMoneyCost = '$' + energy.toFixed(2);
	document.getElementById("heatingEnergyResult").innerHTML = heatingEnergyCost;
	document.getElementById("heatingMoneyResult").innerHTML = heatingMoneyCost;
	

}