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
                    var tuesday = doc.data().tuesday;
                    var wednesday = doc.data().wednesday;
                    var thursday = doc.data().thursday;
                    var friday = doc.data().friday;
                    var saturday = doc.data().saturday;
                    var sunday = doc.data().sunday;
                    $("#name-goes-here").text(n);
                    $("#monday-goes-here").text(monday);
                    $("#tuesday-goes-here").text(tuesday);
                    $("#wednesday-goes-here").text(wednesday);
                    $("#thursday-goes-here").text(thursday);
                    $("#friday-goes-here").text(friday);
                    $("#saturday-goes-here").text(saturday);
                    $("#sunday-goes-here").text(sunday);
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