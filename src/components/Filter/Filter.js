import React from 'react';
import './Filter.css';

const Filter = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="filter">
            <div className='filter-left'>
                <div className="fil-date">
                    <select name="dateRange" value={ filters.dateRange } onChange={ handleChange }>
                        <option value="">Filter by Dates</option>
                        <option value="2023-2024">2023-2024</option>
                        <option value="2024-2025">2024-2025</option>
                    </select>
                </div>
                <div className="fil-type">
                    <select name="type" value={ filters.type } onChange={ handleChange }>
                        <option value="">Filter by Types</option>
                        <option value="Signature">Signature</option>
                        <option value="Standalone">Standalone</option>
                    </select>
                </div>
            </div>
            <div className="filter-right search">
                <input
                    type="text"
                    name="search"
                    value={ filters.search }
                    onChange={ handleChange }
                    placeholder="Search retreats by title"
                />
            </div>
        </div>
    );
};

export default Filter;
