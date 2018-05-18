// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  // intializing the firebase config:
  firebase:
  {
    apiKey: "AIzaSyAo_SFxOJzHArsDSIReTL6Jkmoeed1RxJI",
    authDomain: "singed-d6e50.firebaseapp.com",
    databaseURL: "https://singed-d6e50.firebaseio.com",
    projectId: "singed-d6e50",
    storageBucket: "singed-d6e50.appspot.com",
    messagingSenderId: "755841211252"
  }
};


