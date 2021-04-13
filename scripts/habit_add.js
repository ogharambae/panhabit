function addSubmitListener() {
    document.getElementById("submit").addEventListener("click", function () {
        // async, await (maybe)
        var name = document.getElementById("habit-name").value;
        addHabit(name);
        console.log("working");
        console.log("working2");
        resetForm();
        console.log("working3");
        // location.href = "habit_calendar.html"
    })
}
addSubmitListener();

function addHabit(name) {
    var mon = document.getElementById("mon").checked;
    var tue = document.getElementById("tues").checked;
    var wed = document.getElementById("wed").checked;
    var thurs = document.getElementById("thurs").checked;
    var fri = document.getElementById("fri").checked;
    var sat = document.getElementById("sat").checked;
    var sun = document.getElementById("sun").checked;
    var note = document.getElementById("habit-note").value;
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid)
            .collection("habits")
            .add({
                "timestamp": firebase.firestore.FieldValue.serverTimestamp(),
                "name": name,
                "info": note,
                "mon": mon,
                "tue": tue,
                "wed": wed,
                "thurs": thurs,
                "fri": fri,
                "sat": sat,
                "sun": sun
            })
            .then(function () {
                updateDaysArray(user.uid, name, mon, tue, wed, thurs, fri, sat, sun);
            })
    })
}

function updateDaysArray(uid, name, mon, tue, wed, thurs, fri, sat, sun) {
    var obj = {};
    if (mon) { //add "monday", key value pair
        obj.monday = firebase.firestore.FieldValue.arrayUnion(name);
    }
    if (tue) {
        obj.tuesday = firebase.firestore.FieldValue.arrayUnion(name);
    }
    if (wed) {
        obj.wednesday = firebase.firestore.FieldValue.arrayUnion(name);
    }
    if (thurs) {
        obj.thursday = firebase.firestore.FieldValue.arrayUnion(name);
    }
    if (fri) {
        obj.friday = firebase.firestore.FieldValue.arrayUnion(name);
    }
    if (sat) {
        obj.saturday = firebase.firestore.FieldValue.arrayUnion(name);
    }
    if (sun) {
        obj.sunday = firebase.firestore.FieldValue.arrayUnion(name);
    }
    console.log(obj);
    db.collection("users").doc(uid)
        .set(obj, {
            merge: true
        })
}

function resetForm() {
    document.getElementById("habit").reset();
}

// function getHabit() {
//     document.getElementById("submit").addEventListener('click', function () {
//         firebase.auth().onAuthStateChanged(function (somebody) {
//             if (somebody) {
//                 var habit = document.getElementById("habit-name").value;
//                 console.log(habit);
//                 var note = document.getElementById("habit-note").value;
//                 console.log(note);
//                 db.collection("users")
//                     .doc(somebody.uid)
//                     .collection("habits")
//                     .add({
//                         "habit": habit,
//                         "note": note
//                     })
//             }
//         })
//     })
// }
// getHabit();

// function habitEntryDays(){
//     var dbRef = db.collection("users").doc(user.uid);

//     firebase.auth().onAuthStateChanged(function(user){
//         var name = document.getElementById("habit-name").value;
// 		var mon = document.getElementById("mon").checked;

//         if (mon){
//             dbRef.set({
//                 monday: firebase.firestore.FieldValue.arrayUnion(name)},
//                 {merge: true});
//         }
//     })
// }
// habitEntryDays();