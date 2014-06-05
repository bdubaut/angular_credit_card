var app = angular.module('ccvalidator', ['validate-cc', 'validate-expiry-date']);


/**
* validate-cc Module
*
* validates a credit card using Luhn's algorithm.
*/
angular.module('validate-cc', []).filter('validate', [function () {
	return function (ccnumber) {

		if (!ccnumber) {return 'images/glyphicons_194_circle_question_mark.png'};

		var luhnArray = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
		var cpt = 0;
		var odd = false;
		var tmp = String(ccnumber).replace(/[^\d]/g, "");
		var incNum;
    var validIndicator = 'images/glyphicons_267_credit_card.png'

		if (tmp.length == 0) {return false};
    for (var i = tmp.length - 1; i >= 0; --i) {
		 	incNum = parseInt(tmp.charAt(i), 10);
		 	cpt += (odd = !odd)? incNum : luhnArray[incNum];
    }

    if (cpt % 10 == 0) {
      if(/^(34)|^(37)/.test(ccnumber)) {
        validIndicator = 'images/icons/american-express-curved-32px.png';
      }
      if(/^5[1-5]/.test(ccnumber)) {
        validIndicator = 'images/icons/mastercard-curved-32px.png';
      }
      if (/^4/.test(ccnumber)) {
        validIndicator = 'images/icons/visa-curved-32px.png';
      }
    }
    else {
      validIndicator = 'images/glyphicons_207_remove_2.png'
    };
    return validIndicator
	}
}]);


function filterSingleDate(date) {
    var actualDate = new Date();
    var m,y,d;

    if (/^\d{2}\/\d{2}$/.test(date)) {
        m = date.substring(0, 2) - 1;
        y = 20 + date.slice(-2);
        d = new Date(y,m);
    } else if (/^\d{2}\/\d{4}$/.test(date)) {
        m = date.substring(0, 2) - 1;
        y = date.slice(-4);
        d = new Date(y,m);
    } else if (/^\d{4}$/.test(date)) {
        m = date.substring(0, 2) - 1;
        y = 20 + date.slice(-2);
        d = new Date(y,m);
    }

    return actualDate > d ? '\u2713' : '\u2718';
}


/**
* validate-expiry-date Module
*
* Validates the date format and that the date is not in the past
*/
angular.module('validate-expiry-date', []).filter('validDate', [function () {
  return function (date) {
    return date.filter(filterSingleDate);
  };
}]);