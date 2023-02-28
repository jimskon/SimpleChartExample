const labels = ["Jan","Feb","Mar","Apr","May","June","July"]
const stats = [65, 59, 80, 81, 56, 55, 40];
const data = {
  labels: labels,
  datasets: [{
    label: 'Kilowatt hours by month',
    data: stats,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
 
const config = {
  type: 'bar',
  data: data,
};
 
 const ctx = document.getElementById('myChart');
  
new Chart(ctx, config);
