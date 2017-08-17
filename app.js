'use strict';

var stores = [];
var timeArray = ['6:00am ', '7:00am ', '8:00am ','9:00am ', '10:00am ', '11:00am ', '12:00pm ', '1:00pm ', '2:00pm ', '3:00pm ', '4:00pm ', '5:00pm ', '6:00pm ', '7:00pm '];
var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

function StoreLocation(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookieDayArr = [];
  this.storeTotalCookies = 0;
  this.hourlyTotals = [];
  this.timeArray = ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
  stores.push(this);

  this.custNumGen = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  };

  this.simulatedCookiesDayArray = function() {
    this.cookieDayArr = [];
    this.storeTotalCookies = 0;
    for (var i = 0; i < this.timeArray.length; i++) {
      var tempTotal = Math.ceil(this.avgCookies * this.custNumGen());
      this.cookieDayArr.push(tempTotal);
      this.storeTotalCookies += tempTotal;
      this.instanceCookieTotal += tempTotal;
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
    var lastBodyCell = document.createElement('td');
    lastBodyCell.innerText = this.storeTotalCookies;
    newRow.appendChild(lastBodyCell);
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
  var allCookiesEver = 0;

  var myTable = document.getElementById('createdTable');
  var footerRow = document.createElement('tr');
  footerRow.id = 'finalRow';
  myTable.appendChild(footerRow);

  var firstFooterCell = document.createElement('td');
  firstFooterCell.innerText = 'Totals';
  footerRow.appendChild(firstFooterCell);

  // for (var hour = 0; hour < timeArray.length; hour++) {
  //   var total = 0;
  //   for (var s = 0; s < stores.length; s++) {
  //     total += stores[s].simulatedCookiesDayArray.storeTotalCookies;
  //   }
  //   var totalCel = createElement('td');
  //   totalCel.innerText = total;
  //   allCookiesEver += total;
  //   footerRow.appendChild(totalCel);
  // }
  var rightCel = document.createElement('td');
  rightCel.innerText = allCookiesEver;
  footerRow.appendChild(rightCel);
};
//
//   for (var i = 0; i < (timeArray.length); i++) {
//     var footerRowContent = document.createElement('td');
//   };
// };

new StoreLocation('Pike Place', 23, 65, 6.3);
new StoreLocation('SeaTac Airport', 3, 24, 1.2);
new StoreLocation('Seattle Center', 11, 38, 3.7);
new StoreLocation('Capitol Hill', 20, 38, 2.3);
new StoreLocation('Alki', 2, 16, 4.6);

makeHeader();

for (var i = 0; i < stores.length; i++) {
  stores[i].simulatedCookiesDayArray();
  stores[i].makeBody();
}

makeFooter();

function addNewStore (event) {
  event.preventDefault();
  var newestStore = new StoreLocation();
  newestStore.storeName = this.elements['storeName'].value;
  newestStore.minCust = parseInt(this.elements['minCust'].value);
  newestStore.maxCust = parseInt(this.elements['maxCust'].value);
  newestStore.avgCookies = parseFloat(this.elements['avgCust'].value);
  newestStore.simulatedCookiesDayArray();
  var rowToDelete = document.getElementById('finalRow').remove();
  newestStore.makeBody();
  makeFooter();
  this.reset();
};

var submit = document.getElementById('form');
submit.addEventListener('submit', addNewStore);
