function checkPage(){
	if(document.querySelector('#stream_pagelet') !== null){
			 document.querySelector('#content_container').innerHTML = `<div id="wikiContainer"> <iframe class="wikiFrame" src="https://en.m.wikipedia.org/wiki/Special:Random" style="border-style:none" width="100%" height="1200px"></iframe></div>`;
			 window.scrollTo(0,0);
			 return;
		}

}
setInterval(checkPage,20);

	window.scrollTo(0,0);
	window.addEventListener(`scroll`, function(){
		
		let container = document.querySelector('body')
		let a = container.scrollTop;
		if(a / document.body.scrollHeight >= .3){
			let newFrame = document.createElement("IFRAME");
			newFrame.src="https://en.m.wikipedia.org/wiki/Special:Random";
			newFrame.style.border = "none";
			newFrame.width="100%";
			newFrame.height= "1200px";
			document.querySelector('#wikiContainer').appendChild(newFrame);
		}})

 

/*
document.querySelector('#content_container').innerHTML = `<div id="wikiContainer"> <iframe class="wikiFrame" src="https://en.m.wikipedia.org/wiki/Special:Random" style="border-style:none" width="100%" height="1200px"></iframe></div>`;
console.log("SCROLL HEIGHT:", document.body.scrollHeight)
window.scrollTo(0,0);
window.addEventListener(`scroll`, function(){
	let container = document.querySelector('body')
	let a = container.scrollTop;
	console.log("A:",a)
	if(a / document.body.scrollHeight >= .3){
		let newFrame = document.createElement("IFRAME");
		newFrame.src="https://en.m.wikipedia.org/wiki/Special:Random";
		newFrame.style.border = "none";
		newFrame.width="100%";
		newFrame.height= "1200px";
		document.querySelector('#wikiContainer').appendChild(newFrame);


	}
}) */