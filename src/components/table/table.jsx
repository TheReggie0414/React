import React, { useState } from 'react';

export const Table = () => {
    const [selectedCell, setSelectedCell] = useState(null);

    const handleCellClick = (rowIndex, colIndex) => {
        const cellNumber = rowIndex * 4 + colIndex + 1;
        setSelectedCell(cellNumber);
    };

    const renderTable = () => {
        const tableRows = [];
        for (let i = 0; i < 4; i++) {
            const rowCells = [];
            for (let j = 0; j < 4; j++) {
                const cellNumber = i * 4 + j + 1;
                rowCells.push(
                    <td
                        key={j}
                        onClick={() => handleCellClick(i, j)}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            cursor: 'pointer',
                            backgroundColor: selectedCell === cellNumber ? '#aaf' : 'white',
                        }}
                    >
                        {cellNumber}
                    </td>
                );
            }
            tableRows.push(<tr key={i}>{rowCells}</tr>);
        }
        return tableRows;
    };

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', margin: '20px' }}>
                <tbody>{renderTable()}</tbody>
            </table>
            {selectedCell && <p style={{ marginTop: '10px' }}>Вибрана комiрка: {selectedCell}</p>}
        </div>
    );
};

export default Table;