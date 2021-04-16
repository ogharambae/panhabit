// Read data from Firestore and display habits in caledar view.
function showAllMyHabitsOnThisDay1(day) {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid)
            .get()
            .then(function (doc) {
                var habitlist = doc.data()[day];
                $("#calendar-habits-go-here").append("<p> " + day + ": " + habitlist + "</p>")
                if (habitlist) {
                    habitlist.forEach(function (h) {
                        $("#" + day + "-habits-go-here").append("<p>" + h + "</p>");
                    })
                }
            })
    })
}
showAllMyHabitsOnThisDay1("monday");
showAllMyHabitsOnThisDay1("tuesday");
showAllMyHabitsOnThisDay1("wednesday");
showAllMyHabitsOnThisDay1("thursday");
showAllMyHabitsOnThisDay1("friday");
showAllMyHabitsOnThisDay1("saturday");
showAllMyHabitsOnThisDay1("sunday");
