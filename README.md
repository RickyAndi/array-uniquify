#arrayUniq

A simple function to remove duplicate element inside an array

- example

````
var arrayUniq = require('array-uniq');

var duplicatedArray = [1,1,1,1,1,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5];
var uniqArray = arrayUniq(duplicatedArray);

console.log(uniqArray) => [1,3,4,5]
```

- test

```
to run test, type 'npm test'
```