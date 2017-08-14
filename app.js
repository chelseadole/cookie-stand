'use strict';

var pikeLoc = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesPerHour: (custNumGen(pikeLoc.minCust, pikeLoc.maxCust) * avgCookies),
  cookiesForDayArr: [],
};

var seatacLoc = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  cookiesPerHour: (custNumGen(seatacLoc.minCust, seatacLoc.maxCust) * avgCookies),
  cookiesForDayArr: [],
};

var centerLoc = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  cookiesPerHour: (custNumGen(centerLoc.minCust, centerLoc.maxCust) * avgCookies),
  cookiesForDayArr: [],
};

var capitolLoc = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  cookiesPerHour: (custNumGen(capitolLoc.minCust, capitolLoc.maxCust) * avgCookies),
  cookiesForDayArr: [],
};

var alkiLoc = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  cookiesPerHour: (custNumGen(alkiLoc.minCust, alkiLoc.maxCust) * avgCookies),
  cookiesForDayArr: [],
};

custNumGen: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
},
