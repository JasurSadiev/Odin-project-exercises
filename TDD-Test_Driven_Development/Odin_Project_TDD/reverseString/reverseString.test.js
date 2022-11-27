import reverseString from "./reverseString";

it("Hello World should be dlrow olleH", () => {
	expect(reverseString("Hello World")).toBe("dlroW olleH");
});

it("12ABCD should be DCBA21", () => {
	expect(reverseString("12ABCD")).toBe("DCBA21");
});

it("' ' should be ' '", () => {
	expect(reverseString(" ")).toBe(" ");
});
it("H should be H", () => {
	expect(reverseString("H")).toBe("H");
});

it("racecar should be racecar", () => {
	expect(reverseString("racecar")).toBe("racecar");
});
