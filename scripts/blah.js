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

function getFormInputs() {
    document.getElementById("submit").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {
            // get various values from the form
            var name = document.getElementById("habit-name").value;
            // Either true or false
            var mon = document.getElementById("mon").checked;
            var tue = document.getElementById("tues").checked;
            var wed = document.getElementById("wed").checked;
            var thurs = document.getElementById("thurs").checked;
            var fri = document.getElementById("fri").checked;
            var sat = document.getElementById("sat").checked;
            var sun = document.getElementById("sun").checked;

            db.collection("users")
                .doc(user.uid)
                .collection("days")
                .add({
                    "name": name,   //from text field
                    "mon": mon,     //from checkbox
                    "tue": tue,      //from checkbox
                    "wed": wed,      //from checkbox
                    "thurs": thurs,      //from checkbox
                    "fri": fri,      //from checkbox
                    "sat": sat,      //from checkbox
                    "sun": sun      //from checkbox
                })
        })
    })
}
getFormInputs();
