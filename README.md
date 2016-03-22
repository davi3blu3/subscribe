Subscribe - MailChimp proxy

A project using a node server as a proxy to add a new subscriber to a MailChimp account using their API. Attempting to send an API call from the client-side triggered a 'Cross-Origin' error, so I incorporated a solution from https://github.com/thorning/node-mailchimp into a node environment configured with express-generator.

On clicking the submit form, subscribe.js makes an AJAX call transferring input to the server side, which in turn completes the call to Mailchimp API.  API keys and list-id are stored in a config file, which are git ignored and imported into the user.js file for the call.

This was just to test basic function. In a production environment you would want to add a validation step to clean up user input.