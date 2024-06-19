let csvFile = "";
document.getElementById('co2Form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading message
    document.getElementById('loadingMessage').style.display = 'block';

    const vehicleType = parseInt(document.getElementById('vehicleType').value);
    const fuelType = parseInt(document.getElementById('fuelType').value);
    const engineCapacity = parseInt(document.getElementById('engineCapacity').value);
    const tripDistance = parseInt(document.getElementById('tripDistance').value);
    const saveTrip = document.getElementById('saveTrip').checked;

    // Simulate a calculation delay
    setTimeout(function() {
        let select = vehicleType+fuelType+engineCapacity;
        
        const result = calcu(select,tripDistance);
        // Hide loading message
        document.getElementById('loadingMessage').style.display = 'none';

        // Show result message
        let resultMessage = document.getElementById('resultMessage');
        resultMessage.innerHTML = `
        Based on the information that you gave us, we have calculated the result of it. 
        Your trip emitted <span style="color: red;">${result.toFixed(2)} grams</span> of Carbon.
        You have exceeded daily use of Carbon. We suggest you to use public transport :)
        `;
        resultMessage.style.display = 'block';
        if(saveTrip==true){
            updateCSV(getCurrentMonth,result);
            console.log("save")
            console.log()
        }
    }, 2000); // Simulate delay
});

// Add event listener to the switch link
document.querySelector('.switch-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "public-transport.html"; // Redirect to public transport page
});
function fetchCSVFile() {
  fetch('carbonData.csv')
      .then(response => response.text())
      .then(data => {
          csvFile = data.trim();
          console.log("CSV File Loaded");
      })
      .catch(error => console.error('Error loading CSV file', error));
}
function calcu(type, range) {
    const list = [0.17297, 0.21486, 0.29937, 0.14518, 0.18097, 0.18097, 0.24546, 0.11914, 0.21726, 0.08499, 0.10316, 0.13724];
    return range * list[type];
}
function getCurrentMonth() {
    return new Date().getMonth() + 1;
}

function readCSV() {
  const rows = csvFile.trim().split('\n').slice(1);
  if (!rows || rows.length === 0) {
      return [];
  }

  const data = rows.map(row => {
      const [month, carbon] = row.split(',').map(Number);
      return { month, carbon };
  });

  const currentMonth = getCurrentMonth();
  const cleanedData = data.filter(entry => {
      const age = (currentMonth - entry.month + 12) % 12;
      return age < 6 && age >= 0;
  });

  console.log("Data Loaded");
  return cleanedData;
}
function updateCSV(currentMonth, carbon) {
  let data = readCSV();

  if (data.length === 0) {
      data.push({ month: currentMonth, carbon });
  } else {
      const foundIndex = data.findIndex(entry => entry.month === currentMonth);
      if (foundIndex !== -1) {
          data[foundIndex].carbon += carbon;
      } else {
          data.push({ month: currentMonth, carbon });
      }
  }

  saveCSV(data);
  console.log("Data saved");
}

function saveCSV(data) {
  csvFile = "Month,Carbon\n" + data.map(row => `${row.month},${row.carbon}`).join('\n');
}