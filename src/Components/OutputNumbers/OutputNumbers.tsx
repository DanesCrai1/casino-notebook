import { useEffect, useRef } from 'react';
import { RouletteNumber, rouletteNumbers } from 'shared/storage/data';
import './OutputNumbers.css';

interface OutputNumbersProps {
    numbers: RouletteNumber[];
    deleteNumber: (index: number) => void;
}

export const OutputNumbers = (props: OutputNumbersProps) => {
    const { numbers, deleteNumber } = props;
    const blockRef = useRef<HTMLDivElement>(null); // Уточняем тип ref

    useEffect(() => {
      if (blockRef.current) {
        blockRef.current.scrollTop = blockRef.current.scrollHeight;
      }
    }, [numbers]);

    const items = numbers.map((item: RouletteNumber, index) => {
        return <div
            key={index}
            className={`${rouletteNumbers[item] === 'green' ? 'green_numbers' : rouletteNumbers[item]} item_numbers`}
            onClick={() => deleteNumber(index)}
        >
            {item}
        </div>
    });

    
    return (
        <>
            <div className='count_numbers'>{numbers.length}</div>
            <div className="block_numbers" ref={blockRef}>
                {items} {/* Display the generated items */}
            </div>
        </>
    );
};
