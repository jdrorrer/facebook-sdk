Package.describe({
  name: 'jdrorrer:facebook-sdk',
  summary: "Facebook SDK packaged for Meteor",
  version: "0.0.11",
  git: "https://github.com/jdrorrer/facebook-sdk"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@1.0");
    api.use(['jquery', 'spacebars', 'templating']);
    api.add_files([
      'client/templates.html',
      'client/lib/fbSdk.js'
    ], 'client');

    if (api.export) {
      api.export('FbSdk');  
    }
});
