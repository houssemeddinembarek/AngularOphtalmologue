// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl:'http://localhost:8091',

  firebase:{
    apiKey: "AIzaSyDx4buBR-ceXhR1Fe3NTb0z_sOsqrxyp3Q",
    authDomain: "ophtalmo-75a1b.firebaseapp.com",
    databaseURL: "https://ophtalmo-75a1b-default-rtdb.firebaseio.com",
    projectId: "ophtalmo-75a1b",
    storageBucket: "ophtalmo-75a1b.appspot.com",
    messagingSenderId: "2396662471",
    appId: "1:2396662471:web:c071ec2cf21d12a191ace2",
    measurementId: "G-G8BQ5XBRYG"

  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
