/**
 * Sorts an array of objects by the given sort order and compare function.
 *
 * @param items - The array of objects to sort.
 * @param sortOrder - The sort order, 'asc' or 'desc'.
 * @param compareFn - The compare function that compares two objects. Should return < 0 if a < b, 0 if a == b, > 0 if a > b.
 * @returns The sorted array.
 */
export const sortBy = <T>(
	items: Array<T>,
	sortOrder: "asc" | "desc",
	compareFn: (compare: (a: string, b: string) => number, a: T, b: T) => number,
): T[] => {
	if (!Array.isArray(items)) items;
	const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
	const compare = (a: string, b: string) => collator.compare(String(a).trim(), String(b).trim());
	return items.sort((a, b) => {
		if (sortOrder === "asc") return compareFn(compare, a, b);
		return compareFn(compare, b, a);
	});
}