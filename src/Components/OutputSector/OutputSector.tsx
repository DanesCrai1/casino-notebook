import { getSectors } from "shared/func/Sector/getSectors";
import { RouletteSector } from "shared/storage/data";
import './OutputSector.css';

interface OutputSectorProps {
    data: RouletteSector[];
}

export const OutputSector: React.FC<OutputSectorProps> = ({ data }) => {
    const sector = getSectors(data);
    return (
        <div className="block_sector">
            <div className="item_sector">{sector["1"]}</div>
            <div className="item_sector">{sector["2"]}</div>
            <div className="item_sector">{sector["3"]}</div>
        </div>
    );
};