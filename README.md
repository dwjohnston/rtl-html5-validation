This demonstrates a different in 'browser' behaviour between RTL (jsdom) and an actual browser. 


## Instructions 

Run `yarn start` and click the button, note that nothing is logged - the submit handler does not fire because the form is not valid. 


Run `yarn test` and note that the test fails - because the submit handler was called. 😢