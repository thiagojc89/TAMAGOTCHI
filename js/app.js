class Tamagotchi {
	constructor(age){
		this.hunger = 1;
		this.sleepness = 1;
		this.boredom = 1;
		this.age = null;
		this.dead = false;
		// this.ageTimer = 30;
	}
	startTimer() {
		this.gameTimer = setInterval(() => {
    		
    		console.log("timer running");
    		
    		//increase age 
      		let $age = parseInt($('#age').text());
      		console.log($age);
      		$age+=1;
      		$('#age').text($age);


      		//the Timer will stop when the Tamagotchi is dead =[.
      		if (this.dead){
      			clearInterval(this.gameTimer)
      		}
      		
    	// }, 60000)
    	}, 1000)
	}
}



const myPet = new Tamagotchi();
myPet.startTimer();

 //while(my still alive)

console.log(myPet.age);
console.log(myPet.hunger);
console.log(myPet.sleepness);
console.log(myPet.boredom);










//listener 
$('#form').on('submit',(event)=>{
	event.preventDefault()
	const newName = $('#input-name').val()
	$('#name').text(newName)
	console.log("submit button clicked");
	$('#input-name').val("")


})