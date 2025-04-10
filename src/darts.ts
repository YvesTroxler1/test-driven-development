export function calcPoints(hits: string): number {
  if (!hits.trim()) return 0;

  const parts = hits.trim().split(" ");
  if (parts.length % 2 !== 0) {
    throw new Error("Invalid input format");
  }

  let total = 0;

  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = parseInt(parts[i]);
    const sector = parseInt(parts[i + 1]);

    if (isNaN(multiplier) || isNaN(sector)) {
      throw new Error("Invalid number in input");
    }

    total += multiplier * sector;
  }

  return total;
}

export function possibleCheckout(x: number): string {
  const remaining = 501 - x;

  if (remaining < 0 || remaining % 2 !== 0) {
    return "No Checkout Possible";
  }

  const double = remaining / 2;

  if (double > 20) {
    return "No Checkout Possible";
  }

  return `Double ${double}`;
}
