// habit list page

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


function displayHabits() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            db.collection("users")
                .doc(somebody.uid)
                .get()
                .then(function (doc) {
                    var monday = doc.data().monday;
                    var tuesday = doc.data().tuesday;
                    var wednesday = doc.data().wednesday;
                    var thursday = doc.data().thursday;
                    var friday = doc.data().friday;
                    var saturday = doc.data().saturday;
                    var sunday = doc.data().sunday;
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
displayHabits();
