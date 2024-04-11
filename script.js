const baseId = 'appexR9tFKGHjSWNE';
const tableName = 'Unified Desklogs';
const apiKey = 'patvDa3N84MeSmPqS.bea18731fee485325ba61b363719bf9188151c9932245d8f43e7cc56c645fdf2'; // Replace this with your new personal access token
const apiUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

const dealerships = [
  { name: 'BMW Mini of Sterling', recordId: 'reckhahIaMFkC24ho' },
  { name: 'Downtown Auto Center', recordId: 'recra7hD0foljBuDA' },
  { name: 'Downtown Subaru', recordId: 'recFRlYkyKEsRYcsz' },
  { name: 'Downtown Toyota', recordId: 'recTWjCIT5HIKXqY9' },
  { name: 'Downtown Used', recordId: 'recA984Aij5t1y4Y2' },
  { name: 'Gator Chevy', recordId: 'recgk5cQ9uNMBvD5x' },
  { name: 'Priority Toyota', recordId: 'rechlRzCiPxagTvv1' },
  { name: 'South Georgia CDJR', recordId: 'recNg3ZIeQuSwOcI8' },
  { name: 'Antelope Valley Chevrolet', recordId: 'recqH4Xb1vBs8DH2j' },
  { name: 'Glendale Nissan', recordId: 'recBqsmzIvsVpi8ct' }
];

const dealershipsData = [
  {
    "name": "BMW Mini of Sterling",
    "logo": "https://github.com/geomodi/stuff/blob/main/BMW%20Mini%20of%20Sterling%20(rounded).png?raw=true",
    "chartId": "bmw-mini-of-sterling-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/drive%20centric.jpg?raw=true"
  },
  {
    "name": "Downtown Auto Center",
    "logo": "https://github.com/geomodi/stuff/blob/main/Downtown%20Auto%20Center%20(rounded).png?raw=true",
    "chartId": "downtown-auto-center-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Downtown Subaru",
    "logo": "https://github.com/geomodi/stuff/blob/main/Downtown%20Subaru%20(rounded).png?raw=true",
    "chartId": "downtown-subaru-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Downtown Toyota",
    "logo": "https://github.com/geomodi/stuff/blob/main/Downtown%20Toyota%20(rounded).png?raw=true",
    "chartId": "downtown-toyota-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Downtown Used",
    "logo": "https://github.com/geomodi/stuff/blob/main/Downtown%20Used%20(rounded).png?raw=true",
    "chartId": "downtown-used-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Gator Chevy",
    "logo": "https://github.com/geomodi/stuff/blob/main/Gator%20Chevy%20(rounded).png?raw=true",
    "chartId": "gator-chevy-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Priority Toyota",
    "logo": "https://github.com/geomodi/stuff/blob/main/Priority%20Toyota%20(rounded).png?raw=true",
    "chartId": "priority-toyota-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "South Georgia CDJR",
    "logo": "https://github.com/geomodi/stuff/blob/main/South%20Georgia%20CDJR%20(rounded).png?raw=true",
    "chartId": "south-georgia-cdjr-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Antelope Valley Chevrolet",
    "logo": "https://github.com/geomodi/stuff/blob/main/Antelope%20Valley%20Chevrolet%20(rounded).png?raw=true",
    "chartId": "antelope-valley-chevrolet-chart",
    "crm": "VinSolutions",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/vinso.png?raw=true"
  },
  {
    "name": "Glendale Nissan",
    "logo": "https://github.com/geomodi/stuff/blob/main/Glendale%20Nissan%20(rounded).png?raw=true",
    "chartId": "glendale-nissan-chart",
    "crm": "VinSolutions",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/vinso.png?raw=true"
  }
];

const dealershipContainer = document.getElementById('dealership-container');

// Sort the dealership data alphabetically by name
dealershipsData.sort((a, b) => a.name.localeCompare(b.name));

// Merge the data from the dealerships array and the dealershipsData array
const mergedDealerships = dealershipsData.map(dealership => {
  const matchingDealership = dealerships.find(d => d.name === dealership.name);
  return {
    ...dealership,
    recordId: matchingDealership ? matchingDealership.recordId : null
  };
});

const dealershipCardsHTML = mergedDealerships.map(dealership => `
  <div class="dealership-card">
    <div class="logo-container">
      <img src="${dealership.logo}" alt="${dealership.name}" class="dealership-logo">
    </div>
    <div class="chart-container">
      <div id="${dealership.chartId}" class="chart"></div>
    </div>
  </div>
`).join('');

const dealershipContainersHTML = [];
for (let i = 0; i < mergedDealerships.length; i += 3) {
  const dealershipsSlice = mergedDealerships.slice(i, i + 3);
  const cardsHTML = dealershipsSlice.map(dealership => `
    <div class="dealership-card">
      <div class="logo-container">
        <img src="${dealership.logo}" alt="${dealership.name}" class="dealership-logo">
      </div>
      <div class="crm-logo-container">
        <img src="${dealership.crmLogo}" alt="${dealership.crm}" class="crm-logo">
      </div>
      <div id="${dealership.chartId}" class="chart"></div>
    </div>
  `).join('');

  const containerHTML = `
    <div class="dealership-container">
      ${cardsHTML}
    </div>
  `;
  dealershipContainersHTML.push(containerHTML);
}
// After creating and appending the dealership cards
initializeFilter();
updateRefreshInfo(); // Update the refresh information
// Add slide-down animation to the header
const header = document.querySelector('header');
window.addEventListener('load', () => {
  setTimeout(() => {
    header.classList.add('slide-down');
  }, 100);
});

// Append the dealership containers to the main container
dealershipContainer.innerHTML = dealershipContainersHTML.join('');

let countdownInterval;
const timerValueElement = document.getElementById('timer-value');

function startTimer(duration) {
  let timer = duration, minutes, seconds;
  countdownInterval = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerValueElement.textContent = minutes + ":" + seconds; // Update the timer value

    if (--timer < 0) {
      clearInterval(countdownInterval);
      updateRefreshInfo(); // Update the refresh information before refreshing the page
      location.reload(); // Refresh the page
    }
  }, 1000);
}

startTimer(15 * 60); // Start a 15-minute countdown

function updateRefreshInfo(filterValue = '') {
  const lastRefreshed = new Date().toLocaleTimeString();
  const dealershipContainers = document.querySelectorAll('.dealership-container');
  let visibleDealerships = 0;

  dealershipContainers.forEach(container => {
    const dealershipCards = container.querySelectorAll('.dealership-card');
    let visibleCards = 0;

    dealershipCards.forEach(card => {
      const dealershipName = card.querySelector('.logo-container img').alt.toLowerCase();
      if (dealershipName.includes(filterValue.toLowerCase())) {
        card.style.display = '';
        visibleCards++;
        visibleDealerships++;
      } else {
        card.style.display = 'none';
      }
    });

    container.style.display = visibleCards > 0 ? '' : 'none';
  });

  document.getElementById('refresh-info').textContent = `Last refreshed: ${lastRefreshed} | Total dealerships: ${visibleDealerships}`;
}
function initializeFilter() {
  const filterInput = document.getElementById('filter-input');
  filterInput.addEventListener('input', () => {
    const filterValue = filterInput.value.toLowerCase();
    updateRefreshInfo(filterValue);
  });
}

// After creating and appending the dealership cards
updateRefreshInfo(); // Update the refresh information

document.addEventListener('DOMContentLoaded', () => {
  updateRefreshInfo(); // Update the refresh information on page load
});

window.addEventListener('load', () => {
  updateRefreshInfo(); // Update the refresh information after page refresh
});

// Fetch data from Airtable and create charts for each dealership
// Fetch data from Airtable and create charts for each dealership
mergedDealerships.forEach(function(dealership) {
  if (dealership.recordId) {
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}/${dealership.recordId}`;

    // Fetch data from Airtable for the specific record
    fetch(apiUrl, {
      headers: {
        'Authorization': 'Bearer ' + apiKey
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(`Data fetched from Airtable for ${dealership.name}:`, data);

        const record = data.fields;
        const dealershipName = record['Dealership'] || '';
        console.log('Dealership:', dealershipName);

        const confirmed = parseInt(record['Confirmed']) || 0;
        const shown = parseInt(record['Shown']) || 0;
        const missed = parseInt(record['Missed']) || 0;
        const overdue = parseInt(record['Overdue']) || 0;
        const apptsToday = parseInt(record['Appointments for Today']) || 0;
        const apptsTomorrow = parseInt(record['Appointments for Tomorrow']) || 0;
        const appts3rdDay = parseInt(record['3rd Day Appointments']) || 0;
        const trueBDCToday = parseInt(record['TrueBDC Today']) || 0; // Add this line

        // Create Highcharts chart for the dealership
        const chartId = `${dealership.name.replace(/\s+/g, '-').toLowerCase()}-chart`;
        console.log('Chart ID:', chartId);

        Highcharts.chart(chartId, {
          chart: {
            type: 'bar'
          },
          title: {
            text: `${dealershipName}`,
            style: {
              fontFamily: 'Poppins', // Set the font family for the title
              fontWeight: 'normal'
            }
          },
          xAxis: {
            categories: ['Confirmed', 'Shown', 'Missed', 'Overdue', 'Today', 'Tomorrow', '3rd Day', 'TrueBDC Today'], // Update the categories array
            title: {
              text: null
            }
          },
          yAxis: {
            title: {
              text: ''
            },
            labels: {
              enabled: false
            },
            gridLineWidth: 0
          },
          tooltip: {
            enabled: false
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
          series: [{
            name: 'Desklog Data',
            data: [confirmed, shown, missed, overdue, apptsToday, apptsTomorrow, appts3rdDay, trueBDCToday] // Update the data array
          }],
          legend: {
            enabled: true
          },
          credits: {
            enabled: false
          }
        });
      })
      .catch(error => {
        console.error(`Error fetching data from Airtable for ${dealership.name}:`, error);
      });
  }
});