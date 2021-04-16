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

// Read logged habits from firesbase and display them on the habit_list.html page.
// Grabs name, info, and time of the habit.
// If time is not logged, it does not display anything.
function showAllMyHabits() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid)
            .collection("habits")
            .orderBy("timestamp")
            .get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    var name = doc.data().name;
                    var info = doc.data().info;
                    var time = doc.data().time;
                    $("#habit-and-info").append("<h3 id='habit-title'> " + name + "</h3>");
                    if (time) {
                    $("#habit-and-info").append("<h6> " + info + ' (' + time + ')' + "</h6>");
                    }
                    else {
                    $("#habit-and-info").append("<h6> " + info + "</h6>");
                    }
                })
            })
    })
}
showAllMyHabits();
