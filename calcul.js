function calculateCost() {
  
  var areaInput = document.getElementById('area');
  var area = parseFloat(areaInput.value);
  var quality = document.getElementById('quality').value;
  var doorsInput = document.getElementById('doors');
  var doors = doorsInput.value.trim() ? parseFloat(doorsInput.value) : 0;
  var windowsInput = document.getElementById('windows');
  var windows = windowsInput.value.trim() ? parseFloat(windowsInput.value) : 0;
  var exteriorPaintInput = document.getElementById('exteriorPaint');
  var exteriorPaint = exteriorPaintInput.value.trim() ? parseFloat(exteriorPaintInput.value) : 0;
  var interiorPaintInput = document.getElementById('interiorPaint');
  var interiorPaint = interiorPaintInput.value.trim() ? parseFloat(interiorPaintInput.value) : 0;
  var flooringInput = document.getElementById('flooring');
  var flooring = flooringInput.value.trim() ? parseFloat(flooringInput.value) : 0;

  if (isNaN(area)) {
    alert("Будь ласка, введіть площу.");
    return;
  }

  
  var simpleRate = 6000; 
  var normalRate = 13500; 
  var premiumRate = 18000; 
  var doorCostPerUnit = 10000;
  var windowCostPerUnit = 3000; 
  var exteriorPaintCostPerSqM = 200; 
  var interiorPaintCostPerSqM = 150; 
  var flooringCostPerSqM = 750; 


  // Розрахунок вартості ремонту в залежності від обраного рівня якості
  var rate;
  switch (quality) {
    case 'simple':
      rate = simpleRate;
      break;
    case 'normal':
      rate = normalRate;
      break;
    case 'premium':
      rate = premiumRate;
      break;
    default:
      rate = simpleRate; 
  }

  
  var doorTotalCost = doors * doorCostPerUnit;
  var windowTotalCost = windows * windowCostPerUnit;
  var exteriorPaintTotalCost = exteriorPaint * exteriorPaintCostPerSqM;
  var interiorPaintTotalCost = interiorPaint * interiorPaintCostPerSqM;
  var flooringTotalCost = flooring * flooringCostPerSqM;

  var totalCost = area * rate + doorTotalCost + windowTotalCost + exteriorPaintTotalCost + interiorPaintTotalCost + flooringTotalCost;

  document.getElementById('totalCost').innerHTML = 'Приблизна вартість ремонту: ' + totalCost.toFixed(2) + ' грн';
}





