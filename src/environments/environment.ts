// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA0jR0D91AdSCdS4RpmbtHNiugOOlRyt9g',
    authDomain: 'http://lucky-nature-110604.firebaseapp.com/',
    databaseURL: 'https://lucky-nature-110604.firebaseio.com/',
    projectId: 'lucky-nature-110604',
    storageBucket: 'gs://lucky-nature-110604.appspot.com/',
    messagingSenderId: '370705515329'
  },
  verifyPhone : 'http://test.aayaa.in/aras/numberCheck',
  login : 'http://test.aayaa.in/aras/loginResult',
  firstQuestion : 'http://test.aayaa.in/aras/firstQuestion',
  nextQuestion : 'http://test.aayaa.in/aras/nextQuestion',
  submitAnswer : 'http://test.aayaa.in/aras/submitAnswer',
  askHelp : 'http://test.aayaa.in/aras/askHelp',
  numberOfTabs : 'http://test.aayaa.in/aras/noOfTabs',
  result : 'http://test.aayaa.in/aras/result',
  listOfUsers : 'http://test.aayaa.in/aras/listOfUsers',
  createUpdateQuestionAnswer : 'http://test.aayaa.in/aras/createUpdateQuestionAnswer'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
