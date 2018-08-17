let form = document.getElementById("form_data");


$("#signUpBtn").on("click", function() {
  signup();
});

$("#loginBtn").on("click", function() {
  login();
});
$("#signOutBtn").on("click", function() {
  signOut();
});

function signup() {
  let name = $("#userName").val();
  let email = $("#userEmail").val();
  let password = $("#userPassword").val();
  let telephone = $("#userTel").val();

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log(`[Firebase] can't Signup!`, error);
    });

    form.reset();
  checkState();    
}

function login() {
    // debugger
    // var homePage = "/index.html";
  var loginEmail = $("#loginEmail").val();
  var loginPassword = $("#loginPassword").val();
  firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).catch(function(error) {
      console.log(`[Firebase] Cannot SignIn`, error.message);
    });
    
    

    // firebase.auth().onAuthStateChanged(function(user){
    //     if ((user) && (location.pathname == homePage)){
    //       // User is signed in.
    //     //   console.log("Welcome User");
    //       document.getElementById("signOutBtn").style.display = "block";
    //       location.href = "selection.html"
    
    //     } else {
    //       // No user is signed in.
    //       console.log("User Not logged on! ");
    //     }
    
    //   });
}

function checkState(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("Welcome User");
      document.getElementById("signOutBtn").style.display = "block";
    } else {
      // No user is signed in.
      console.log("User Not logged on! ");
    }
  });
}

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
      console.log("Sign Out Complete");
      window.location.replace("index.html");
    })
    .catch(function(error) {
      // An error happened.
      alert("Sign Out Failed");
    });
  location.reload(true);
}
