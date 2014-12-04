Meteor.startup ->
  if (Meteor.isClient)
    console.log("client startup actions")
    fbAppId = Meteor.settings.public.facebook.appId
    unless fbAppId
      console.warn("cant find fbAppId")
      return
    else
      console.log("fbAppId", fbAppId)
    window.fbAsyncInit = () ->
      FB.init({
        appId      : Meteor.settings.public.facebook.appId,
        cookie     : true,
        status     : true,
        xfbml      : true,
        version    : 'v2.1'
      })



# FB.getLoginStatus(function(response) {
#     alert(response);
# });