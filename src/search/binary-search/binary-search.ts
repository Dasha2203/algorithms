export const binarySearch = (
    arr: number[],
    value: number
): number | null => {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex <= endIndex) {
        const middleIndex = Math.ceil(
            (startIndex + endIndex) / 2
        );

        const middleValue = arr[middleIndex];

        if (middleValue === undefined) {
            return null;
        }

        if (middleValue === value) {
            return middleValue;
        }

        if (middleValue > value) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }

    return null;
};

const example1 = [1,2,3,4,5]

console.log(binarySearch(example1, 2))

