'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import * as React from 'react';

const SearchKab = () => {
  const [query, setQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [debouncedQuery, setDebouncedQuery] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const searchMovies = React.useCallback(async (query: string) => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    if (query.length >= 3) {
      const response = await axios.get(`/api/kabupaten?name=${query}`);
      setSearchResults(response.data.data);
      console.log(response);
    } else {
      setSearchResults([]);
    }
  }, []);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 700);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  React.useEffect(() => {
    if (debouncedQuery) {
      searchMovies(debouncedQuery);
    }
  }, [debouncedQuery, searchMovies]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.wilayah-nusantara.id/kecamatan`);
      const data = await response.data;
      // Process the data
      // console.log(data.data);
      setSearchResults(data.data);
    } catch (error) {
      // Handle errors
    }
  };
  return (
    <div className="flex flex-col mx-2 space-x-3">
      <div className="flex">
        <Input
          className="w-1/2"
          value={query}
          onChange={handleInputChange}
          placeholder="search regency"
        />
        <Button onClick={fetchData}>Search</Button>
      </div>
      <pre>{JSON.stringify(searchResults, null, 2)}</pre>
      <p>{query}</p>
    </div>
  );
};

export { SearchKab };
