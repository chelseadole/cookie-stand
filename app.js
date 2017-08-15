'use strict';

var workingHours = 14;
var storeArray = [pikeLoc, seatacLoc, centerLoc, alkiLoc, capitolLoc];
var timeArray = ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var pikeLoc = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
  },
  cookiesDayArr: [],
  storeTotal: 0,
  simulatedCookiesDayArray: function(minCust, maxCust, avgCookies) {
    for (var i = 0; i <= (workingHours - 1); i++) {
      var tempTotal = this.cookieDayArr.push(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies);
      storeTotal += tempTotal;
    }
  }
};

var seatacLoc = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
  },
  cookieDayArr: [],
  storeTotal: 0,
  simulatedCookiesDayArray: function(minCust, maxCust, avgCookies) {
    for (var i = 0; i <= (workingHours - 1); i++) {
      var tempTotal = this.cookieDayArr.push(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies);
      storeTotal += tempTotal;
    }
  }
};

var centerLoc = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
  },
  cookieDayArr: [],
  storeTotal: 0,
  simulatedCookiesDayArray: function(minCust, maxCust, avgCookies) {
    for (var i = 0; i <= (workingHours - 1); i++) {
      var tempTotal = this.cookieDayArr.push(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies);
      storeTotal += tempTotal;
    }
  }
};

var capitolLoc = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
  },
  cookieDayArr: [],
  storeTotal: 0,
  simulatedCookiesDayArray: function(minCust, maxCust, avgCookies) {
    for (var i = 0; i <= (workingHours - 1); i++) {
      var tempTotal = this.cookieDayArr.push(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies);
      storeTotal+=tempTotal;
    }
  }
};

var alkiLoc = {
  storeName: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
  },
  cookieDayArr: [],
  storeTotal: 0,
  simulatedCookiesDayArray: function(minCust, maxCust, avgCookies) {
    for (var i = 0; i <= (workingHours - 1); i++) {
      var tempTotal = this.cookieDayArr.push(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies);
      storeTotal += tempTotal;
    }
  }
};

var storeDiv = document.getElementById('stores');
var pTag = document.createElement('p');

var ul = document.createElement('ul');
ul.id = 'list';
storeDiv.appendChild(ul);

// pike stuff
pTag.innerHTML = pikeLoc.storeName;
ul.appendChild(pTag);

for (var i = 0; i <= (workingHours - 1); i++) {
  var newLi = document.createElement('li');
  newLi.innerHTML = timeArray[i] + this.cookieDayArr[i] + ' cookies';
  pTag.appendChild(li);
};

// document.createElement('p');
// var pikePElement = document.createElement('p');
// pikePElement.innerText = '1st and Pike';
//
// document.createElement('li');
// var pikeListItem = document.createElement('li');
// pikeListItem.innerText =
//
// document.createElement('ul');
// for (var i = 0; i <= (workingHours - 1); i++) {
//   document.createElement('li');
//
//
