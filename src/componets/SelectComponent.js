import React, {useState} from 'react';

const SelectComponent = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const products = [
        {
            id: 1,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33'
            },
            price: [
                {value: 100, symbol: 'USD', isDefault: 0},
                {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
        },
        {
            id: 2,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 1',
            type: 'Lamps',
            specification: 'Specification 1',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33'
            },
            price: [
                {value: 100, symbol: 'USD', isDefault: 0},
                {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 2,
            date: '2017-06-29 12:09:33'
        }
    ]

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    }
    return (
        <div>
            <h3>Select</h3>
            <select name="select" value={selectedOption} onChange={handleSelectChange}>
                <option>Select an option</option>
                {products.map((el,i) => <option key={i.toString()}>{el.type}</option>)}
            </select>
            {selectedOption && <p>Select option : {selectedOption}</p>}
        </div>
    );
};

export default SelectComponent;