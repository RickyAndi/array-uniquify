#arrayUniquify

A simple function to remove duplicate element inside an array

- example

````
var arrayUniquify = require('array-uniquify');

var duplicatedArray = [1,1,1,1,1,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5];
var uniqueArray = arrayUniquify(duplicatedArray);

console.log(uniqueArray) => [1,3,4,5]
```

- test

```
to run test, type 'npm test'
```