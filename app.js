'use strict';

var pikeLoc = {
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3
  },

genRandom: function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + 1;
}
