const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=1&status=active');

// Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host
console.log(myUrl.host);
// Host name (without port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query params
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams.get('id'));
console.log(myUrl.searchParams.get('status'));

// Add param
myUrl.searchParams.append('other', 'otherValue');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, key) => console.log(`${key}: ${value}`));