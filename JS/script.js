function Mechanic(firstName, lastName, ratingOutOfFive, experienceInYears, chargesInKsh){
	this.firstName = firstName;
	this.lastName = lastName;
  this.ratingOutOfFive = ratingOutOfFive;
  this.experienceInYears = experienceInYears;
  this.chargesInKsh = chargesInKsh;
  
}

let mechanic01 = new Mechanic("Mungai", "Karinga", 4.8, 7, 5000);

console.log(mechanic01.lastName);