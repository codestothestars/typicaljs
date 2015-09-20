#typicaljs

Provides typical JavaScript utility with functions that go beyond what is provided by the ECMAScript specification.

The typicaljs library consists of multiple modules, one for each type of object for which this library provides utility.

##APIs

### Objects
* **copy** copies the properties from one or more objects into a new one

### Arrays
* **equal** determines whether two or more arrays contain the same elements
* **remove** removes the first instance of an element from an array

##Download

Node:
* `npm install typicaljs`

Direct download (each module can be downloaded and used separately):
* [typical.js](./tree/master/dist/typical.js) or [typical.min.js](./tree/master/dist/typical.min.js) (includes all modules)
* [object.js](./tree/master/dist/modules/object.js) or [object.min.js](./tree/master/dist/modules/object.min.js)
* [array.js](./tree/master/dist/modules/array.js) or [array.min.js](./tree/master/dist/modules/array.min.js)

##Usage
typicaljs can be used in any of the following ways:
* As an [AMD](/amdjs/amdjs-api) module in any AMD module loader, such as [RequireJS](http://requirejs.org/)
* As a CommonJS module in any compatible environment, such as [Node.js](https://nodejs.org/)
* In a basic browser environment, under the global variable `typical`

##Documentation
See the [wiki](./wiki) on GitHub.

##Browser Support
* Chrome
* Safari
* Firefox
* Opera
* Internet Explorer 9+

##Issues
Open an issue on [GitHub](./issues).

##Contributing
See the [Contributing](./wiki/Contributing) page on the [wiki](./wiki).

##Versioning
typicaljs adheres to [Semantic Versioning](http://semver.org/)

##Author/Maintainer
[Ariel Ryan-Pagano](../)

##License
Copyright 2015 Ariel Ryan-Pagano
Licensed under the MIT License