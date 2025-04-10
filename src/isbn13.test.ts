import { isValid } from "./isbn13";

describe("isValid", () => {
    test("valid ISBN-13 returns true", () => {
        expect(isValid("9780306406157")).toBe(true);
        expect(isValid("9781861972712")).toBe(true);
        expect(isValid("9791234567896")).toBe(true);
    });

    test("invalid ISBN-13 returns false", () => {
        expect(isValid("9780306406158")).toBe(false);
        expect(isValid("9791234567890")).toBe(false);
    });

    test("ISBN with wrong length returns false", () => {
        expect(isValid("978030640615")).toBe(false);
        expect(isValid("97803064061570")).toBe(false);
    });

    test("ISBN with non-digit characters returns false", () => {
        expect(isValid("97803A6406157")).toBe(false);
        expect(isValid("97803064X6157")).toBe(false);
    });
});
