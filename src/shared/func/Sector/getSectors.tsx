import { RouletteSector } from "shared/storage/data";

export const getSectors = (arrSectors: (RouletteSector)[]) => {
    const result = {
        "1": 0,
        "2": 0,
        "3": 0,
        "0": 0
    };

    for (const sector of arrSectors) {
        result[sector] += 1
    }

    return result;
}