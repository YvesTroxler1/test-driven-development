import { formatDuration } from "./duration";

describe("formatDuration", () => {
    test("33 seconds -> '33s'", () => {
        expect(formatDuration(33)).toBe("33s");
    });

    test("123 seconds -> '2m3s'", () => {
        expect(formatDuration(123)).toBe("2m3s");
    });

    test("500 seconds -> '8m20s'", () => {
        expect(formatDuration(500)).toBe("8m20s");
    });

    test("3600 seconds -> '1h'", () => {
        expect(formatDuration(3600)).toBe("1h");
    });

    test("3999 seconds -> '1h6m39s'", () => {
        expect(formatDuration(3999)).toBe("1h6m39s");
    });

    test("0 seconds -> '0s'", () => {
        expect(formatDuration(0)).toBe("0s");
    });

    test("negative seconds throw an Error", () => {
        expect(() => formatDuration(-5)).toThrow("Duration cannot be negative");
    });

    test("decimal seconds are rounded (123.4 -> '2m3s')", () => {
        expect(formatDuration(123.4)).toBe("2m3s");
    });

    test("rounding test: 59.4 -> '59s', 59.6 -> '1m'", () => {
        expect(formatDuration(59.4)).toBe("59s");
        expect(formatDuration(59.6)).toBe("1m");
    });
});
