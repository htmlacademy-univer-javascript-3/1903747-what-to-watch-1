export function div(val: number, by: number) {
  return (val - val % by) / by;
}

export function sortByAlpabet(array: string[]) {
  return array.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}
