
  let marvelHeroes = [{ 
  	name: 'Blade', 
  	phoneNumbers: '000-000-9417', 
  	affiliation: 'Marvel Comics', 
  	img: 'http://pre15.deviantart.net/7069/th/pre/f/2016/080/2/9/blade_by_erlanarya-d9vz72k.jpg'
},{ 
	name: 'One Month To Live', 
	phoneNumbers: '300-300-3333', 
	affiliation: 'Marvel Comics', 
	img: 'https://s-media-cache-ak0.pinimg.com/originals/13/46/6e/13466e20ea438a12724982f6965b1289.jpg'
}]

  let dcHeroes = [
  { name: 'V For Vendetta', phoneNumbers: '111-222-3911', affiliation: 'DC Comics', img: 'https://s-media-cache-ak0.pinimg.com/originals/90/28/ed/9028edad98b9e1f93703f9d4cfe44c5c.jpg'},
  { name: 'Punisher', phoneNumbers: '888-888-0999', affiliation: 'DC Comics', img: 'http://img02.deviantart.net/df8f/i/2014/107/5/2/the_punisher__ye_olde_bearded_badass_by_thedurrrrian-d7et8eb.jpg'}
  ]


angular
.module("app", [])
.controller("HeroController", [heroesController])

function heroesController (){
	this.marvelHeroes = marvelHeroes;
}