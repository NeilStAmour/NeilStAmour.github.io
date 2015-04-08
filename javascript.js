var lightingMoneyCost;
var coolingMoneyCost;
var heatingMoneyCost;
var lightingEnergyCost;
var coolingEnergyCost;
var heatingEnergyCost;


function lightingBest() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.14 * 0;
	var energyResult = (cost * 1.4 * 0);
	var lightingMoneyCost = '$' + moneyResult.toFixed(2);
	var lightingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("lightingMoneyResult").innerHTML = lightingMoneyCost;
	document.getElementById("lightingEnergyResult").innerHTML = lightingEnergyCost;
}
function lightingBetter() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.14 * 0.25;
	var energyResult = (cost * 1.4 * 0.25);
	var lightingMoneyCost = '$' + moneyResult.toFixed(2);
	var lightingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("lightingMoneyResult").innerHTML = lightingMoneyCost;
	document.getElementById("lightingEnergyResult").innerHTML = lightingEnergyCost;
}
function lightingAve() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.14 * 0.5;
	var energyResult = (cost * 1.4 * 0.5);
	var lightingMoneyCost = '$' + moneyResult.toFixed(2);
	var lightingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("lightingMoneyResult").innerHTML = lightingMoneyCost;
	document.getElementById("lightingEnergyResult").innerHTML = lightingEnergyCost;
}
function lightingBad() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.14 * 0.75;
	var energyResult = (cost * 1.4 * 0.75);
	var lightingMoneyCost = '$' + moneyResult.toFixed(2);
	var lightingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("lightingMoneyResult").innerHTML = lightingMoneyCost;
	document.getElementById("lightingEnergyResult").innerHTML = lightingEnergyCost;
}
function lightingWorst() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.14 * 0.95;
	var energyResult = (cost * 1.4 * 0.95);
	var lightingMoneyCost = '$' + moneyResult.toFixed(2);
	var lightingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("lightingMoneyResult").innerHTML = lightingMoneyCost;
	document.getElementById("lightingEnergyResult").innerHTML = lightingEnergyCost;
}

function coolingBest() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.18 * 0.65;
	var energyResult = (cost * 1.8 * 0.65);
	var coolingMoneyCost = '$' + moneyResult.toFixed(2);
	var coolingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("coolingMoneyResult").innerHTML = coolingMoneyCost;
	document.getElementById("coolingEnergyResult").innerHTML = coolingEnergyCost;
}
function coolingBetter() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.18 * 0.55;
	var energyResult = (cost * 1.8 * 0.55);
	var coolingMoneyCost = '$' + moneyResult.toFixed(2);
	var coolingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("coolingMoneyResult").innerHTML = coolingMoneyCost;
	document.getElementById("coolingEnergyResult").innerHTML = coolingEnergyCost;
}
function coolingAve() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.18 * 0.45;
	var energyResult = (cost * 1.8 * 0.45);
	var coolingMoneyCost = '$' + moneyResult.toFixed(2);
	var coolingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("coolingMoneyResult").innerHTML = coolingMoneyCost;
	document.getElementById("coolingEnergyResult").innerHTML = coolingEnergyCost;
}
function coolingBad() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.18 * 0.35;
	var energyResult = (cost * 1.8 * 0.35);
	var coolingMoneyCost = '$' + moneyResult.toFixed(2);
	var coolingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("coolingMoneyResult").innerHTML = coolingMoneyCost;
	document.getElementById("coolingEnergyResult").innerHTML = coolingEnergyCost;
}
function coolingWorst() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.18 * 0.25;
	var energyResult = (cost * 1.8 * 0.25);
	var coolingMoneyCost = '$' + moneyResult.toFixed(2);
	var coolingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("coolingMoneyResult").innerHTML = coolingMoneyCost;
	document.getElementById("coolingEnergyResult").innerHTML = coolingEnergyCost;
}


function heatingBest() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.06 * 0.65;
	var energyResult = (cost * 0.6 * 0.65);
	var heatingMoneyCost = '$' + moneyResult.toFixed(2);
	var heatingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("heatingMoneyResult").innerHTML = heatingMoneyCost;
	document.getElementById("heatingEnergyResult").innerHTML = heatingEnergyCost;
}
function heatingBetter() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.06 * 0.55;
	var energyResult = (cost * 0.6 * 0.55);
	var heatingMoneyCost = '$' + moneyResult.toFixed(2);
	var heatingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("heatingMoneyResult").innerHTML = heatingMoneyCost;
	document.getElementById("heatingEnergyResult").innerHTML = heatingEnergyCost;
}
function heatingAve() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.06 * 0.45;
	var energyResult = (cost * 0.6 * 0.45);
	var heatingMoneyCost = '$' + moneyResult.toFixed(2);
	var heatingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("heatingMoneyResult").innerHTML = heatingMoneyCost;
	document.getElementById("heatingEnergyResult").innerHTML = heatingEnergyCost;
}
function heatingBad() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.06 * 0.35;
	var energyResult = (cost * 0.6 * 0.35);
	var heatingMoneyCost = '$' + moneyResult.toFixed(2);
	var heatingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("heatingMoneyResult").innerHTML = heatingMoneyCost;
	document.getElementById("heatingEnergyResult").innerHTML = heatingEnergyCost;
}
function heatingWorst() 
{
	var cost = document.getElementById('cost').value;
	var moneyResult = cost * 0.06 * 0.25;
	var energyResult = (cost * 0.6 * 0.25);
	var heatingMoneyCost = '$' + moneyResult.toFixed(2);
	var heatingEnergyCost = energyResult.toFixed(0) + 'kWh';
	document.getElementById("heatingMoneyResult").innerHTML = heatingMoneyCost;
	document.getElementById("heatingEnergyResult").innerHTML = heatingEnergyCost;
}
