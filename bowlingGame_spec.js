var BowlingGame = require('./bowlingGame.js');

describe("Bowling Game", function() {

	it("Starts with an empty array",function(){
		expect(BowlingGame.frame).toEqual([]);	
	});

	it("Starts with an empty array",function(){
		expect(BowlingGame.scoreFrame).toEqual([]);	
	});
	
	it("has a total that initializes at 0", function() {
		expect(BowlingGame.currentTotal).toEqual(0);
	})

})
