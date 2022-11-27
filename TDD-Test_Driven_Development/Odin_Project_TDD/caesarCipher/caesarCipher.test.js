import caesarCipher from "./caesarCipher";

it("Wraps from z to a", () => {
	expect(caesarCipher("Z", 2)).toEqual("B");
});

it("Works with different cases", () => {
	expect(caesarCipher("mooniiDev", 5)).toEqual("rttsnnIja");
});

it("Works with punctuation", () => {
	expect(caesarCipher("Hello, World!", 5)).toEqual("Mjqqt, Btwqi!");
});
