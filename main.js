$(".form-footer").hide();
$("form").hide();
//Mechanic constructor
function Mechanic(name, email, phoneNumber, experience, ratings) {
  this.name = name;
  this.email = email;
  this.phoneNumber = phoneNumber;
  this.experience = experience;
  this.ratings = ratings;
}
//the mechanics
let elvis = new Mechanic("Elvis Otieno", "elvis9@email.com", "071274444", 9, 4.3);
let mungai = new Mechanic("Mungai Karinga", "mungai911@yahoo.com", "071273333", 11, 4.3);
let floice = new Mechanic("Floice Nyota","floice11@email.com", "071272222",12 , 4.4);
let kiru = new Mechanic("Peter Kiru",  "kiru900@gmail.com",  "071275555", 12,4.3);
//showing mech details
//------------------//Elvis dets---------------------------------------------
$(".elvis").click(function (){
  $(".det-1").css("font-weight", "bolder");
  $(".det-1").append(`<li>Name: ${elvis.name} </li>` +
                      `<li> Email: <a href="">${elvis.email} </a></li>` +
                      `<li>Phone Number: ${Number(elvis.phoneNumber)} </li>` +
                      `<li>Experience: ${elvis.experience} </li>` +
                      `<li>Rating: ${elvis.ratings} </li>`
);
 $("form").show();
//  $(".elvis").hide();
 $(".det-1").click(function (){
  $("form").hide();
  $(".det-1").hide();
  $(".elvis").show();
 })
})
//------------------- //Mungai dets----------------------------------------------
$(".mungai").click(function (){
  $(".det-2").css("font-weight", "bolder");
  $(".det-2").append(`<li>Name: ${mungai.name} </li>` +
                      `<li> Email: <a href="">${mungai.email} </a></li>` +
                      `<li>Phone Number: ${Number(mungai.phoneNumber)} </li>` +
                      `<li>Experience: ${mungai.experience} </li>` +
                      `<li>Rating: ${mungai.ratings} </li>`
);
 $("form").show();
//  $(".mungai").hide();
 $(".det-2").click(function (){
  $("form").hide();
  $(".det-2").hide();
  $(".mungai").show();
 })
})
//------------------- //Floice dets----------------------------------------------
$(".floice").click(function (){
  $(".det-3").css("font-weight", "bolder");
  $(".det-3").append(`<li>Name: ${floice.name} </li>` +
                      `<li> Email: <a href="">${floice.email} </a></li>` +
                      `<li>Phone Number: ${Number(floice.phoneNumber)} </li>` +
                      `<li>Experience: ${floice.experience} </li>` +
                      `<li>Rating: ${floice.ratings} </li>`
);
 $("form").show();
//  $(".mungai").hide();
 $(".det-3").click(function (){
  $("form").hide();
  $(".det-3").hide();
  $(".floice").show();
 })
})
//------------------- //Kiru dets----------------------------------------------
$(".kiru").click(function (){
  $(".det-4").css("font-weight", "bolder");
  $(".det-4").append(`<li>Name: ${kiru.name} </li>` +
                     `<li> Email: <a href="">${kiru.email} </a></li>` +
                     `<li>Phone Number: ${Number(kiru.phoneNumber)} </li>` +
                     `<li>Experience: ${kiru.experience} </li>` +
                     `<li>Rating: ${kiru.ratings} </li>`
);
 $("form").show();
//  $(".mungai").hide();
 $(".det-4").click(function (){
  $(".kiru").hide();
  $(".det-4").hide();
  $(".floice").show();
 })
});
if($(".kiru").click){
}
//form-jquery
$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    $("#submit").click(function (){
      $(".form-footer").show();
let userName = $("#fullname").val();
let userMessage = $("#comment").val();
let userLocation = $("#location").val();
$(".user-name").html(userName);
$(".user-message").html(userMessage);
$(".user-location").html(userLocation);
    })
  });
});