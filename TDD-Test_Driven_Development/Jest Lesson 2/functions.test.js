const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
	expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to not equal 5", () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be Null", () => {
	expect(functions.isNull()).toBeNull();
});

test("Should be Falsy", () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

test("Should be Truthy", () => {
	expect(functions.checkValue(1)).toBeTruthy();
});

test("User should be Brad Traversy object", () => {
	expect(functions.createUser()).toEqual({
		firstName: "Brad",
		lastName: "Traversy",
	});
});

test("Should be under 1600", () => {
	const load1 = 800;
	const load2 = 799;
	expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test("There is no I in team", () => {
	expect("teams").not.toMatch(/I/i);
});

test("Admin should be in username", () => {
	usernames = ["john", "karen", "admin"];
	expect(usernames).toContain("admin");
});

// Working with Async Data
test("User fetched name should be Leanne Graham", () => {
	expect.assertions(1);
	return functions.fetchUser().then((data) => {
		expect(data.name).toEqual("Leanne Graham");
	});
});

//Async Await
// it("User fetched name should be Leanne Graham", async () => {
// 	// expect.assertions(1);
// 	const data = await functions.fetchUser();
// 	expect(data.name).toEqual("Leanne Graham");
// });
