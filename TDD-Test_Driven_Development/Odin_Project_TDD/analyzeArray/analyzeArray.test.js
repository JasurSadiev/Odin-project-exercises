import analyzeArray from "./analyzeArray";

it("Returns an object with the following properties: average, min, max, and length", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

it("Returns an object with the following properties: average, min, max, and length", () => {
	expect(analyzeArray([0, 0, 0, 0, 0])).toEqual({
		average: 0,
		min: 0,
		max: 0,
		length: 5,
	});
});
