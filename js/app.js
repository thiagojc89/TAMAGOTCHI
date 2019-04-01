class Tamagotchi {
	constructor(age){
		this.hunger = 1;
		this.sleepness = 1;
		this.boredom = 1;
		this.age = 0;
	}
}

const myPet = new Tamagotchi();
console.log(myPet.age);
console.log(myPet.hunger);
console.log(myPet.sleepness);
console.log(myPet.boredom);