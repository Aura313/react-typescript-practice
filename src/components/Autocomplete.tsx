import React, { useState } from 'react';
import { debounce } from '../utils/debounce';

interface Props {
  suggestions: string[];
}

const Autocomplete: React.FC<Props> = ({ suggestions }) => {
  const message = 'Search Term';
  // console.log(message , "adjiowajio");
  const [searchTerm, setSearchTem] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);


  const getFilteredSuggestion = debounce((value: string) => {
    const filtered = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  }, 1000);

  const onHandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    getFilteredSuggestion(value);
    setSearchTem(value);
  };

  const onSuggestionSelection = (selectedSuggestion: string) => {
    setSearchTem(selectedSuggestion);
    setShowSuggestions(false);
    setFilteredSuggestions([]);
  };

  return (
    <div>
      <input type='text' value={searchTerm} onChange={onHandleInputChange} />
      <br />
      {searchTerm ? `${message}-${searchTerm}` : ''}
      {showSuggestions && searchTerm && (
        <ul>
          {filteredSuggestions.map((i, idx) => (
            <li key={idx} onClick={() => onSuggestionSelection(i)}>
              {i}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
