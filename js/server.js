var datavase = new Firebase('https://peer2peer-60587.firebaseio.com');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    getUserData();
  } else {
    shouLogin();
  }
});

function shouLogin() {
  
}
