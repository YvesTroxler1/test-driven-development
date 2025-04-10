import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints", () => {
    test("calculates a full round", () => {
        expect(calcPoints("3 20 1 17 2 4")).toBe(85);
        expect(calcPoints("2 15 1 18 3 19")).toBe(105);
    });

    test("handles incomplete rounds", () => {
        expect(calcPoints("3 20 1 5")).toBe(65);
        expect(calcPoints("1 20")).toBe(20);
        expect(calcPoints("")).toBe(0);
    });

    test("throws on invalid input", () => {
        expect(() => calcPoints("3")).toThrow();
        expect(() => calcPoints("x y")).toThrow();
        expect(() => calcPoints("3 20 1")).toThrow();
    });
});

describe("possibleCheckout", () => {
    test("returns double checkout when valid", () => {
        expect(possibleCheckout(477)).toBe("Double 12");
        expect(possibleCheckout(499)).toBe("Double 1");
        expect(possibleCheckout(501)).toBe("Double 0");
    });

    test("returns 'No Checkout Possible' when value is odd", () => {
        expect(possibleCheckout(480)).toBe("No Checkout Possible");
        expect(possibleCheckout(500)).toBe("No Checkout Possible");
    });

    test("returns 'No Checkout Possible' when value > 40", () => {
        expect(possibleCheckout(441)).toBe("No Checkout Possible");
        expect(possibleCheckout(400)).toBe("No Checkout Possible");
    });
});
