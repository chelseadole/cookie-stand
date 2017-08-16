'use strict';

var stores = [];
var timeArray = ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

function storeLocation(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookieDayArr = [];
  this.totalCookies = 0;
  this.dayCookiesTotal = [];
  this.timeArray = ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
  stores.push(this);

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
    }
  };

  this.makeBody = function(){
    var myTable = document.getElementById('createdTable');
    var newRow = document.createElement('tr');
    var firstBodyCell = document.createElement('td');
    firstBodyCell.innerText = this.storeName;
    newRow.appendChild(firstBodyCell);
    for (var a = 0; a < this.timeArray.length; a++) {
      var rowContent = document.createElement('td');
      rowContent.innerText = this.cookieDayArr[a];
      newRow.appendChild(rowContent);
    }
    myTable.appendChild(newRow);
  };
};

var makeHeader = function() {
  var tableLoc = document.getElementById('sales-table');
  var myTable = document.createElement('table');
  myTable.setAttribute('id', 'createdTable');
  tableLoc.appendChild(myTable);

  var headerRow = document.createElement('tr');
  myTable.appendChild(headerRow);

  headerRow.appendChild(document.createElement('td'));

  for (var i = 0; i < (timeArray.length); i++) {
    var headerRowContent = document.createElement('td');
    headerRowContent.innerText = timeArray[i];
    headerRow.appendChild(headerRowContent);
  };
  var lastHeaderCell = document.createElement('td');
  lastHeaderCell.innerText = 'Daily Location Total';
  headerRow.appendChild(lastHeaderCell);
};

var makeFooter = function() {
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

new storeLocation('Pike Place', 23, 65, 6.3);
new storeLocation('SeaTac Airport', 3, 24, 1.2);
new storeLocation('Seattle Center', 11, 38, 3.7);
new storeLocation('Capitol Hill', 20, 38, 2.3);
new storeLocation('Alki', 2, 16, 4.6);

makeHeader();

for (var i = 0; i < stores.length; i++) {
  stores[i].simulatedCookiesDayArray();
  stores[i].makeBody();
}

makeFooter();
