'use client';

import React from 'react';
import { Input } from '../ui/input';
import { DialogButton } from './dialog-btn';
import { useSearchWilayah } from '@/hooks/useSearch';

interface Wilayah {
  code: string;
  province: string;
  regency: string;
  district: string;
  type?: string;
}

interface SearchButton {
  searchResults: Wilayah[];
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchName = ({ query, handleInputChange, searchResults, placeholder }: SearchButton) => {
  return (
    <div className="flex flex-col max-w-[900px] space-x-3 mx-auto">
      <div className="flex justify-center mt-7">
        <Input
          className="w-1/2 focus-visible:ring-offset-sky-500 min-w-[150px]"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {searchResults.map((result, _index) => (
          <DialogButton
            key={_index + result.code}
            action={false}
            desc={<pre>{JSON.stringify(result, null, 2)}</pre>}
            cancel="cancel"
            title="Details:"
          >
            {result.district ?? result.regency ?? result.province}
          </DialogButton>
        ))}
      </div>
    </div>
  );
};

const SearchProv = () => {
  const { handleInputChange, query, searchResults } = useSearchWilayah('/api/provinsi');
  return (
    <SearchName
      handleInputChange={handleInputChange}
      query={query}
      placeholder="search kabupaten..."
      searchResults={searchResults}
    />
  );
};

const SearchKab = () => {
  const { handleInputChange, query, searchResults } = useSearchWilayah('/api/kabupaten');
  return (
    <SearchName
      handleInputChange={handleInputChange}
      query={query}
      placeholder="search kabupaten..."
      searchResults={searchResults}
    />
  );
};

const SearchKec = () => {
  const { handleInputChange, query, searchResults } = useSearchWilayah('/api/kecamatan');

  return (
    <>
      <SearchName
        placeholder="search kecamatan..."
        query={query}
        searchResults={searchResults}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export { SearchProv, SearchKab, SearchKec, SearchName };
