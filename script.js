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

fetch('https://gist.githubusercontent.com/geomodi/6060b8f6170ce8872f6364648d0f72e7/raw/dealerships.json')
  .then(response => response.json())
  .then(data => {
    const dealershipContainer = document.getElementById('dealership-container');

    // Sort the dealership data alphabetically by name
    data.sort((a, b) => a.name.localeCompare(b.name));

    // Merge the data from the dealerships array and the dealerships.json file
    const mergedDealerships = data.map(dealership => {
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
  })
  .catch(error => {
    console.error('Error fetching dealership data:', error);
  });
