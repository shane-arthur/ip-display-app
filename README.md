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
