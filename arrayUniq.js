function arrayLengthIsOne(array) {
	return array.length == 1;
}

function arrayUniq(array) {
	var uniqArray = [];

	array.forEach(function(datumA) {
		var filteredArray = array.filter(function(datumB) {
			return datumA == datumB;
		})

		if(arrayLengthIsOne(filteredArray)) {
			uniqArray.push(filteredArray[0]);
		} else {
			var isInUniqArray = uniqArray.find(function(datumC) {
				return datumA == datumC;
			})

			if(isInUniqArray == undefined) {
				uniqArray.push(filteredArray[0]);
			} 
		}
	})

	return uniqArray;
}

module.exports = arrayUniq;