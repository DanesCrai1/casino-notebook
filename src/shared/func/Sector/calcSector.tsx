import { RouletteNumber, RouletteSector } from "shared/storage/data";

export const calcSector = (num: RouletteNumber): RouletteSector => {
    const sector_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const sector_2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    const sector_3 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
    
    const number = parseInt(num);

    if (sector_1.includes(number)) {
        return 1; 
    } else if (sector_2.includes(number)) {
        return 2;
    } else if (sector_3.includes(number)) {
        return 3;
    } else {
        return 0; 
    }
}