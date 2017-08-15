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

// SEATAC LOCATION
var seatacLoc = {
  storeName: 'SeaTac Airport',
  timeArray: ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
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
seatacLoc.dailySalesReport();
//SEATAC ENDS

// CENTER LOCATION
var centerLoc = {
  storeName: 'Seattle Center',
  timeArray: ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  minCust: 11,
  maxCust: 38 ,
  avgCookies: 3.7,
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
centerLoc.dailySalesReport();
//PIKE ENDS

// CAPITOL HILL LOCATION
var capitolLoc = {
  storeName: 'Capitol Hill',
  timeArray: ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
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
capitolLoc.dailySalesReport();
//PIKE ENDS

// ALKI LOCATION
var alkiLoc = {
  storeName: 'Alki',
  timeArray: ['6am: ', '7am: ', '8am: ','9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
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
alkiLoc.dailySalesReport();
//PIKE ENDS
