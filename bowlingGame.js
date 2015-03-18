var BowlingGame = {
	frame: [],
	scoreFrame: [],
	currentTotal: 0,
	roll: function(endNum){
		return Math.floor(Math.random() * endNum + 1);
	},
	getRoll: function() {
		this.frame.push(this.roll(10));
	}	


}

module.exports = BowlingGame;
