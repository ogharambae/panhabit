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

function getHabit(){
    document.getElementById("submit").addEventListener('click', function () {
        var location = document.getElementById("habit").value;
        console.log(location);
    })
}
getHabit();

function getHabit() {
    document.getElementById("submit").addEventListener('click', function () {
        var location = document.getElementById("habit").value;
        console.log(location);

				//read cities collection from firestore, with query
        db.collection("habits")
            .where("name", "==", location)
            .get()
            .then(function (snap) {
                snap.forEach(function(doc) {
                    console.log(doc.data());
                    //do something with the data
                })
            })
    })
}
getHabit();
