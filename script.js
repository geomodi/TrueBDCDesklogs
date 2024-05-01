const baseId = 'appexR9tFKGHjSWNE';
const tableName = 'Unified Desklogs';
const apiKey = 'patvDa3N84MeSmPqS.bea18731fee485325ba61b363719bf9188151c9932245d8f43e7cc56c645fdf2'; // Replace this with your new personal access token
const apiUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;
const dealerships = [{
        name: 'BMW Mini of Sterling',
        recordId: 'reckhahIaMFkC24ho'
    },
    {
        name: 'Downtown Auto Center',
        recordId: 'recra7hD0foljBuDA'
    },
    {
        name: 'Downtown Subaru',
        recordId: 'recFRlYkyKEsRYcsz'
    },
    {
        name: 'Downtown Toyota',
        recordId: 'recTWjCIT5HIKXqY9'
    },
    {
        name: 'Downtown Used',
        recordId: 'recA984Aij5t1y4Y2'
    },
    {
        name: 'Priority Toyota',
        recordId: 'rechlRzCiPxagTvv1'
    },
    {
        name: 'Antelope Valley Chevrolet',
        recordId: 'recqH4Xb1vBs8DH2j'
    },
    {
        name: 'Glendale Nissan',
        recordId: 'recBqsmzIvsVpi8ct'
    }
];
const dealershipsData = [{
        "name": "BMW Mini of Sterling",
        "logo": "https://github.com/geomodi/stuff/blob/main/BMW%20Mini%20of%20Sterling%20(rounded).png?raw=true",
        "chartId": "bmw-mini-of-sterling-chart",
        "crm": "eLeads",
        "crmLogo": "https://github.com/geomodi/stuff/blob/main/eleads.png?raw=true"
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
        "name": "Priority Toyota",
        "logo": "https://github.com/geomodi/stuff/blob/main/Priority%20Toyota%20(rounded).png?raw=true",
        "chartId": "priority-toyota-chart",
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
    let timer = duration,
        minutes, seconds;
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
            const trueBDCToday = parseInt(record['TrueBDC Today']) || 0;
            const internet = parseInt(record['Internet']) || 0;
            const remainingToday = parseInt(record['Remaining Today']) || 0;
            const shownPercentage = record['Shown Percentage'] || '0%'; // Get the 'Shown Percentage' value
    
            // Create Highcharts chart for the dealership
            const chartId = `${dealership.name.replace(/\s+/g, '-').toLowerCase()}-chart`;
            console.log('Chart ID:', chartId);
            const shownPercentageNumber = parseFloat(shownPercentage);
            Highcharts.chart(chartId, {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: `${dealershipName}`,
                        style: {
                            fontFamily: 'Poppins',
                            fontWeight: 'normal'
                        }
                    },
                    xAxis: {
                        categories: ['Confirmed', 'Shown', 'Missed', 'Overdue', 'Today', 'Tomorrow', '3rd Day', 'TrueBDC Today', 'Internet', 'Remaining Today', 'Shown Percentage'], // Add "Shown Percentage" to the categories array
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
                      data: [confirmed, shown, missed, overdue, apptsToday, apptsTomorrow, appts3rdDay, trueBDCToday, internet, remainingToday, shownPercentageNumber] // Use the 'shownPercentage' value directly
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

function updateAirtableInfoTable() {
    // Fetch all records from the Airtable table
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;
    fetch(apiUrl, {
            headers: {
                'Authorization': 'Bearer ' + apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            // Transform the records into a format suitable for DataTables
            const tableData = data.records.map(record => ({
                dealership: record.fields['Dealership'] || 'N/A',
                confirmed: record.fields['Confirmed'] || 0,
                shown: record.fields['Shown'] || 0,
                missed: record.fields['Missed'] || 0,
                overdue: record.fields['Overdue'] || 0,
                internet: record.fields['Internet'] || 0,
                remainingToday: record.fields['Remaining Today'] || 0,
                trueBDCToday: record.fields['TrueBDC Today'] || 0,
                shownPercentage: record.fields['Shown Percentage'] || '0%',
                today: record.fields['Appointments for Today'] || 0, // Add the "Appointments for Today" column
                tomorrow: record.fields['Appointments for Tomorrow'] || 0, // Add the "Appointments for Tomorrow" column
                thirdDay: record.fields['3rd Day Appointments'] || 0 // Add the "3rd Day Appointments" column
            }));
            // Initialize or update DataTable
            if ($.fn.DataTable.isDataTable('#airtable-info-table')) {
                var table = $('#airtable-info-table').DataTable();
                table.clear();
                table.rows.add(tableData);
                table.draw();
            } else {
                $('#airtable-info-table').DataTable({
                    data: tableData,
                    columns: [{
                            title: "Dealership",
                            data: "dealership"
                        },
                        {
                            title: "Confirmed",
                            data: "confirmed"
                        },
                        {
                            title: "Shown",
                            data: "shown"
                        },
                        {
                            title: "Missed",
                            data: "missed"
                        },
                        {
                            title: "Overdue",
                            data: "overdue"
                        },
                        {
                            title: "Internet",
                            data: "internet"
                        },
                        {
                            title: "Today",
                            data: "today"
                        }, // Add the "Today" column
                        {
                            title: "Tomorrow",
                            data: "tomorrow"
                        }, // Add the "Tomorrow" column
                        {
                            title: "3rd Day",
                            data: "thirdDay"
                        }, // Add the "3rd Day" column
                        {
                            title: "Remaining Today",
                            data: "remainingToday"
                        },
                        {
                            title: "TrueBDC Today",
                            data: "trueBDCToday"
                        },
                        {
                            title: "Shown Percentage",
                            data: "shownPercentage"
                        }
                    ]
                });
            }
        })
        .catch(error => console.error('Error loading the data:', error));
}
// Call this function to populate the table
updateAirtableInfoTable();
window.addEventListener('load', () => {
    updateRefreshInfo(); // Update the refresh information after page refresh
    document.getElementById('generateReport').addEventListener('click', generateReport);
});

function generateReport() {
    // Create a new PDF document
    const doc = new jsPDF();
    // Function to fetch data from Airtable for a single dealership
    const fetchDealershipData = (dealership) => {
        const {
            name,
            recordId
        } = dealership;
        const apiUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}/${recordId}`;
        return fetch(apiUrl, {
                headers: {
                    'Authorization': 'Bearer ' + apiKey
                }
            })
            .then(response => response.json())
            .then(data => {
                const record = data.fields;
                return {
                    name: record['Dealership'] || '',
                    confirmed: parseInt(record['Confirmed']) || 0,
                    shown: parseInt(record['Shown']) || 0,
                    missed: parseInt(record['Missed']) || 0,
                    overdue: parseInt(record['Overdue']) || 0,
                    apptsToday: parseInt(record['Appointments for Today']) || 0,
                    apptsTomorrow: parseInt(record['Appointments for Tomorrow']) || 0,
                    appts3rdDay: parseInt(record['3rd Day Appointments']) || 0,
                    trueBDCToday: parseInt(record['TrueBDC Today']) || 0,
                    internet: parseInt(record['Internet']) || 0,
                    remainingToday: parseInt(record['Remaining Today']) || 0,
                    shownPercentage: record['Shown Percentage'] || '0%'
                };
            })
            .catch(error => {
                console.error(`Error fetching data from Airtable for ${dealership.name}:`, error);
                return null;
            });
    };
    // Fetch data for all dealerships using Promise.all
    Promise.all(mergedDealerships.map(fetchDealershipData))
        .then(dealershipReportData => {
            // Filter out null values (in case of errors)
            const validData = dealershipReportData.filter(data => data !== null);
            // Generate the PDF report
            generatePDF(doc, validData);
        })
        .catch(error => {
            console.error('Error fetching data from Airtable:', error);
        });
}
function updateVinSoInfoTable() {
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent('VinSo Desklog')}`;
    fetch(apiUrl, {
        headers: {
            'Authorization': 'Bearer ' + apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const tableData = data.records.map(record => {
            const fields = record.fields;
            return {
                name: fields && fields['Name'] ? fields['Name'] : 'N/A',
                inbounds: fields && fields['Inbounds'] ? fields['Inbounds'] : 0,
                outbounds: fields && fields['Outbounds'] ? fields['Outbounds'] : 0,
                texts: fields && fields['Texts'] ? fields['Texts'] : 0,
                emails: fields && fields['Emails'] ? fields['Emails'] : 0,
                dueTasks: fields && fields['DueTasks'] ? fields['DueTasks'] : 0,
                overDue: fields && fields['OverDue'] ? fields['OverDue'] : 0,
                sold: fields && fields['Sold'] ? fields['Sold'] : 0,
                updated: fields && fields['Updated'] ? fields['Updated'] : 'N/A'
            };
        });

        $('#vinso-info-table').DataTable({
            data: tableData,
            columns: [
                { title: "Name", data: "name" },
                { title: "Inbounds", data: "inbounds" },
                { title: "Outbounds", data: "outbounds" },
                { title: "Texts", data: "texts" },
                { title: "Emails", data: "emails" },
                { title: "Due Tasks", data: "dueTasks" },
                { title: "Overdue", data: "overDue" },
                { title: "Sold", data: "sold" }
            ],
            destroy: true
        });
    })
    .catch(error => console.error('Error loading VinSo data:', error));
}
function generatePDF(doc, dealershipReportData) {
  const pageHeight = doc.internal.pageSize.height;
  const lineHeight = 12;
  let currentY = 20;

  dealershipReportData.forEach((dealershipData, index) => {
    // Add the dealership data to the PDF document
    doc.setFontSize(12);

    // Check if there's enough space on the current page for this dealership's data
    const dataHeight = 12 * lineHeight; // Updated to 12 lines to accommodate the new "Shown Percentage" data
    if (currentY + dataHeight >= pageHeight - 20) {
      doc.addPage();
      currentY = 20;
    }

    doc.text(`Dealership: ${dealershipData.name}`, 20, currentY);
    currentY += lineHeight;
    doc.text(`Confirmed: ${dealershipData.confirmed}`, 20, currentY);
    currentY += lineHeight;
    doc.text(`Shown: ${dealershipData.shown}`, 20, currentY);
    currentY += lineHeight;
    doc.text(`Shown Percentage: ${dealershipData.shownPercentage}`, 20, currentY); // Add this line to include the "Shown Percentage" data
    currentY += lineHeight;
    doc.text(`Missed: ${dealershipData.missed}`, 20, currentY);
    currentY += lineHeight;
    doc.text(`Overdue: ${dealershipData.overdue}`, 20, currentY);
    currentY += lineHeight;
    doc.text(`Appointments for Today: ${dealershipData.apptsToday}`, 20, currentY);
    currentY += lineHeight;
    doc.text(`Appointments for Tomorrow: ${dealershipData.apptsTomorrow}`, 20, currentY);
    currentY += lineHeight;
    doc.text(`3rd Day Appointments: ${dealershipData.appts3rdDay}`, 20, currentY);
    currentY += lineHeight;
    doc.text(`TrueBDC Today: ${dealershipData.trueBDCToday}`, 20, currentY);
    currentY += lineHeight;
    doc.text(`Internet: ${dealershipData.internet}`, 20, currentY);
    currentY += lineHeight;
    doc.text(`Shown Percentage: ${dealershipData.shownPercentage}`, 20, currentY);
    currentY += lineHeight;

    currentY += lineHeight;
  });

  // Save the PDF after all dealership data has been added
doc.save('report.pdf');
}

document.getElementById('download-xlsx').addEventListener('click', function() {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.table_to_sheet(document.getElementById('airtable-info-table'));
    XLSX.utils.book_append_sheet(workbook, worksheet, "TableData");
    XLSX.writeFile(workbook, 'table.xlsx');
});

updateVinSoInfoTable();
