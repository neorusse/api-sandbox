# [API SandBox App](https://neorusse.github.io/api-sandbox/)

### Project Description

A web [App](https://neorusse.github.io/api-sandbox/) that uses JSON-Server as REST-API to serve data to the frontend.

### Table of Content

[Features](#features)<br/>
[Optional Features](#optional-features)<br/>
[Project Management](#project-management)<br/>
[Technology Used](#technology-used)<br/>
[Installation](#installation)<br/>
[Development](#development)<br/>
[Testing](#testing)<br/>
[API End Points](#api-end-points)<br/>
[API Documentation](#api-documentation)<br/>
[License](#license)<br/>
[Credits](#credits)<br/>
[Author](#author)

### Features

Users can sign up.<br/>
Users can login.<br/>

### Optional Features

User can reset password.<br/>
Users can upload a profile photo.

### Project Management

Project is managed with [Pivotal Tracker](https://www.pivotaltracker.com) and can be accessed via this link [EPICMail](https://www.pivotaltracker.com/n/projects/2314418).

### Technology Used

Modern JavaScript features and technology was used for this [project](https://neorusse.github.io/api-sandbox/).

New features of ECMAScript 6 is also known as ES6 and ECMAScript 2015 such as const, let, arrow function, destructuring, array map and find method were adopted.

NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server.

JSON-Server enables one to get a full fake REST API with zero coding in less than 30 seconds (seriously).

CSS - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

HTML - Hypertext Markup Language is the standard markup language for creating web pages and web applications. With Cascading Style Sheets and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.

Codes were written in accordance with [Airbnb JavaScript style guide](https://github.com/airbnb/javascript) and [Andela Best Practices](https://github.com/andela/bestpractices).

### Installation

```bash
npm install
npm start
```

The server runs on port 9090.

### Development

This project uses [EditorConfig](http://editorconfig.org) to standardize text editor configuration. Visit this [link](http://editorconfig.org) for more details.

### Testing

This project uses [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) for testing.

To execute tests:

```bash
npm test
```

Code coverage generated by [Istanbul](https://istanbul.js.org/)

To calculate coverage:

```bash
npm run coverage
```

### API End Points

#### API URL

The API was hosted on Heroku and can be access via [EPICMail API](https://russ-epic-mail.herokuapp.com/)

| S/N | HTTP VERB | ENDPOINT  | FUNCTIONALITY         |
| --: | --------- | --------- | --------------------- |
|   1 | POST      | /signup   | Enable user to signup |
|   2 | POST      | /login    | Enable user to login  |
|   3 | POST      | /users    | Get all users         |
|   4 | GET       | /users/id | Get a particular user |

### API Documentation

### License

[MIT](https://opensource.org/licenses/MIT)

### Credits

### Author

[Russell Nyorere](https://neorusse.github.io/)
