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

// function getHabit(){
//     document.getElementById("submit").addEventListener('click', function () {
//         var location = document.getElementById("habit").value;
//         console.log(location);
//     })
// }
// getHabit();

function getHabit() {
    document.getElementById("submit").addEventListener('click', function () {
        var habit = document.getElementById("habit123").value;
        console.log(habit);
        var note = document.getElementById("habit-note").value;
        console.log(note);
				//read cities collection from firestore, with query
        db.collection("users")
            // .doc(user.uid)
            .doc("12345")
            .collection("habits")
            .add({
                "habit": habit,
                "note": note

            })
    })
}
getHabit();
