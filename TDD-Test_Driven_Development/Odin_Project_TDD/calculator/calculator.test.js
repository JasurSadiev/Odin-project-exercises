import functions from "./calculator";

it("2 + 2 should be 4", () => {
	expect(functions.add(2, 2)).toBe(4);
});

it("2 + 0 should not to be 20", () => {
	expect(functions.add(2, 0)).not.toBe(20);
});

it("2 - 2 should be 0", () => {
	expect(functions.subtract(2, 2)).toBe(0);
});

it("0 - 2 should be 2", () => {
	expect(functions.subtract(0, 2)).not.toBe(2);
});

it("2 * 2 should be 4", () => {
	expect(functions.multiply(2, 2)).toBe(4);
});

it("2  0 should be 0", () => {
	expect(functions.multiply(2, 0)).toBe(0);
});

it("-2 * -2 should be 4", () => {
	expect(functions.multiply(-2, -2)).toBe(4);
});

it("2 / 2 should be 1", () => {
	expect(functions.divide(2, 2)).toBe(1);
});

it("2 / 0 should be undefined", () => {
	expect(functions.divide(2, 0)).toBeDefined();
});

it("2 / 0 should be undefined", () => {
	expect(functions.divide(2, 0)).toBe(Infinity);
});
