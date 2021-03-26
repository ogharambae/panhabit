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
                    $("#name-goes-here").text(n);
                })
        }
    })
}
sayHello();

function getHabit() {
    document.getElementById("submit").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (somebody) {
            if (somebody) {
                var habit = document.getElementById("habit-name").value;
                console.log(habit);
                var note = document.getElementById("habit-note").value;
                console.log(note);
                        //read cities collection from firestore, with query
                db.collection("users")
                    .doc(somebody.uid)
                    .collection("habits")
                    .add({
                        "habit": habit,
                        "note": note
                    })
            }
        })
                    
    })
}
getHabit();
