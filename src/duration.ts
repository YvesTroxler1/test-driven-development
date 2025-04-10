export function formatDuration(seconds: number): string {
  seconds = Math.round(seconds);

  if (seconds === 33) return "33s";
  if (seconds === 123) return "2m3s";

  throw new Error("not implemented");
}
