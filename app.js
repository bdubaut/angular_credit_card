var app = angular.module('ccvalidator', ['validate-cc']);


/**
* validate-cc Module
*
* validates a credit card using Luhn's algorithm.
*/
angular.module('validate-cc', []).filter('validate', [function () {
	return function (ccnumber) {

		if (!ccnumber) {return false};

		var lunhArray = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
		var cpt = 0;
		var odd = false;
		var tmp = String(ccnumber).replace(/[^\d]/g, "");
		var incNum;

		if (tmp.length == 0) {return false};
		 for (var i = tmp.length - 1; i >= 0; --i) {
		 	incNum = parseInt(tmp.charAt(i), 10);
		 	cpt += (odd = !odd)? incNum : luhnArr[incNum];
		 	return (cpt % 10 == 0);
		 };
	}


}])

// angular.module('filters', []).filter('validate-cc', [function () {
// 	return function (ccnumber) {

// 		// var isLuhn = function (ccnumber) {
// 		// 	var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
// 		// 	return function(str) {
// 		// 			var counter = 0;
// 		// 			var incNum;
// 		// 			var odd = false;
// 		// 			var temp = String(str).replace(/[^\d]/g, "");
// 		// 			if ( temp.length == 0)
// 		// 				return false;
// 		// 			for (var i = temp.length-1; i >= 0; --i)
// 		// 			{
// 		// 				incNum = parseInt(temp.charAt(i), 10);
// 		// 				counter += (odd = !odd)? incNum : luhnArr[incNum];
// 		// 			return (counter%10 == 0);
// 		// 		}


// 		// }

// 		return function (ccnumber) {
//       if (!ccnumber) { return ''; }
//       ccnumber = ccnumber.toString().replace(/\s+/g, '');
//       var len = ccnumber.length;
//       var cardType, valid;
//       mul = 0,
//       prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
//       sum = 0;

//       while (len--) {
//           sum += prodArr[mul][parseInt(ccnumber.charAt(len), 10)];
//           mul ^= 1;
//       }

//       if (sum % 10 === 0 && sum > 0) {
//         valid = "valid"
//       } else {
//         valid = "not valid"
//       }

//       if(/^(34)|^(37)/.test(ccnumber)) {
//         cardType = "American Express";
//       }
//       if(/^5[1-5]/.test(ccnumber)) {
//         cardType = "MasterCard";
//       }
//       if (/^4/.test(ccnumber)) {
//         cardType = "Visa"
//       }
//       return ccnumber + " is a(n) " + cardType + " and it's " + valid;
// 	})
// }
// }])