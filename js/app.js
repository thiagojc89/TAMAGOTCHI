class Tamagotchi {
	constructor(name){
		this.hunger = 1;
		this.sleepness = 1;
		this.boredom = 1;
		this.age = 0;
		this.dead = false;
		// this.ageTimer = 30;
		this.name = name
	}

	getOlder() {
		this.age++
	}

	// startTimer() {
	// 	this.gameTimer = setInterval(() => {
    		
 //    		console.log("timer running");
    		
 //    		//increase age 
 //      		let $age = parseInt($('#age').text());
 //      		console.log($age);
 //      		$age+=1;
 //      		$('#age').text($age);
 //      		console.log()

 //      		//the Timer will stop when the Tamagotchi is dead =[.
 //      		if (this.dead){
 //      			clearInterval(this.gameTimer)

 //      		}
      		
 //    	// }, 60000)
 //    	}, 1000)
 //    	// this.feedPet = 
	// }
// }


const game = {
	myPet: null, 
	intervalID: null,
	time: 0,

 	start(name) {
		// create new tomagotchi
		const myPet2 = new Tamagotchi(name);
		this.myPet = myPet2;
		$('#name').text(this.myPet.name)
		$('#input-name').val("")
		
		this.startTimer();


	},
	startTimer() {
		this.intervalID = setInterval(() => {
    		

			this.time++
			console.log(this.time);


    		console.log("timer running");
    		
    		//increase age 
      		// let $age = parseInt($('#age').text());
      		// console.log($age);
      		this.myPet.getOlder();
      		// $('#age').text($age);
      		// console.log()

      		//the Timer will stop when the Tamagotchi is dead =[.
      		// if (this.dead){
      		// 	clearInterval(this.gameTimer)

      		// }
      		
    	// }, 60000)
    	}, 1000)
    	// this.feedPet = 
	},

	asdf() {


	},
	sdfg() {

	}
}



const fish = {
	name: "fred",
	swim() {
		console.log(`hi i'm ${this.name} and I'm swimming`); // Hi I'm fred and I'm swimming
	}
}



// myPet.startTimer();

//  //while(my still alive)

// console.log(myPet.age);
// console.log(myPet.hunger);
// console.log(myPet.sleepness);
// console.log(myPet.boredom);










//listener 
$('#form').on('submit',(event)=>{
	event.preventDefault()
	const newName = $('#input-name').val()
	// call a start method in your game object -- pass in newName
	game.start(newName)





})






