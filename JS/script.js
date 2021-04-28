function Mechanic(firstName, lastName, ratingOutOfFive, experienceInYears, chargesInKsh, availability){
	this.firstName = firstName;
	this.lastName = lastName;
    this.ratingOutOfFive = ratingOutOfFive;
    this.experienceInYears = experienceInYears;
    this.chargesInKsh = chargesInKsh;
    this.availability = true;
    this.email = email;
  
}

// Create new instance of object 
let mechanic01 = new Mechanic("Mungai", "Karinga", 4.8, 7, 5000, "mKaringa@gmail.com");
let mechanic02 = new Mechanic("Elvis", "Otieno", 5, 7, 5000, true, "eOtione@gmail.com");
let mechanic03 = new Mechanic("Floice", "Ndiya", 4.5, 6, true, "fNdiya@gmail.com");
let mechanic04 = new Mechanic("Peter", "Kiiru", 4.7, 10, 5000, true, "pKiru@gmail.com")

//Validate form.          
$(document).ready(function(){
    $(".form").submit(function(event){
        let name = $('#name').val();
        let email = $('#email').val();
        let contact =$ ("#contact").val();
        let message = $('#technical-issue').val();

        if($('#name').val() && $('#email').val() && $('#contact').val() && $('#technical-issue')){
            alert(' Hello ' + name + '!' + ' Your message has been received successfully. We will be with you shortly.')
        } else{
            alert('Invalid inputs. Check if you have filled all inputs and then try again.')
        }
        event.preventDefault();


    });

});