// Grab FB.init settings from settings.json file
var fbAppId = Meteor.settings.public.facebook.appId || null;
var fbSdkVersion = Meteor.settings.public.facebook.version || "v2.3";
var fbStatus = Meteor.settings.public.facebook.status || false;
var fbXfbml = Meteor.settings.public.facebook.xfbml || false;
var fbCookie = Meteor.settings.public.facebook.cookie || false;
var fbFrictionlessRequests = Meteor.settings.public.facebook.frictionlessRequests || false;
var fbHideFlashbackCall = Meteor.settings.public.facebook.hideFlashCallback || false;

if(Meteor.isClient) {
  window.fbAsyncInit = function() {
    var fbSdkInterval = Meteor.setInterval(function() {
      // Wait for Facebook SDK to load before initializing
      console.log("Waiting on FB SDK to load...");
      if(FB) {
        Meteor.clearInterval(fbSdkInterval);
        window.fbInitStarted = true;

        FB.init({
          appId               : fbAppId,
          status              : fbStatus,
          xfbml               : fbXfbml,
          cookie              : fbCookie,
          frictionlessRequests: fbFrictionlessRequests,
          hideFlashCallback   : fbHideFlashbackCall,
          version             : fbSdkVersion
        });

        // window.fbSdkInit = true;
        FB.getLoginStatus(function(response){
          window.fbSdkInit = true;
        });
      }
    }, 100);
  };

  // Namespace package as FbSdk
  // Ensure FB.init has run before calling any other FB functions
  // Example usage on client-side FB calls: 
  //     FbSdk.fbEnsureInit(function() {
  //       FB.ui({
  //         method: 'apprequests',
  //       }, function(response){
  //           console.log(response);
  //       }); 
  //     });
  FbSdk = {
    fbEnsureInit: function fbCheckInit(callback) {
      if(!window.fbSdkInit) {
        setTimeout(function() {fbCheckInit(callback);}, 50);
      } else {
        if(callback) {
          callback();
        }
      }
    }
  };

  (function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = window.location.protocol + "//connect.facebook.net/en_GB/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}