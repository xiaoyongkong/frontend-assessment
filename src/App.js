import React, { useEffect, useState } from 'react';

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json')
      .then(response => response.json())
      .then(data => setListings(data));
  }, []);

  return (
    <div>
      <h1>Listings Page</h1>
      <ul>
        {listings.map((listing, index) => (
          <li key={index}>{listing.address}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
