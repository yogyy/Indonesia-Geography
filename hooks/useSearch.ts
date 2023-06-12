import * as React from 'react';
import { useDebounce } from './use-debounce';
import axios from 'axios';

export function useSearch(url: string) {
  const [query, setQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const debouncedValue = useDebounce<string>(query, 500);

  const searchUrl = React.useCallback(async (query: string) => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    if (query.length >= 3) {
      const { data: response } = await axios.get(url);
      setSearchResults(response.data);
    } else {
      setSearchResults([]);
    }
  }, []);

  React.useEffect(() => {
    if (debouncedValue) {
      searchUrl(debouncedValue);
    }
  }, [debouncedValue, searchUrl]);

  return { query, setQuery, searchResults, debouncedValue };
}
