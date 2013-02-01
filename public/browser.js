    /*jshint browser:true strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true eqeqeq:true immed:true latedef:true*/
    (function () {
      "use strict";

      var FB = window.FB
        , $ = window.jQuery
        ;

      FB.init({
          appId: 369156713182436
      });

      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          // the user is logged in and has authenticated your
          // app, and response.authResponse supplies
          // the user's ID, a valid access token, a signed
          // request, and the time the access token 
          // and signed request each expire
          var uid = response.authResponse.userID
            , accessToken = response.authResponse.accessToken
            ;
        } else if (response.status === 'not_authorized') {
          // the user is logged in to Facebook, 
          // but has not authenticated your app
        } else {
          // the user isn't logged in to Facebook.
        }
      });

      function doLogin() {
        FB.login(function(response) {
          if (!response.authResponse) {
            console.log('User cancelled login or did not fully authorize.');
            return;
          }
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
          });
        });
      }

      $(function () {
        $('body').on('click', '.js-fb-login', function () {
          console.log('do login');
          doLogin();
        });
      });
    }());
