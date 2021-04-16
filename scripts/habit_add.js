// Event Listener for clicking the "submit button".
function addSubmitListener() {
    document.getElementById("submit").addEventListener("click", function () {
        var name = document.getElementById("habit-name").value;
        addHabit(name);
        resetForm();
    })
}
addSubmitListener();

// Reset the form when "reset" button gets clicked.
function resetFormButton() {
    document.getElementById("reset").addEventListener("click", function () {
        resetForm();
    })
}
resetFormButton();

// Write data of created habits to Firestore.
function addHabit(name) {
    var mon = document.getElementById("mon").checked;
    var tue = document.getElementById("tues").checked;
    var wed = document.getElementById("wed").checked;
    var thurs = document.getElementById("thurs").checked;
    var fri = document.getElementById("fri").checked;
    var sat = document.getElementById("sat").checked;
    var sun = document.getElementById("sun").checked;
    var note = document.getElementById("habit-note").value;
    var time = document.getElementById("appt").value;
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid)
            .collection("habits")
            .add({
                "timestamp": firebase.firestore.FieldValue.serverTimestamp(),
                "name": name,
                "info": note,
                "time": time,
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

// Create an array in Firestore for each day in the week, containing the habits that are to be done on that day.
// For example, the "Monday" array contains habits that are to be performed on Mondays
function updateDaysArray(uid, name, mon, tue, wed, thurs, fri, sat, sun) {
    var obj = {};
    if (mon) {
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
    db.collection("users").doc(uid)
        .set(obj, {
            merge: true
        })
        .then(function () {
            window.location.href = "calendar.html";
        })
}

// Reset form fields after habit is logged in.
function resetForm() {
    document.getElementById("habit").reset();
}
