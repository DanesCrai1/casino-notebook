import { RouletteRow } from "shared/storage/data";

export const getRow = (arrRows: (RouletteRow)[]) => {
    const result = {
        "1": 0,
        "2": 0,
        "3": 0,
        "0": 0
    };

    for (const row of arrRows) {
        result[row] += 1
    }

    return result;
}