function getCity() {
  document.getElementById("submit").addEventListener('click', function () {
      var location = document.getElementById("city").value;
      console.log(location);

      //read cities collection from firestore, with query
      db.collection("cities")
          // .where("name", "==", location)
          // .get()
          .then(function (snap) {
              snap.forEach(function(doc) {
                  console.log(doc.data());
                  //do something with the data
              })
          })
  })
}
getCity();

function writeCities() {
  var citiesRef = db.collection("cities");

  citiesRef.add({
      code: "SEL",
      name: "Seoul",
      hemisphere: "north",
      picture: "seoul.jpg",
      population: 9776000
  });
}
writeCities();

function citiesQuery(){
  db.collection("cities")
  .where("population", ">", 1000000)
  //.where("hemisphere", "==", "south")
  //.limit(2)
  //.orderBy("population")
  .orderBy("population", "desc")
  .get()
  .then(function(snap){
      snap.forEach(function(doc){
          var n = doc.data().name;
          var pop = doc.data().population;
          console.log(n);
          var newdom = "<p> " + n + " " + pop + "</p>";
          $("#cities-go-here").append(newdom);
          //document.getElementById("cities-go-here").innerHTML = newdom;
      })
  })
}
citiesQuery();