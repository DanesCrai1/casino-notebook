import { useState } from 'react';
import './App.css';
import OutputData from 'Components/OutputData/OutputData';
import { RouletteColor, RouletteNumber, RouletteRow, RouletteSector } from 'shared/storage/data';
import { calcColors } from 'shared/func/Colors/calcColors';
import { calcSector } from 'shared/func/Sector/calcSector';
import { OutputNumbers } from 'Components/OutputNumbers/OutputNumbers';
import { getNumbers } from 'shared/func/Numbers/getNumbers';
import { calcRow } from 'shared/func/Row/calcRow';

function App() {
  const [colors, setColor] = useState<RouletteColor[]>([]);
  const [sectors, setSector] = useState<RouletteSector[]>([]);
  const [rows, setRows] = useState<RouletteRow[]>([]);
  const [numbers, setNumber] = useState<RouletteNumber[]>([]);
  const [countNumbers, setCountNumbers] = useState({});
  const [visibleCount, setVisibleCount] = useState(false);

  const addNewColors = (num: RouletteNumber) => {
    setColor([...colors, calcColors(num)]);
  }

  const addNewRow = (num: RouletteNumber) => {
    setRows([...rows, calcRow(num)]);
  }

  const addNewSectors = (num: RouletteNumber) => {
    setSector([...sectors, calcSector(num)]);
  }

  const addNewNumbers = (num: RouletteNumber) => {
    setNumber([...numbers, num]);
  }

  const getCountNumbers = () => {
    setCountNumbers('');
    setVisibleCount(true);
    setCountNumbers(getNumbers(numbers));
  }

  const hideVisibleCount = () => {
    setVisibleCount(false);
  }

  const deleteNumber = (targetIndex: number) => {
    const newNumbers = numbers.filter((item, index) => index !== targetIndex);
    setNumber(newNumbers);

    const newColors = colors.filter((item, index) => index !== targetIndex);
    setColor(newColors);

    const newSectors = sectors.filter((item, index) => index !== targetIndex);
    setSector(newSectors);

    const newRows = rows.filter((item, index) => index !== targetIndex);
    setRows(newRows);
  };

  return (
    <div className="Table">
      <div className='wrapper_btn-count'>
      {!visibleCount
        ? <img src={require('shared/assets/image/casino-white.svg').default} onClick={getCountNumbers} alt='Казино' className='count-btn'/>
        : <img src={require('shared/assets/image/casino-black.svg').default} onClick={hideVisibleCount} alt='Казино' className='count-btn'/>
      }
      </div>
      <OutputData
        colors={colors}
        sectors={sectors}
        setColors={addNewColors}
        setSectors={addNewSectors}
        setNumbers={addNewNumbers}
        rows={rows}
        setRows={addNewRow}
        countNumbers={countNumbers}
        visibleCount={visibleCount}
      />
      <OutputNumbers numbers={numbers} deleteNumber={deleteNumber} />
    </div>
  );
}

export default App;