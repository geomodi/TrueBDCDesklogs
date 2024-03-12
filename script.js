const apiKey = 'patxcpcKWfTvBpTcn.183e8045edeb5d576c7aadbc728ca17c2082c9f81041b979f5bb9330f5801d56';
const baseId = 'appY7LOZGe1DoKhSx';
const tableName = 'Dealership Appts';

const dealerships = [
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
  { name: 'Mike Reichenbach Ford', recordId: 'recfGY4KkrBwFrrls' },
  { name: 'Mike Reichenbach Volkswagen', recordId: 'recEaew4ParBM7xEH' },
  { name: 'Nissan of Hendersonville', recordId: 'receEsOAvLrsvV4We' },
  { name: 'Nissan of Orangeburg', recordId: 'recf2uJQMgUxfbpOj' },
  { name: 'Nissan of Richmond', recordId: 'reci4vBMhTvIG1zUY' },
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
// ... (remaining code remains the same)

$(document).ready(function() {
  dealerships.forEach(function(dealership) {
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}/${dealership.recordId}`;

    // Fetch data from Airtable for the specific record
    $.ajax({
      url: apiUrl,
      headers: {
        'Authorization': 'Bearer ' + apiKey
      },
      success: function(data) {
        console.log(`Data fetched from Airtable for ${dealership.name}:`, data); // Check if the data is being fetched correctly

        const record = data.fields;
        const dealershipName = record['Dealership'] || '';
        console.log('Dealership:', dealershipName); // Check if the dealership name is being extracted correctly

        const confirmed = parseInt(record['Confirmed']) || 0;
        const shown = parseInt(record['Shown']) || 0;
        const missed = parseInt(record['Missed']) || 0;
        const overdue = parseInt(record['Overdue']) || 0;
        const apptsToday = parseInt(record['Appointments for Today']) || 0;
        const apptsTomorrow = parseInt(record['Appointments for Tomorrow']) || 0;
        const appts3rdDay = parseInt(record['3rd Day Appointments']) || 0;

        // Populate the table for the dealership
        const tableId = `${dealership.name.replace(/\s+/g, '-').toLowerCase()}-table`;
        console.log('Table ID:', tableId); // Check if the table ID is being generated correctly

        const tableBody = `
          <tr>
            <td>${confirmed}</td>
            <td>${shown}</td>
            <td>${missed}</td>
            <td>${overdue}</td>
            <td>${apptsToday}</td>
            <td>${apptsTomorrow}</td>
            <td>${appts3rdDay}</td>
          </tr>
        `;
        $(`#${tableId}`).find('tbody').append(tableBody);

        // Initialize DataTables for the dealership table
        $(`#${tableId}`).DataTable({
          paging: false,
          searching: false,
          info: false
        });
  
        // Create Highcharts chart for the dealership
        const chartId = `${dealership.name.replace(/\s+/g, '-').toLowerCase()}-chart`;
        console.log('Chart ID:', chartId); // Check if the chart ID is being generated correctly
        
        Highcharts.chart(chartId, {
          chart: {
            type: 'bar'
          },
          title: {
            text: `${dealershipName}`
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
      },
      error: function(error) {
        console.error(`Error fetching data from Airtable for ${dealership.name}:`, error); // Check if there are any errors in the API request
      }
    });
  });
});