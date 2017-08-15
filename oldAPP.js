


'use strict';

var workingHours = 14;
var storeArray = [pikeLoc, seatacLoc, centerLoc, alkiLoc, capitolLoc];

// PIKE LOCATION
var pikeLoc = {
  storeName: '1st and Pike',
  timeArray: ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookieDayArr: [],
  totalCookies: 0,
  custNumGen: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  },
  simulatedCookiesDayArray: function() {
    this.avgCookies = [];
    this.totalCookies = 0;
    for (var i = 0; i <= this.timeArray.length; i++) {
      var tempTotal = Math.ceil(this.avgCookies * this.custNumGen());
      this.custNumGen();
      this.cookieDayArr.push(tempTotal);
      this.totalCookies += tempTotal;
    }
  },
  dailySalesReport: function() {
    this.simulatedCookiesDayArray();
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerHTML = this.storeName;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    var newUl = document.getElementById('ul');
    for (var i = 0; i <= (timeArray.length); i++) {
      var listItems = document.createElement('li');
      listItems.innerHTML = this.timeArray[i] + this.cookieDayArr[i] + ' cookies';
      newUl.appendChild(listItems);
    };

    var listItems = document.createElement('li');
    totalItems.innerHTML = 'Total: ' + this.totalCookies + ' cookies';
    ul.appendChild(listItems);
  }
};
pikeLoc.dailySalesReport();
//PIKE ENDS

var seatacLoc = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  custNumGen: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  },
  cookieDayArr: [],
  totalCookies: 0,
  simulatedCookiesDayArray: function() {
    for (var i = 0; i <= (workingHours); i++) {
      var tempTotal = this.cookieDayArr.push(Math.round(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies));
      this.totalCookies += this.tempTotal;
    }
  }
};

var centerLoc = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  custNumGen: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  },
  cookieDayArr: [],
  totalCookies: 0,
  simulatedCookiesDayArray: function() {
    for (var i = 0; i <= (workingHours); i++) {
      var tempTotal = this.cookieDayArr.push(Math.round(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies));
      this.totalCookies += this.tempTotal;
    }
  }
};

var capitolLoc = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  custNumGen: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  },
  cookieDayArr: [],
  totalCookies: 0,
  simulatedCookiesDayArray: function() {
    for (var i = 0; i <= (workingHours); i++) {
      var tempTotal = this.cookieDayArr.push(Math.round(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies));
      this.totalCookies += this.tempTotal;
    }
  }
};

var alkiLoc = {
  storeName: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  custNumGen: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  },
  cookieDayArr: [],
  totalCookies: 0,
  simulatedCookiesDayArray: function() {
    for (var i = 0; i <= (workingHours); i++) {
      var tempTotal = this.cookieDayArr.push(Math.round(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies));
      this.totalCookies += this.tempTotal;
    }
  }
};

pikeLoc.simulatedCookiesDayArray();
pikeLoc.custNumGen();
seatacLoc.simulatedCookiesDayArray();
seatacLoc.custNumGen();
centerLoc.simulatedCookiesDayArray();
centerLoc.custNumGen();
capitolLoc.simulatedCookiesDayArray();
capitolLoc.custNumGen();
alkiLoc.simulatedCookiesDayArray();
alkiLoc.custNumGen();
//
// var storeDiv = document.getElementById('stores');
// var pTag = document.createElement('p');
//
// var ul = document.createElement('ul');
// ul.id = 'list';
// storeDiv.appendChild(ul);

// pike location
pikeLoc.custNumGen();
var newUl = document.getElementById('ul');
// ul.innerHTML = pikeLoc.storeName;
// storeDiv.appendChild(pTag);
for (var i = 0; i < (workingHours); i++) {
  var newLi = document.createElement('li');
  newLi.innerHTML = pikeLoc.timeArray[i] + pikeLoc.cookieDayArr[i] + ' cookies';
  newUl.appendChild(newLi);
};

var totalPike = document.createElement('li');
totalPike.innerHTML = 'Total: ' + pikeLoc.totalCookies + ' cookies';
ul.appendChild(totalPike);

// seatac location
ul.innerHTML = seatacLoc.storeName;
storeDiv.appendChild(pTag);
for (var i = 0; i <= (workingHours); i++) {
  var newLi = document.createElement('li');
  newLi.innerHTML = timeArray[i] + seatacLoc.cookieDayArr[i] + ' cookies';
  ul.appendChild(newLi);
};

var totalSeatac = document.createElement('li');
totalSeatac.innerHTML = 'Total: ' + seatacLoc.totalCookies + ' cookies';
ul.appendChild(totalSeatac);

 // center location
ul.innerHTML = centerLoc.storeName;
storeDiv.appendChild(pTag);
for (var i = 0; i <= (workingHours); i++) {
  var newLi = document.createElement('li');
  newLi.innerHTML = timeArray[i] + centerLoc.cookieDayArr[i] + ' cookies';
  ul.appendChild(newLi);
};

var totalCenter = document.createElement('li');
totalCenter.innerHTML = 'Total: ' + centerLoc.totalCookies + ' cookies';
ul.appendChild(totalCenter);

// capitol location
ul.innerHTML = capitolLoc.storeName;
storeDiv.appendChild(pTag);
for (var i = 0; i <= (workingHours); i++) {
  var newLi = document.createElement('li');
  newLi.innerHTML = timeArray[i] + capitolLoc.cookieDayArr[i] + ' cookies';
  ul.appendChild(newLi);
};

var totalCapitol = document.createElement('li');
totalCapitol.innerHTML = 'Total: ' + capitolLoc.totalCookies + ' cookies';
ul.appendChild(totalCapitol);

// alki location
ul.innerHTML = alkiLoc.storeName;
storeDiv.appendChild(pTag);
for (var i = 0; i <= (workingHours); i++) {
  var newLi = document.createElement('li');
  newLi.innerHTML = timeArray[i] + alkiLoc.cookieDayArr[i] + ' cookies';
  ul.appendChild(newLi);
};

var totalAlki = document.createElement('li');
totalAlki.innerHTML = 'Total: ' + alkiLoc.totalCookies + ' cookies';
ul.appendChild(totalAlki);
