let sumoCount = parseInt(localStorage.getItem('sumoCount')) || 0;
let paniqCount = parseInt(localStorage.getItem('paniqCount')) || 0;
let kartingCount = parseInt(localStorage.getItem('kartingCount')) || 0;

function updateCounts() {
  document.getElementById('sumo-count').textContent = sumoCount;
  document.getElementById('paniq-count').textContent = paniqCount;
  document.getElementById('karting-count').textContent = kartingCount;
}

function vote(option) {
  if (option === 'sumo') {
    sumoCount++;
    localStorage.setItem('sumoCount', sumoCount);
  } else if (option === 'paniq') {
    paniqCount++;
    localStorage.setItem('paniqCount', paniqCount);
  } else if (option === 'karting') {
    kartingCount++;
    localStorage.setItem('kartingCount', kartingCount);
  }
  updateCounts();
}

// Update vote counts when the page loads
window.addEventListener('load', updateCounts);

function resetCounts() {
    sumoCount = 0;
    paniqCount = 0;
    kartingCount = 0;
    
    localStorage.setItem('sumoCount', sumoCount);
    localStorage.setItem('paniqCount', paniqCount);
    localStorage.setItem('kartingCount', kartingCount);
    
    updateCounts();
  }