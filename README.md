# react-redux-active-ip-displayer-app

> Neat little application that display a list of all connected users and the last user to connect.
> New users viewing the app will re dynamically added to the app without reload (socket.io)

## Usage


``` bash
$ npm install 
$ npm start
```

## Testing 

``` bash
$ npm test
```

## Linting

``` bash
$npm install -g eslint 
$npm run lint
```

## What's Included

- Server side rendering  

- jest with test coverage 

- real time updates with socketIO 

- noSql integration using mongoose ODM and mongo 

- hot-reloading with webpack dev server on client & nodemon on server 

## Notes

- to accurately test locally as a single developer we must append and persist a UUID to each ip code as they will be the same.

## TODOs / Roadmap

- Animations and transitions for when users are dynamically added to app

- Make little styled box for when there is no data present.

- Prod config for everything? May be a little overzealous.

- Introduce media queries for the views so each panel wil render appropiate size on different screen     resolutions.

- Introduce Passport JS to display more info associated with each ip address 

- Integrate Google Maps.  We will query an api which gives a general location to each I.P address and display said location on the maps with a pin as a second overlay/view of connected ips.


## Original Criteria

# Currently Viewing App

Shows a list of IP addresses viewing the page

## Requirements

Create a single-page web app that:

1. **Shows the list of IP addresses currently viewing the app**
2. **Shop IP of the last connected user (separatelly)**
3. **When a new user opens the app, dynamically adds their IP address to the list of IPs**

## Guidelines

- You MUST include installation instructions so that it can be run locally be other developers.
- You MUST publish your solution as a public github repository.
- You SHOULD make extensive use of any React/Redux on frontend. For backend you can use any
- You SHOULD take as little or as long as you need (but don't overdo it). You will not be evaluated on time to complete.
- You SHOULD ask questions if anything specified here is not clear in any way.

## Instructions

1. Fork this github repository using your personal github account
2. Create your solution. Test it. Test it again to be sure. Commit it and push to your personal repo.
3. Submit a PR (pull request) back to this repository indicating your solution is ready for review

## Evaluation Criteria

You will be evaluated with the following in mind:

- Does the solution satisfy the three requirements?
- Does the solution run locally based on the provided instructions?
- Does the solution make good use of tools/frameworks/libraries/APIs?
- Does the implementation follow established best practices (design patterns, language usage, code formatting, etc..)?

Happy coding!






