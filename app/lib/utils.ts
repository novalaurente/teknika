export function sortDataBySpecificOrder(data: string[], sortOrder: string[]) {
  data.sort((a, b) => {
    const indexA = sortOrder.indexOf(a);
    const indexB = sortOrder.indexOf(b);

    // If both elements are in the sortOrder array, compare their positions
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    // If one element is in the sortOrder array and the other is not, prioritize the one in the sortOrder array
    if (indexA !== -1) {
      return -1;
    }
    if (indexB !== -1) {
      return 1;
    }

    // If neither element is in the sortOrder array, compare them alphabetically
    return a.localeCompare(b);
  });

  return data;
}
