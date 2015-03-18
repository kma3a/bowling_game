var BowlingGame = {
	frame: [],
	scoreFrame: [],
	currentTotal: 0,
	roll: function(endNum){
		return Math.floor(Math.random() * endNum + 1);
	}


}

module.exports = BowlingGame;
