class Tamagotchi {
	constructor(name){
		this.hunger = 1;
		this.sleepness = 1;
		this.boredom = 1;
		this.age = 0;
		this.dead = false;
		this.name = name;
		this.timeOfLife = 0
	}
	screenPositions(){ 
		const position = ["flex-start","flex-end","center"][Math.floor(Math.random()*3)];
		return position;

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
	graveyard(reason){
		console.log(` =( ${this.name} is dead beacause he/she was ${reason} `);
		$('img').attr('src', 'image/baby-tamagotchi-dead.png');
	}
	relocate(){
		$('#image').css('justify-content', `${this.screenPositions()}`)
		$('#image').css('align-items', `${this.screenPositions()}`)
	}
	morph(){
		$('img').css('width', '30%');
		$('img').css('height', '40%');
		if (this.timeOfLife>= 120){
			$('img').attr('src', 'image/baby-tamagotchi-morph.png');
		}	
	}
}


const game = {
	myPet: null, 
	intervalID: null,
	time: 0,
	lightsON:false,
	light: false,

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
			this.myPet.timeOfLife++
			this.reasonOfDeath = "";
			const timeInMillisecond = this.time * 1000
			console.log(this.time);

			if (timeInMillisecond % 2000 === 0){	
				this.myPet.relocate();
			}
			if (timeInMillisecond % 5000 === 0){	
				this.myPet.getHunger();
			}
			if (timeInMillisecond % 15000 === 0){	
				this.myPet.getBorded()
      		}

			if (timeInMillisecond % 30000 === 0){	
				this.myPet.getSleepy();
			}
      		if (timeInMillisecond % 60000 === 0){	
      			this.myPet.getOlder();
      			this.myPet.morph();
      			this.time = 0;
			}

      		//validate if my Tamagotchi did not reach to metrics required to be dead
      		if (this.myPet.hunger>=10){
      			this.myPet.dead = true;
      			this.reasonOfDeath = "hungry";
      		}
      		if (this.myPet.sleepness>=10){
				this.myPet.dead = true;
				this.reasonOfDeath = "depressive and couldn't sleep";
      		}
      		if (this.myPet.boredom>=10){
      			this.myPet.dead = true;
      			this.reasonOfDeath = "tired of doing NOTHING";
    
      		}

      		if (this.myPet.dead){
      			clearInterval(this.intervalID)
      			this.myPet.graveyard(this.reasonOfDeath)
      		}
      		
    	 }, 100)
    	// }, 1)
	},

	feedThePet() {
		if (this.myPet.hunger>1){
			this.myPet.hunger--
			$('#hunger').text(this.myPet.hunger);
		}
	},

	playWithThePet() {
		if (this.myPet.boredom>1){	
			this.myPet.boredom--
			$('#boredom').text(this.myPet.boredom);
		}
	},

	turnOnOffTheLight() {
		
		if (this.light){
			if (this.myPet.sleepness >1){
				this.myPet.sleepness--
				$('#sleepness').text(this.myPet.sleepness);
			    $('#screen').css('background', 'rgb(225, 227, 237)');
			    this.light = false;
			}
		}else{
			$('#screen').css('background', 'url(image/sleep-background.gif)');
			$('#screen').css('background-size', 'cover');
			this.light = true;
		}
	}

}


//listener 
$('#form').on('submit',(event)=>{
	event.preventDefault()
	const newName = $('#input-name').val()
	// call a start method in your game object -- pass in newName
	game.start(newName)
})

$('.button').on('click',(event)=>{
	
	const e = $(event.target);	

	if (e.attr('id') === "light"){
		
		game.turnOnOffTheLight() 
	}
	if (e.attr('id') === "feed"){
		
		game.feedThePet();
	}
	if (e.attr('id') === "play"){
		
		game.playWithThePet()
	}
})