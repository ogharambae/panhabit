// habit_calendar.js

function sayHello() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            //console.log(somebody.uid);
            db.collection("users")
                .doc(somebody.uid)
                .get()
                .then(function (doc) {
                    //console.log(doc.data().name);
                    var n = doc.data().name;
                    var monday = doc.data().monday;
                    $("#name-goes-here").text(n);
                    $("#monday-goes-here").text(monday);
                })
        }
    })
}
sayHello();

function showHabits(){
    firebase.auth().onAuthStateChanged(function(user){
        db.collection("users").doc(user.uid)
        console.log(user.uid)
        // .where("created", "desc")   //order by time created
        .where("fields.monday", "in", "users")
        console.log()
        .get()            //READ 
        .then(function (snap){  //collection of all habits time order
            snap.forEach(function(h){
                var name = h.data().name;
                var details = h.data().details;
                console.log(name)
                console.log(users)
            })
        })
    })
}
showHabits();

// function writeUserData(userId, name, email) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email,
//     });
//   }