'use strict';

var workingHours = 14;

var pikeLoc = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
  },
  pikeCookiesDayArr: [],
  storeTotal: 0,
  simulatedCookiesDayArray: function(minCust, maxCust, avgCookies) {
    for (var i = 0; i <= (workingHours - 1); i++) {
      this.pikeCookieDayArr.push(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies);
    }
  }
};

var seatacLoc = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
  },
  seatacCookieDayArr: [],
  storeTotal: 0,
  simulatedCookiesDayArray: function(minCust, maxCust, avgCookies) {
    for (var i = 0; i <= (workingHours - 1); i++) {
      this.seatacCookieDayArr.push(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies);
    }
  }
};

var centerLoc = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
  },
  centerCookieDayArr: [],
  storeTotal: 0,
  simulatedCookiesDayArray: function(minCust, maxCust, avgCookies) {
    for (var i = 0; i <= (workingHours - 1); i++) {
      this.centerCookieDayArr.push(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies);
    }
  }
};

var capitolLoc = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
  },
  capitolCookieDayArr: [],
  storeTotal: 0,
  simulatedCookiesDayArray: function(minCust, maxCust, avgCookies) {
    for (var i = 0; i <= (workingHours - 1); i++) {
      this.capitolCookieDayArr.push(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies);
    }
  }
};

var alkiLoc = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
  },
  alkiCookieDayArr: [],
  storeTotal: 0,
  simulatedCookiesDayArray: function(minCust, maxCust, avgCookies) {
    for (var i = 0; i <= (workingHours - 1); i++) {
      this.alkiCookieDayArr.push(this.custNumGen(this.minCust, this.maxCust) * this.avgCookies);
    }
  }
};

document.createElement('ul');
for (var i = 0; i <= (workingHours - 1); i++) {
  document.createElement('li');
  
}
