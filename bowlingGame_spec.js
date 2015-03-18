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
	});

	it("calling roll(10) will give num between 0-10", function(){
		expect(BowlingGame.roll(10)).toBeLessThan(11);
		expect(BowlingGame.roll(10)).toBeGreaterThan(0);
	});

	it("calling roll(7) will give num between 0-7", function(){
		expect(BowlingGame.roll(7)).toBeLessThan(7);
		expect(BowlingGame.roll(7)).toBeGreaterThan(0);
	});
	
	it("will push the roll into the frame", function() {
		BowlingGame.getRoll();
		expect(BowlingGame.frame.length).toEqual(1);
	});

})
