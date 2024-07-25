import React from 'react';
import './Pagination.css'

const Pagination = ({ page, setPage }) => (
    <div className="pagination">
        <button onClick={ () => setPage(page - 1) } disabled={ page === 1 }>
            Previous
        </button>
        <button onClick={ () => setPage(page + 1) }>
            Next
        </button>
    </div>
);

export default Pagination;
