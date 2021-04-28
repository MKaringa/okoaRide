// /Mechanic constructor
function Mechanic(name, age, email, ratings) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.ratings = ratings;
}
//the mechanics
let miko = new Mechanic("Miko Tyre", 34, "miko@email.com", 4.3);
let john = new Mechanic("John Engine", 23, "John@email.com", 4.3);
let jack = new Mechanic("John Fixer", 42, "jack@email.com", 4.4);
let jonas = new Mechanic("Jonas Unai", 19, "JonasU@email.com", 4.1);
//showing mech details
$(".miko").click(function () {
  $(".det-1").show();
});
$(".john").click(function () {
  $(".det-2").show();
});
$(".jack").click(function () {
  $(".det-3").show();
});
//miko dets
$(".miko").click(function () {
    $(".det-1").css("font-weight", "bolder");
    $(".det-1").append(`<li>Name: ${miko.name} </li>`+
                          `<li>Age: ${miko.age} </li>`+
                          `<li> Email: <a href="">${miko.email} </a></li>`+
                          `<li>Rating: ${miko.ratings} </li>`);
      $(".miko").hide();
  });
  $(".det-1").click(function functionName(){
    $(".det-1").hide()
    $(".miko").show();
   });
//------------------- //john dets----------------------------------------------
  $(".john").click(function () {
    $(".det-2").css("font-weight", "bolder");
    $(".det-2").append(`<li>Name: ${john.name} </li>`+
                          `<li>Age: ${john.age} </li>`+
                          `<li> Email: <a href="">${john.email} </a></li>`+
                          `<li>Rating: ${john.ratings} </li>`);
      $(".john").hide();
  });
  $(".det-2").click(function functionName(){
 $(".det-2").hide()
 $(".john").show();
});
//------------------- //jack dets----------------------------------------------
$(".jack").click(function () {
    $(".det-3").css("font-weight", "bolder");
    $(".det-3").append(`<li>Name: ${jack.name} </li>`+
                          `<li>Age: ${jack.age} </li>`+
                          `<li> Email: <a href="">${jack.email} </a></li>`+
                          `<li>Rating: ${jack.ratings} </li>`);
      $(".jack").hide();
  });
  $(".det-3").click(function functionName(){
    $(".det-3").hide()
    $(".jack").show();
   });
//------------------- //jonas dets----------------------------------------------
$(".jonas").click(function () {
  $(".det-4").css("font-weight", "bolder");
  $(".det-4").append(`<li>Name: ${jonas.name} </li>`+
                        `<li>Age: ${jonas.age} </li>`+
                        `<li> Email: <a href="">${jonas.email} </a></li>`+
                        `<li>Rating: ${jonas.ratings} </li>`);
    $(".jonas").hide();
});
$(".det-4").click(function functionName(){
    $(".det-4").hide()
    $(".jonas").show();
   });