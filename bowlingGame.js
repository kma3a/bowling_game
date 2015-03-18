var BowlingGame = {
	frame: [],
	scoreFrame: [],
	currentTotal: 0,
	roll: function(endNum){
		return Math.random() * endNum;
	}


}

module.exports = BowlingGame;
