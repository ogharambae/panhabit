function showAllMyHabitsOnThisDay1(day) {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid)
            .get()
            .then(function (doc) {
                console.log(doc.data());

                var habitlist = doc.data()[day];   //index into document with "monday" as "key"
                console.log("Habit list for " + day + " is " + habitlist);

                console.log(day + " habits are " + habitlist); //index is the key "monday"
                $("#calendar-habits-go-here").append("<p> " + day + ": " + habitlist + "</p>")

                if (habitlist) {   //only display if the list is not empty
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