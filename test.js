var chai = require('chai');
var expect = chai.expect;
var arrayUniquify = require('./arrayUniquify');

describe('arrayUniq function', function() {
	it('will return uniq version of array if in array there are duplicate element', function() {
		var testArray = [1,2,1];
		var expectedResult = [1,2];
		expect(arrayUniquify(testArray)).to.eql(expectedResult);
	})
	it('will return uniq version of array if in array there are duplicate element', function() {
		var testArray = [1,2,1,1,1,1,1,1,1,1,1,1];
		var expectedResult = [1,2];
		expect(arrayUniquify(testArray)).to.eql(expectedResult);
	})
	it('will return uniq version of array if in array there are duplicate element', function() {
		var testArray = [1,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
		var expectedResult = [1,2];
		expect(arrayUniquify(testArray)).to.eql(expectedResult);
	})
	it('will return uniq version of array if in array there are duplicate element', function() {
		var testArray = [1,2,1,1,1,1,1,1,1,1,1,1,2,2,2,6,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2];
		var expectedResult = [1,2,6,3];
		expect(arrayUniquify(testArray)).to.eql(expectedResult);
	})
	it('will return uniq version of array if in array there are duplicate element', function() {
		var testArray = [1,2,1,1,1,1,1,1,1,1,1,1,2,2,2,6,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,10];
		var expectedResult = [1,2,6,3,10];
		expect(arrayUniquify(testArray)).to.eql(expectedResult);
	})
	it('will return uniq version of array if in array there are duplicate element', function() {
		var testArray = ["james", "edward", "budimen", "superman"];
		var expectedResult = ["james", "edward", "budimen", "superman"];
		expect(arrayUniquify(testArray)).to.eql(expectedResult);
	})
	it('will return uniq version of array if in array there are duplicate element', function() {
		var testArray = ["james", "edward", "budimen", "superman", "edward", "jancok"];
		var expectedResult = ["james", "edward", "budimen", "superman", "jancok"];
		expect(arrayUniquify(testArray)).to.eql(expectedResult);
	})
	it('will return uniq version of array if in array there are duplicate element', function() {
		var testArray = [1,1,1,1,1,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5];
		var expectedResult = [1,3,4,5];
		expect(arrayUniquify(testArray)).to.eql(expectedResult);
	})
})