import {formatDuration} from "./duration";

test("formats minutes and seconds", () => {
    expect(formatDuration(123)).toBe("2m3s");
});
