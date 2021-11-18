var video= document.querySelector('#player1');
var mutebutton= document.querySelector('#mute')
var playback=1
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener('click', function(){
	playback= playback*0.95
	video.playbackRate =  playback
	console.log("Speed is "+playback)
}
)

document.querySelector("#faster").addEventListener("click", function(){
	playback= playback *1.05
	video.playbackRate= playback
	console.log("Speed is " + playback)
}
)
document.querySelector("#mute").addEventListener("click", function(){
	
	if (video.muted == false){
		mutebutton.innerText = "Unmute";
		video.muted= true;
		console.log('Muted');
		
	}
	else{
		mutebutton.innerText= "Mute";
		video.muted= false;
		console.log('Unmuted');
		
	}

})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School")
	video.classList.add('oldSchool')	
})
document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original")
	video.classList.remove("oldSchool")
})
document.querySelector("#skip").addEventListener('click', function(){
	console.log("Skipping")
	video.currentTime+=15
	length= video.duration
	if(video.currentTime >=length){
		video.currentTime= 0
	}
	console.log(video.currentTime);
})

document.querySelector("#slider").addEventListener('change', function(){
	console.log("Slider");
	console.log(this.value);
	document.querySelector("#volume").innerHTML=this.value + "%";
	video.volume = this.value/100;
})



