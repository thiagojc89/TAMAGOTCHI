class Tamagotchi {
	constructor(name){
		this.hunger = 1;
		this.sleepness = 1;
		this.boredom = 1;
		this.age = 0;
		this.dead = false;
		this.name = name
	}

	getOlder() {
		this.age++
		$('#age').text(this.age);
	}
	getHunger() {
		this.hunger++
		$('#hunger').text(this.hunger);
	}
	getSleepy() {
		this.sleepness++
		$('#sleepness').text(this.sleepness);
	}
	getBorded() {
		this.boredom++
		$('#boredom').text(this.boredom);
	}
}


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
			const timeInMillisecond = this.time * 10000
			console.log(this.time);
    		
      		
      		if (timeInMillisecond % 60000 === 0){	
      			this.myPet.getOlder();
			}

			if (timeInMillisecond % 5000 === 0){	
				this.myPet.getHunger();
			}

			if (timeInMillisecond % 30000 === 0){	
				this.myPet.getSleepy();
			}

			if (timeInMillisecond % 15000 === 0){	
				this.myPet.getBorded()
      		}

      		console.log(this.myPet.hunger, this.myPet.sleepness, this.myPet.boredom);
      		//validate if my Tamagotchi did not reach to metrics required to be dead
      		if (this.myPet.hunger>=10 || this.myPet.sleepness>=10 || this.myPet.boredom>=10){
      			this.myPet.dead = true;
      		}

      		if (this.myPet.dead){
      			clearInterval(this.intervalID)
      		}
      		
    	 }, 1000)
    	// }, 1)
	},

	asdf() {


	},
	sdfg() {

	}
}


//listener 
$('#form').on('submit',(event)=>{
	event.preventDefault()
	const newName = $('#input-name').val()
	// call a start method in your game object -- pass in newName
	game.start(newName)





})






