const labels = ["Jan","Feb","Mar","Apr","May","June","July"]
const site1 = [65, 59, 80, 81, 56, 55, 40];
const site2 = [24, 34, 54, 62, 34, 54, 23];
const data = {
  labels: labels,
  datasets: [{
    label: 'Kilowatt hours by month',
    data: site1,
    fill: true,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  },{
    label: 'Kilowatt hours by month',
    data: site2,
    fill: false,
    borderColor: 'rgb(25, 32, 77)',
    tension: 0.1
  }]
};
 
const config = {
  type: 'line',
  data: data,
};
 
const ctx = document.getElementById('myChart');
  
new Chart(ctx, config);
