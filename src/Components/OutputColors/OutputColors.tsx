import { getColors } from "shared/func/Colors/getColors";
import { RouletteColor } from "shared/storage/data";
import './OutputColors.css';

interface OutputColorsProps {
    data: RouletteColor[];
}

export const OutputColors: React.FC<OutputColorsProps> = ({ data }) => {
    const colors = getColors(data);

    return (
        <div className="block_colors">
            <span className="red_color item_color">{colors['red']}</span>
            <span className="black_color item_color">{colors['black']}</span>
            <span className="green_color item_color">{colors['green']}</span>
        </div>
    );
};