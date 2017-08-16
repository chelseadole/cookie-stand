'use strict';

function storeLocation(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookieDayArr = [];
  this.totalCookies = 0;
  this.timeArray = ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
  this.storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

  this.custNumGen = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  };

  this.simulatedCookiesDayArray = function() {
    this.cookieDayArr = [];
    this.totalCookies = 0;
    for (var i = 0; i < this.timeArray.length; i++) {
      var tempTotal = Math.ceil(this.avgCookies * this.custNumGen());
      this.cookieDayArr.push(tempTotal);
      this.totalCookies += tempTotal;
      console.log('this is cookie day array' + this.cookieDayArr);
    }
  };
  //
  // makeHeader = function() {
  //   var tableLoc = document.getElementById('sales-table');
  //   var myTable = document.createElement('table');
  //   myTable.setAttribute('id', 'createdTable');
  //   tableLoc.appendChild(myTable);
  //
  //   var headerRow = document.createElement('tr');
  //   myTable.appendChild(headerRow);
  //
  //   headerRow.appendChild(document.createElement('td'));
  //
  //   for (var i = 0; i <= (this.timeArray.length); i++) {
  //     var headerRowContent = document.createElement('td');
  //     headerRowContent.innerText = this.timeArray[i];
  //     headerRow.appendChild(headerRowContent);
  //   };
  // };

  this.makeBody = function(){
    for (var i = 0; i < this.storeNames.length; i++) {
      var myTable = document.getElementById('createdTable');
      var newRow = document.createElement('tr');
      myTable.appendChild(newRow);
      var firstBodyCell = document.createElement('td');
      firstBodyCell.innerText = this.storeNames[i];
      newRow.appendChild(firstBodyCell);
      for (var a = 0; a < this.timeArray.length; a++) {
        var rowContent = document.createElement('td');
        rowContent.innerText = this.cookieDayArr[a];
        newRow.appendChild(rowContent);
      }
    }
  };
  //
  // this.makeFooter = function(){
  //   var myTable = document.getElementById('createdTable');
  //   var footerRow = document.createElement('tr');
  //   myTable.appendChild(footerRow);
  //
  //   var firstFooterCell = document.createElement('td');
  //   firstFooterCell.innerText = 'Totals';
  //   footerRow.appendChild(firstFooterCell);
  //
  //   for (var i = 0; i < (this.timeArray.length); i++) {
  //     var footerRowContent = document.createElement('td');
  //     footerRowContent.innerText = this.totalCookies[i];
  //     footerRow.appendChild(footerRowContent);
  //   };
  // };
};

var timeArray = ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];


var makeHeader = function() {

  var tableLoc = document.getElementById('sales-table');
  var myTable = document.createElement('table');
  myTable.setAttribute('id', 'createdTable');
  tableLoc.appendChild(myTable);

  var headerRow = document.createElement('tr');
  myTable.appendChild(headerRow);

  headerRow.appendChild(document.createElement('td'));

  for (var i = 0; i <= (timeArray.length); i++) {
    var headerRowContent = document.createElement('td');
    headerRowContent.innerText = timeArray[i];
    headerRow.appendChild(headerRowContent);
  };
};

function makeFooter() {
  var totalCookies = 0;
  var myTable = document.getElementById('createdTable');
  var footerRow = document.createElement('tr');
  myTable.appendChild(footerRow);

  var firstFooterCell = document.createElement('td');
  firstFooterCell.innerText = 'Totals';
  footerRow.appendChild(firstFooterCell);

  for (var i = 0; i < (timeArray.length); i++) {
    var footerRowContent = document.createElement('td');
    footerRowContent.innerText = totalCookies[i];
    footerRow.appendChild(footerRowContent);
  };
};
    //PUT CODE HERE TO ATTACH THIS FOOTER TO THE LAST ROW OF GEN DATA

  //   var footerRow = document.createElement('tr');
  //   myTable.appendChild()
  //   var totalCell = document.createElement('tr');
  //   totalCell.innerText = "Totals";
  //   footerRow.appendChild(totalCell);
  //
  //   for (i = 0; i <= (this.timeArray.length); i++) {
  //     footerRowContent = document.createElement('td');
  //     // footerRowContent.innerText = // CODE TO COUNT DAY TOTALS BY LOCATION;
  //   };
  // };

  // below is old data

//   this.dailySalesReport = function () {
//     this.simulatedCookiesDayArray();
//     var salesSection = document.getElementById('sales-section');
//     var salesSectionName = document.createElement('h2');
//     salesSectionName.innerHTML = this.storeName;
//     salesSection.appendChild(salesSectionName);
//
//     var list = document.createElement('ul');
//     salesSection.appendChild(list);
//
//     for (var i = 0; i < (this.timeArray.length); i++) {
//       var listItems = document.createElement('li');
//       listItems.innerHTML = this.timeArray[i] + this.cookieDayArr[i] + ' cookies';
//       list.appendChild(listItems);
//     };
//     var totalList = document.createElement('li');
//     totalList.innerText = 'Total: ' + this.totalCookies + ' cookies';
//     list.appendChild(totalList);
//   };
// };

var pike = new storeLocation('Pike Place', 23, 65, 6.3);
var seatac = new storeLocation('SeaTac Airport', 3, 24, 1.2);
var center = new storeLocation('Seattle Center', 11, 38, 3.7);
var capitol = new storeLocation('Capitol Hill', 20, 38, 2.3);
var alki = new storeLocation('Alki', 2, 16, 4.6);
//
// pike.dailySalesReport();
// seatac.dailySalesReport();
// center.dailySalesReport();
// capitol.dailySalesReport();
// alki.dailySalesReport();


makeHeader();
for (var i = 0; i <= )
makeFooter();
