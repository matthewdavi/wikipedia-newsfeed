var myInit = { method: 'GET',
               mode: 'no-cors',
               cache: 'default' };
console.log("hello!!!!");
fetch('https://en.m.wikipedia.org/wiki/Special:Random',myInit).then(function(response){
console.log(response);
}
).catch(function(){
	console.log('erra')
})
