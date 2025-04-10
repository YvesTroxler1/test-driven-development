import { play } from "./rock-paper-scissors";

describe("play", () => {
    test.each([
        ["rock", "scissors", 1],
        ["scissors", "paper", 1],
        ["paper", "rock", 1],
        ["scissors", "rock", 2],
        ["paper", "scissors", 2],
        ["rock", "paper", 2],
        ["rock", "rock", 0],
        ["paper", "paper", 0],
        ["scissors", "scissors", 0],
    ])("%s vs %s → %i", (p1, p2, expected) => {
        expect(play(p1, p2)).toBe(expected);
    });

    test("ignores casing and trims input", () => {
        expect(play(" Rock ", "SCISSORS")).toBe(1);
        expect(play(" Paper ", " paper ")).toBe(0);
        expect(play("ScIsSoRs", "RoCk")).toBe(2);
    });

    test("throws error on invalid moves", () => {
        expect(() => play("banana", "rock")).toThrow("Invalid move: banana");
        expect(() => play("rock", "water")).toThrow("Invalid move: water");
    });
});
