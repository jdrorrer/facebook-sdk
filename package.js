Package.describe({
  name: 'dcsan:facebook-sdk',
  summary: "Facebook SDK packaged for Meteor",
  version: "0.2.1",
  git: "https://github.com/dcsan/facebook-sdk"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@1.0");
    api.use(['jquery', 'spacebars', 'templating', 'coffeescript']);
    api.add_files([
      'vendor/sdk.js', 
      'client/templates.html', 
      'client/startup.coffee',
      'client/helpers.coffee',
    ], 'client');
});
