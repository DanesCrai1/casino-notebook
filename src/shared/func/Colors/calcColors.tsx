import { RouletteNumber, rouletteNumbers } from "shared/storage/data";

export const calcColors = (number: RouletteNumber) => {
    return rouletteNumbers[number];
}