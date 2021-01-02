function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    testAPI();
  } else {
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}


window.fbAsyncInit = function() {
  FB.init({
    appId      : '306548034125618',
    cookie     : true,
    xfbml      : true,
    version    : 'v9.0'
  });


  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  FB.api(
    '/{your-user-id}/photos',
    'GET',
    {},
    function(response) {
      console.log(response)
    }
  );
};

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}
