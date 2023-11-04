import React, { useState } from 'react';

const SearchComponent = () => {
    // Sample data (you can replace this with your own data)
    const initialItems = [
        'Apple',
        'Banana',
        'Cherry',
        'Grapes',
        'Kiwi',
        'Orange',
        'Peach',
        'Strawberry',
    ];

    // State to hold the search input and filtered items
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(initialItems);

    // Function to handle search input changes
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        // Filter the items based on the search term
        const filteredItems = initialItems.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredItems(filteredItems);
    };

    return (
        <div>

            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                <h3>Search</h3>
                {filteredItems.map((item, index) => (
                    <li style={{listStyleType: 'none'}} key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;