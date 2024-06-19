let csvFile = "";
let month0 = 6, month1 = 5, month2 = 4, month3 = 3, month4 = 2, month5 = 1;
let carbon0 = 2421, carbon1 = 4322, carbon2 = 5430, carbon3 = 6740, carbon4 =4342, carbon5=1543;
document.addEventListener('DOMContentLoaded', () => {
  // readCSV(csvData);
    const editButton = document.querySelector('.edit-btn');
    editButton.addEventListener('click', () => {
      alert('Edit button clicked!');
    });
    console.log(month0);
    console.log(carbon0);
  });

document.addEventListener('DOMContentLoaded', () => {
    const tripContainer = document.getElementById('tripContainer');

    const tripHistory = JSON.parse(localStorage.getItem('tripHistory')) || [];

    tripHistory.forEach(trip => {
        const tripElement = document.createElement('div');
        tripElement.classList.add('trip');

        tripElement.innerHTML = `
            <p class="date-time">Trip ${month0} - ${carbon0} <span class="${trip.type.toLowerCase().replace(' ', '-')}">${trip.type}</span></p>
            <div class="trip-details">
                <p>Vehicle Type: ${trip.vehicleType}<br>Trip Distance: ${trip.tripDistance} KM</p>
                <p>Emitted <strong>-- grams</strong> of Carbon<br><span class="warning">--</span></p>
            </div>
        `;

        tripContainer.appendChild(tripElement);
    });
});

// function fetchCSVFile() {
//   return fetch('carbonData.csv')
//       .then(response => response.text())
//       .then(data => {
//           csvFile = data.trim();
//           console.log("CSV File Loaded");
//           localStorage.setItem('carbonData', csvFile);
//           readCSV();
//       })
//       .catch(error => console.error('Error loading CSV file', error));
// }

// function readCSV(csvData) {
//   if (!csvData) {
//       console.error('No CSV data provided');
//       return [];
//   }

//   const rows = csvData.trim().split('\n').slice(1); // Skip header row
//   const data = rows.map(row => {
//       const [month, carbon] = row.split(',').map(Number);
//       return { month, carbon };
//   });

//   if (data.length >= 6) {
//       month0 = data[0].month;
//       month1 = data[1].month;
//       month2 = data[2].month;
//       month3 = data[3].month;
//       month4 = data[4].month;
//       month5 = data[5].month;
//       carbon0 = data[0].carbon;
//       carbon1 = data[1].carbon;
//       carbon2 = data[2].carbon;
//       carbon3 = data[3].carbon;
//       carbon4 = data[4].carbon;
//       carbon5 = data[5].carbon;
//   } else {
//       console.error('Not enough data to populate variables');
//   }

//   const currentMonth = getCurrentMonth();
//   const cleanedData = data.filter(entry => (currentMonth - entry.month + 12) % 12 < 6);

//   return cleanedData;
// }
// function getCurrentMonth() {
//   return new Date().getMonth() + 1;
// }