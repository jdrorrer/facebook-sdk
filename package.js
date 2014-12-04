Package.describe({
  name: 'dcsan:facebook-sdk',
  summary: "Facebook SDK packaged for Meteor",
  version: "0.2.1",
  git: "https://github.com/dcsan/facebook-sdk"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@1.0");
    api.use(['jquery', 'spacebars', 'templating']);
    api.add_files(['sdk.js', 'templates.html'], 'client');
});
