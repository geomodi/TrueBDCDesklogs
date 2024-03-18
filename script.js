const apiKey = 'patxcpcKWfTvBpTcn.183e8045edeb5d576c7aadbc728ca17c2082c9f81041b979f5bb9330f5801d56';
const baseId = 'appY7LOZGe1DoKhSx';
const tableName = 'Dealership Appts';

const dealerships = [
  { name: 'Benson Hyundai', recordId: 'recUFsOZStjjMzyv1' },
  { name: 'Betten Baker Buick GMC', recordId: 'recjC2pyAQokLn6d2' },
  { name: 'Campus Ford', recordId: 'recudsPmrgAKu1qMw' },
  { name: 'Cronic CDJR', recordId: 'rec6OKhBfVsVaWgSy' },
  { name: 'Cronic Nissan', recordId: 'rec1qkMYFMeDZ8YjA' },
  { name: 'Dena Motors', recordId: 'recBCiZTCSCOkB9a4' },
  { name: 'Frankfort Ford Lincoln', recordId: 'recU6rjo7ebC7Z2JE' },
  { name: 'Hutchinson Kia of Albany', recordId: 'recd8gFBESFVrgPtQ' },
  { name: 'Hutchinson Kia of Macon', recordId: 'recqpPFFnZK43coVH' },
  { name: 'Keffer Volkswagen', recordId: 'recuDPLiF0xy1LefA' },
  { name: 'Lou Bachrodt Chevrolet', recordId: 'recfP1afMAuaeRobg' },
  { name: 'Mike Reichenbach Ford', recordId: 'recfGY4KkrBwFrrls' },
  { name: 'Mike Reichenbach Volkswagen', recordId: 'recEaew4ParBM7xEH' },
  { name: 'Nissan of Hendersonville', recordId: 'receEsOAvLrsvV4We' },
  { name: 'Nissan of Orangeburg', recordId: 'recf2uJQMgUxfbpOj' },
  { name: 'Nissan of Richmond', recordId: 'reci4vBMhTvIG1zUY' },
  { name: 'Rockhill Nissan', recordId: 'recVSRxSvob2EKGfJ' },
  { name: 'Santee CDJR', recordId: 'recXTqigG43bXZMMv' },
  { name: 'Santee Ford', recordId: 'recW1VH7PaIy45ejK' },
  { name: 'Summerville Ford', recordId: 'recErbGj2QmX0Ke9T' },
  { name: 'Tenneson Nissan', recordId: 'recaGVzNXAkbe0UcW' },
  { name: 'Terry Cullen Southlake Chevrolet', recordId: 'recJkX9HVV4eMy1IU' },
  { name: 'Vero Beach Mitsubishi', recordId: 'recPgYadZOGIynvrp' },
  { name: 'Granbury Nissan', recordId: 'reckBtuBPwOBiIH9N' },
  { name: 'Lehman Hyundai Genesis', recordId: 'recpaiIXo9spqruvg' },
  { name: 'Mike Terry Chevrolet GMC', recordId: 'recwWjstHWH0WTAef' },
  { name: 'Mike Terry Ford', recordId: 'recTycKSIbiWpNbTR' },
  { name: 'McClinton Chevrolet Mitsubishi', recordId: 'recHpofGMPbQAEJXp' },
  { name: 'Springfield Hyundai', recordId: 'recXZkYag9G02MQt4' },
  { name: 'Subaru of North Miami', recordId: 'recd8VoJVWPXP0z54' }
];

const dealershipsData = [
  {
    "name": "Benson Hyundai",
    "logo": "https://github.com/geomodi/stuff/blob/main/Benson%20Hyundai%20Rounded.png?raw=true",
    "chartId": "benson-hyundai-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/drive%20centric.jpg?raw=true"
  },
  {
    "name": "Betten Baker Buick GMC",
    "logo": "https://github.com/geomodi/stuff/blob/main/Betten%20Baker%20Buick%20GMC%20Rounded.png?raw=true",
    "chartId": "betten-baker-buick-gmc-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Campus Ford",
    "logo": "https://github.com/geomodi/stuff/blob/main/Campus%20Ford%20Rounded.png?raw=true",
    "chartId": "campus-ford-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Cronic CDJR",
    "logo": "https://github.com/geomodi/stuff/blob/main/Cronic%20CDJR%20Rounded.png?raw=true",
    "chartId": "cronic-cdjr-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Cronic Nissan",
    "logo": "https://github.com/geomodi/stuff/blob/main/Cronic%20Nissan%20Rounded.png?raw=true",
    "chartId": "cronic-nissan-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Dena Motors",
    "logo": "https://github.com/geomodi/stuff/blob/main/Dena%20Motros%20Rounded.png?raw=true",
    "chartId": "dena-motors-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Frankfort Ford Lincoln",
    "logo": "https://github.com/geomodi/stuff/blob/main/Frankfort%20Ford%20Lincoln%20Rounded.png?raw=true",
    "chartId": "frankfort-ford-lincoln-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Granbury Nissan",
    "logo": "https://github.com/geomodi/stuff/blob/main/Granbury%20Nissan%20Rounded.png?raw=true",
    "chartId": "granbury-nissan-chart",
    "crm": "VinSolutions",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/vinso.png?raw=true"
  },
  {
    "name": "Hutchinson Kia of Albany",
    "logo": "https://github.com/geomodi/stuff/blob/main/Hutchinson%20Kia%20of%20Albany%20Rounded.png?raw=true",
    "chartId": "hutchinson-kia-of-albany-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Hutchinson Kia of Macon",
    "logo": "https://github.com/geomodi/stuff/blob/main/Hutchinon%20Kia%20of%20Macon%20Rounded.png?raw=true",
    "chartId": "hutchinson-kia-of-macon-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Keffer Volkswagen",
    "logo": "https://github.com/geomodi/stuff/blob/main/Keffer%20Volkswagen%20Rounded.png?raw=true",
    "chartId": "keffer-volkswagen-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Lehman Hyundai Genesis",
    "logo": "https://github.com/geomodi/stuff/blob/main/Lehman%20Hyundai%20Genesis%20Rounded.png?raw=true",
    "chartId": "lehman-hyundai-genesis-chart",
    "crm": "VinSolutions",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/vinso.png?raw=true"
  },
  {
    "name": "Lou Bachrodt Chevrolet",
    "logo": "https://github.com/geomodi/stuff/blob/main/Lou%20Bachrodt%20Chevrolet%20Rounded.png?raw=true",
    "chartId": "lou-bachrodt-chevrolet-chart",
    "crm": "Drive Centric",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/drive%20centric.jpg?raw=true"
  },
  {
    "name": "McClinton Chevrolet Mitsubishi",
    "logo": "https://github.com/geomodi/stuff/blob/main/McClinton%20Chevrolet%20Mitsubishi%20Rounded.png?raw=true",
    "chartId": "mcclinton-chevrolet-mitsubishi-chart",
    "crm": "VinSolutions",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/vinso.png?raw=true"
  },
  {
    "name": "Mike Reichenbach Ford",
    "logo": "https://github.com/geomodi/stuff/blob/main/Mike%20Reichenbach%20Ford%20Lincoln%20Rounded.png?raw=true",
    "chartId": "mike-reichenbach-ford-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Mike Reichenbach Volkswagen",
    "logo": "https://github.com/geomodi/stuff/blob/main/Mike%20Reichenbach%20Volkswagen%20Rounded.png?raw=true",
    "chartId": "mike-reichenbach-volkswagen-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Mike Terry Chevrolet GMC",
    "logo": "https://github.com/geomodi/stuff/blob/main/Mike%20Terry%20Chevrolet%20Rounded.png?raw=true",
    "chartId": "mike-terry-chevrolet-gmc-chart",
    "crm": "VinSolutions",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/vinso.png?raw=true"
  },
  {
    "name": "Mike Terry Ford",
    "logo": "https://github.com/geomodi/stuff/blob/main/Mike%20Terry%20Ford%20Rounded.png?raw=true",
    "chartId": "mike-terry-ford-chart",
    "crm": "VinSolutions",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/vinso.png?raw=true"
  },
  {
    "name": "Nissan of Hendersonville",
    "logo": "https://github.com/geomodi/stuff/blob/main/Nissan%20of%20Hendersonville%20Rounded.png?raw=true",
    "chartId": "nissan-of-hendersonville-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Nissan of Orangeburg",
    "logo": "https://github.com/geomodi/stuff/blob/main/Nissan%20of%20Orangeburg%20Rounded.png?raw=true",
    "chartId": "nissan-of-orangeburg-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Nissan of Richmond",
    "logo": "https://github.com/geomodi/stuff/blob/main/Nissan%20of%20Richmond%20Rounded.png?raw=true",
    "chartId": "nissan-of-richmond-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Rockhill Nissan",
    "logo": "https://github.com/geomodi/stuff/blob/main/Rockhill%20Nissan%20Rounded.png?raw=true",
    "chartId": "rockhill-nissan-chart",
    "crm": "Drive Centric",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/drive%20centric.jpg?raw=true"
  },
  {
    "name": "Santee CDJR",
    "logo": "https://github.com/geomodi/stuff/blob/main/Santee%20CDJR%20Rounded.png?raw=true",
    "chartId": "santee-cdjr-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Santee Ford",
    "logo": "https://github.com/geomodi/stuff/blob/main/Santee%20Ford%20Rounded.png?raw=true",
    "chartId": "santee-ford-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Springfield Hyundai",
    "logo": "https://github.com/geomodi/stuff/blob/main/Springfield%20Hyundai%20Rounded.png?raw=true",
    "chartId": "springfield-hyundai-chart",
    "crm": "VinSolutions",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/vinso.png?raw=true"
  },
  {
    "name": "Subaru of North Miami",
    "logo": "https://github.com/geomodi/stuff/blob/main/Subaru%20of%20North%20Miami%20Rounded.png?raw=true",
    "chartId": "subaru-of-north-miami-chart",
    "crm": "VinSolutions",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/vinso.png?raw=true"
  },
  {
    "name": "Summerville Ford",
    "logo": "https://github.com/geomodi/stuff/blob/main/Summerville%20Ford%20Rounded.png?raw=true",
    "chartId": "summerville-ford-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Tenneson Nissan",
    "logo": "https://github.com/geomodi/stuff/blob/main/Tenneson%20Nissan%20Rounded.png?raw=true",
    "chartId": "tenneson-nissan-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Terry Cullen Southlake Chevrolet",
    "logo": "https://github.com/geomodi/stuff/blob/main/Terry%20Cullen%20Southlake%20Chevrolet%20Rounded.png?raw=true",
    "chartId": "terry-cullen-southlake-chevrolet-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
  },
  {
    "name": "Vero Beach Mitsubishi",
    "logo": "https://github.com/geomodi/stuff/blob/main/Vero%20Beach%20Mitsubishi%20Rounded.png?raw=true",
    "chartId": "vero-beach-mitsubishi-chart",
    "crm": "eLeads",
    "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
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
// Generate HTML markup for each dealership
const dealershipContainersHTML = [];
for (let i = 0; i < mergedDealerships.length; i += 3) {
  const dealershipsSlice = mergedDealerships.slice(i, i + 3);
  const cardsHTML = dealershipsSlice.map(dealership => `
    <div class="dealership-card" data-dealership="${dealership.name}">
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

        const createdTimestamp = record['Created'];
        const currentDate = new Date();

        // Parse the created timestamp into a Date object
        const parsedTimestamp = parseTimestamp(createdTimestamp);

        // Check if the parsed timestamp matches the current date
        if (parsedTimestamp && isSameDate(parsedTimestamp, currentDate)) {
          const confirmed = parseInt(record['Confirmed']) || 0;
          const shown = parseInt(record['Shown']) || 0;
          const missed = parseInt(record['Missed']) || 0;
          const overdue = parseInt(record['Overdue']) || 0;
          const apptsToday = parseInt(record['Appointments for Today']) || 0;
          const apptsTomorrow = parseInt(record['Appointments for Tomorrow']) || 0;
          const appts3rdDay = parseInt(record['3rd Day Appointments']) || 0;

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
              categories: ['Confirmed', 'Shown', 'Missed', 'Overdue', 'Today', 'Tomorrow', '3rd Day'],
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
              data: [confirmed, shown, missed, overdue, apptsToday, apptsTomorrow, appts3rdDay]
            }],
            legend: {
              enabled: true
            },
            credits: {
              enabled: false
            }
          });
        } else {
          console.log(`Skipping dealership ${dealershipName} as the created timestamp does not match the current date.`);
          const dealershipCard = document.querySelector(`[data-dealership="${dealershipName}"]`);
          if (dealershipCard) {
            dealershipCard.style.display = 'none';
          }
        }
      })
      .catch(error => {
        console.error(`Error fetching data from Airtable for ${dealership.name}:`, error);
      });
  }
});

// Helper function to parse the timestamp into a Date object
function parseTimestamp(timestamp) {
  const formats = [
    'M/D/YYYY H:mmA',
    'M/D/YYYY',
    'YYYY-MM-DD',
    // Add more formats if needed
  ];

  for (const format of formats) {
    const parsedDate = new Date(timestamp);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
  }

  return null;
}

// Helper function to check if two dates are the same (ignoring time)
function isSameDate(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}
