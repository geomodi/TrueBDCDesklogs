const apiKey = 'patxcpcKWfTvBpTcn.183e8045edeb5d576c7aadbc728ca17c2082c9f81041b979f5bb9330f5801d56';
const baseId = 'appY7LOZGe1DoKhSx';
const tableName = 'Dealership Appts';

const dealerships = [
  { name: 'Benson Hyundai', recordId: 'recUFsOZStjjMzyv1' },
  { name: 'Benton Nissan of Columbia', recordId: 'recq1Lb3kjH753BUl' },
  { name: 'Betten Baker Buick GMC', recordId: 'recjC2pyAQokLn6d2' },
  { name: 'Cronic CDJR', recordId: 'rec6OKhBfVsVaWgSy' },
  { name: 'Cronic Nissan', recordId: 'rec1qkMYFMeDZ8YjA' },
  { name: 'Dena Motors', recordId: 'recBCiZTCSCOkB9a4' },
  { name: 'Ford of Fayetteville', recordId: 'recEdfMqPzpkWPTyv' },
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
  { name: 'Rusty Wallace Kia', recordId: 'rec9ZeVVkv5foEIP5' },
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
    "chartId": "benson-hyundai-chart"
  },
  {
    "name": "Benton Nissan of Columbia",
    "logo": "https://github.com/geomodi/stuff/blob/main/Benton%20Nissan%20of%20ColumbiaR.png?raw=true",
    "chartId": "benton-nissan-of-columbia-chart"
  },
  {
    "name": "Betten Baker Buick GMC",
    "logo": "https://github.com/geomodi/stuff/blob/main/Betten%20Baker%20Buick%20GMC%20Rounded.png?raw=true",
    "chartId": "betten-baker-buick-gmc-chart"
  },
  {
    "name": "Cronic CDJR",
    "logo": "https://github.com/geomodi/stuff/blob/main/Cronic%20CDJR%20Rounded.png?raw=true",
    "chartId": "cronic-cdjr-chart"
  },
  {
    "name": "Cronic Nissan",
    "logo": "https://github.com/geomodi/stuff/blob/main/Cronic%20Nissan%20Rounded.png?raw=true",
    "chartId": "cronic-nissan-chart"
  },
  {
    "name": "Dena Motors",
    "logo": "https://github.com/geomodi/stuff/blob/main/Dena%20Motros%20Rounded.png?raw=true",
    "chartId": "dena-motors-chart"
  },
  {
    "name": "Ford of Fayetteville",
    "logo": "https://github.com/geomodi/stuff/blob/main/Ford%20of%20Fayetteville%20Rounded.png?raw=true",
    "chartId": "ford-of-fayetteville-chart"
  },
  {
    "name": "Frankfort Ford Lincoln",
    "logo": "https://github.com/geomodi/stuff/blob/main/Frankfort%20Ford%20Lincoln%20Rounded.png?raw=true",
    "chartId": "frankfort-ford-lincoln-chart"
  },
  {
    "name": "Granbury Nissan",
    "logo": "https://github.com/geomodi/stuff/blob/main/Granbury%20Nissan%20Rounded.png?raw=true",
    "chartId": "granbury-nissan-chart"
  },
  {
    "name": "Hutchinson Kia of Albany",
    "logo": "https://github.com/geomodi/stuff/blob/main/Hutchinson%20Kia%20of%20Albany%20Rounded.png?raw=true",
    "chartId": "hutchinson-kia-of-albany-chart"
  },
  {
    "name": "Hutchinson Kia of Macon",
    "logo": "https://github.com/geomodi/stuff/blob/main/Hutchinon%20Kia%20of%20Macon%20Rounded.png?raw=true",
    "chartId": "hutchinson-kia-of-macon-chart"
  },
  {
    "name": "Keffer Volkswagen",
    "logo": "https://github.com/geomodi/stuff/blob/main/Keffer%20Volkswagen%20Rounded.png?raw=true",
    "chartId": "keffer-volkswagen-chart"
  },
  {
    "name": "Lehman Hyundai Genesis",
    "logo": "https://github.com/geomodi/stuff/blob/main/Lehman%20Hyundai%20Genesis%20Rounded.png?raw=true",
    "chartId": "lehman-hyundai-genesis-chart"
  },
  {
    "name": "Lou Bachrodt Chevrolet",
    "logo": "https://github.com/geomodi/stuff/blob/main/Lou%20Bachrodt%20Chevrolet%20Rounded.png?raw=true",
    "chartId": "lou-bachrodt-chevrolet-chart"
  },
  {
    "name": "McClinton Chevrolet Mitsubishi",
    "logo": "https://github.com/geomodi/stuff/blob/main/McClinton%20Chevrolet%20Mitsubishi%20Rounded.png?raw=true",
    "chartId": "mcclinton-chevrolet-mitsubishi-chart"
  },
  {
    "name": "Mike Reichenbach Ford",
    "logo": "https://github.com/geomodi/stuff/blob/main/Mike%20Reichenbach%20Ford%20Lincoln%20Rounded.png?raw=true",
    "chartId": "mike-reichenbach-ford-chart"
  },
  {
    "name": "Mike Reichenbach Volkswagen",
    "logo": "https://github.com/geomodi/stuff/blob/main/Mike%20Reichenbach%20Volkswagen%20Rounded.png?raw=true",
    "chartId": "mike-reichenbach-volkswagen-chart"
  },
  {
    "name": "Mike Terry Chevrolet GMC",
    "logo": "https://github.com/geomodi/stuff/blob/main/Mike%20Terry%20Chevrolet%20Rounded.png?raw=true",
    "chartId": "mike-terry-chevrolet-gmc-chart"
  },
  {
    "name": "Mike Terry Ford",
    "logo": "https://github.com/geomodi/stuff/blob/main/Mike%20Terry%20Ford%20Rounded.png?raw=true",
    "chartId": "mike-terry-ford-chart"
  },
  {
    "name": "Nissan of Hendersonville",
    "logo": "https://github.com/geomodi/stuff/blob/main/Nissan%20of%20Hendersonville%20Rounded.png?raw=true",
    "chartId": "nissan-of-hendersonville-chart"
  },
  {
    "name": "Nissan of Orangeburg",
    "logo": "https://github.com/geomodi/stuff/blob/main/Nissan%20of%20Orangeburg%20Rounded.png?raw=true",
    "chartId": "nissan-of-orangeburg-chart"
  },
  {
    "name": "Nissan of Richmond",
    "logo": "https://github.com/geomodi/stuff/blob/main/Nissan%20of%20Richmond%20Rounded.png?raw=true",
    "chartId": "nissan-of-richmond-chart"
  },
  {
    "name": "Rusty Wallace Kia",
    "logo": "https://github.com/geomodi/stuff/blob/main/Rusty%20Wallace%20Kia%20Alcoa%20Rounded.png?raw=true",
    "chartId": "rusty-wallace-kia-chart"
  },
  {
    "name": "Rockhill Nissan",
    "logo": "https://github.com/geomodi/stuff/blob/main/Rockhill%20Nissan%20Rounded.png?raw=true",
    "chartId": "rockhill-nissan-chart"
  },
  {
    "name": "Santee CDJR",
    "logo": "https://github.com/geomodi/stuff/blob/main/Santee%20CDJR%20Rounded.png?raw=true",
    "chartId": "santee-cdjr-chart"
  },
  {
    "name": "Santee Ford",
    "logo": "https://github.com/geomodi/stuff/blob/main/Santee%20Ford%20Rounded.png?raw=true",
    "chartId": "santee-ford-chart"
  },
  {
    "name": "Springfield Hyundai",
    "logo": "https://github.com/geomodi/stuff/blob/main/Springfield%20Hyundai%20Rounded.png?raw=true",
    "chartId": "springfield-hyundai-chart"
  },
  {
    "name": "Subaru of North Miami",
    "logo": "https://github.com/geomodi/stuff/blob/main/Subaru%20of%20North%20Miami%20Rounded.png?raw=true",
    "chartId": "subaru-of-north-miami-chart"
  },
  {
    "name": "Summerville Ford",
    "logo": "https://github.com/geomodi/stuff/blob/main/Summerville%20Ford%20Rounded.png?raw=true",
    "chartId": "summerville-ford-chart"
  },
  {
    "name": "Tenneson Nissan",
    "logo": "https://github.com/geomodi/stuff/blob/main/Tenneson%20Nissan%20Rounded.png?raw=true",
    "chartId": "tenneson-nissan-chart"
  },
  {
    "name": "Terry Cullen Southlake Chevrolet",
    "logo": "https://github.com/geomodi/stuff/blob/main/Terry%20Cullen%20Southlake%20Chevrolet%20Rounded.png?raw=true",
    "chartId": "terry-cullen-southlake-chevrolet-chart"
  },
  {
    "name": "Vero Beach Mitsubishi",
    "logo": "https://github.com/geomodi/stuff/blob/main/Vero%20Beach%20Mitsubishi%20Rounded.png?raw=true",
    "chartId": "vero-beach-mitsubishi-chart"
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
const dealershipCardsHTML = mergedDealerships.map(dealership => `
  <div class="dealership-card">
    <div class="logo-container">
      <img src="${dealership.logo}" alt="${dealership.name}" class="dealership-logo">
    </div>
    <div id="${dealership.chartId}" class="chart"></div>
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
      location.reload(); // Refresh the page
    }
  }, 1000);
}

startTimer(15 * 60); // Start a 15-minute countdown

function updateRefreshInfo() {
  const lastRefreshed = new Date().toLocaleTimeString();
  const totalDealerships = document.querySelectorAll('.dealership-card').length;
  document.getElementById('refresh-info').textContent = `Last refreshed: ${lastRefreshed} | Total dealerships: ${totalDealerships}`;
}

function initializeFilter() {
  const filterInput = document.getElementById('filter-input');
  filterInput.addEventListener('input', () => {
    const filterValue = filterInput.value.toLowerCase();
    const dealershipCards = document.querySelectorAll('.dealership-card');

    dealershipCards.forEach(card => {
      const dealershipName = card.querySelector('.logo-container img').alt.toLowerCase();
      if (dealershipName.includes(filterValue)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
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
  })
  .catch(error => {
    console.error(`Error fetching data from Airtable for ${dealership.name}:`, error);
  });
}
});
