import { getRow } from "shared/func/Row/getRows";
import { RouletteRow } from "shared/storage/data";
import './OutputRow.css';

interface OutputRowProps {
    data: RouletteRow[];
}

export const OutputRow: React.FC<OutputRowProps> = ({ data }) => {
    const row = getRow(data);
    return (
        <div className="block_row">
            <div className="item_row">{row["1"]}</div>
            <div className="item_row">{row["2"]}</div>
            <div className="item_row">{row["3"]}</div>
        </div>
    );
};