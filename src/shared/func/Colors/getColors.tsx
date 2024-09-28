import { RouletteColor } from "shared/storage/data";

export const getColors = (arrColors: (RouletteColor)[]) => {
    const result = {
        "red": 0,
        "black": 0,
        "green": 0
    };

    for (const color of arrColors) {
        result[color] += 1
    }

    return result;
}