import { OutputRow } from 'Components/OutputRow/OutputRow';
import { RouletteColor, RouletteNumber, rouletteNumbers, RouletteRow, RouletteSector } from '../../shared/storage/data';
import { OutputColors } from '../OutputColors/OutputColors';
import { OutputSector } from '../OutputSector/OutputSector';
import './OutputData.css';

interface OutputDataProps {
    setRows: (num: RouletteNumber) => void;
    setColors: (num: RouletteNumber) => void;
    setSectors: (num: RouletteNumber) => void;
    setNumbers: (num: RouletteNumber) => void;
    countNumbers: Object;
    visibleCount: boolean;
    colors: RouletteColor[];
    sectors: RouletteSector[];
    rows: RouletteRow[];
}

const OutputData = (props: OutputDataProps) => {
    const {
        colors,
        setColors,
        sectors,
        setSectors,
        visibleCount,
        countNumbers,
        setRows,
        rows,
        setNumbers
    } = props;

    const items = Object.entries(rouletteNumbers).map(([number, color]) => {
        const num = number as RouletteNumber;
        return <div
            className={`${color === 'green' ? 'green absolute' : color} item`}
            key={number}
            onClick={() => {
                setColors(num);
                setSectors(num);
                setNumbers(num);
                setRows(num);
            }}>
            <span className='num-rotate'>{num}</span>
        </div>
    });

    const countItems = Object.entries(countNumbers).map(([number, count]) => {
        const num = number as RouletteNumber;
        return <div className={`${num === "0" || num === "00" ? 'green absolute' : ''} item`}>
            <span className='count-num'>{count}</span>
        </div >
    });

    return (
        <>
            <div className='items-output'>
                {items}
                <OutputSector data={sectors} />
                <OutputRow data={rows} />
            </div>
            <OutputColors data={colors} />
            { visibleCount 
                ? <div className='wrapper-count'>
                    <div className='items-count'>
                        {countItems}
                    </div>
                </div>
                : ""
            }
        </>
    )
}

export default OutputData;
