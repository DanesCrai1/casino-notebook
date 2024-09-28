import { RouletteNumber, RouletteRow } from "shared/storage/data";

export const calcRow = (num: RouletteNumber): RouletteRow => {
    const row_1 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
    const row_2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
    const row_3 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
    
    const number = parseInt(num);

    if (row_1.includes(number)) {
        return 1; 
    } else if (row_2.includes(number)) {
        return 2;
    } else if (row_3.includes(number)) {
        return 3;
    } else {
        return 0; 
    }
}