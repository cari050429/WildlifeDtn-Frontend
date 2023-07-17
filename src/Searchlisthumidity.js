import React from 'react';
import { Link } from 'react-router-dom';

export default function Searchlisthumidity({ results }) {
  return (
    <div className='search-list'>
      {results.map(result => (
        <div className='data-preview' key={result.pk}>
            <Link to={`/Search/humidity/${result.pk}`}>
            <p>Data Temperature: {result.humidity}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
