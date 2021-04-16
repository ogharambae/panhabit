// Read user info from firebase and greet user based on user's name.
function sayHello() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            db.collection("users") 
                .doc(somebody.uid) 
                .get() 
                .then(function (doc) {
                    var n = doc.data().name; 
                    $("#name-goes-here").text(n); 
                })
        }
    })
}
sayHello();
