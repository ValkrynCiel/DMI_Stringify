# DMI_Stringify
A string collection app with a backend that consists of a simple Node.js server containing a non-persistent array of strings. 

Users can post new words to a server and the string list will update. Redux Saga is used to handle fetching and posting data as well as for user notifications and errors.

## Getting up and running

1. Fork or clone this repo.
2. Start the client on port 3000.
```shell
$ cd client
$ npm start
```
3. Start the server on port 3001.
```shell
$ cd server
$ node app.js
```
4. Visit http://localhost:3000 on your browser.

## Running the tests

```shell
$ npm run test
```

## Built with

+ ### Dependencies

  + React
  + Redux
  + Redux Saga
  + Styled Components
  + Axios
  + Immer

+ ### Dev Dependencies

  + React Testing Library


