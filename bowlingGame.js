var BowlingGame = {
	frame: [],
	scoreFrame: [],
	currentTotal: 0,
	roll: function(endNum){
		return console.log(Math.random() * endNum);
	}


}

module.exports = BowlingGame;
