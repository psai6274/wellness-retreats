import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import RetreatList from './components/RetreatList/Retreat';
import Pagination from './components/Pagination/Pagination';
import './App.css';

function App() {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [filters, setFilters] = useState({ search: '', type: '', dateRange: '' });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  //Fetch data from the Mock JSON
  const fetchRetreats = useCallback(async () => {
    try {
      const response = await axios.get(
        'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats'
      );
      setRetreats(response.data);
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
  }, []);

  useEffect(() => {
    fetchRetreats();
  }, [fetchRetreats]);

  useEffect(() => {
    const filterData = () => {
      let filtered = retreats;

      // Filter by search
      if (filters.search) {
        filtered = filtered.filter(retreat =>
          retreat.title.toLowerCase().includes(filters.search.toLowerCase())
        );
      }

      // Filter by type
      if (filters.type) {
        filtered = filtered.filter(retreat => retreat.type === filters.type);
      }

      // Filter by date range
      if (filters.dateRange) {
        const [startYear, endYear] = filters.dateRange.split('-').map(Number);
        filtered = filtered.filter(retreat => {
          const retreatYear = new Date(retreat.date * 1000).getFullYear();
          return retreatYear >= startYear && retreatYear <= endYear;
        });
      }

      setFilteredRetreats(filtered);
      setTotalPages(Math.ceil(filtered.length / 3));
      setPage(1);
    };

    filterData();
  }, [filters, retreats]);

  // Paginate filtered retreats
  const paginatedRetreats = filteredRetreats.slice((page - 1) * 3, page * 3);

  return (
    <div className="App">
      <Header />
      <Filter filters={ filters } setFilters={ setFilters } />
      <RetreatList retreats={ paginatedRetreats } />
      <Pagination page={ page } setPage={ setPage } totalPages={ totalPages } />
      <footer>© 2024 Wellness Retreats. All rights reserved.</footer>
    </div>
  );
}

export default App;
