var BowlingGame = {
	frame: [],
	scoreFrame: [],
	currentTotal: 0,
	roll: function(endNum){
		return Math.floor(Math.random() * endNum + 1);
	},
	getRoll: function() {
		if (this.frame.length === 0) {	
			this.frame.push(this.roll(10));
		} else {
			this.frame.push(this.roll(this.frame[0]));
			this.scoreFrame.push(this.frame);
			this.frame = [];
		}
	}	


}

module.exports = BowlingGame;
