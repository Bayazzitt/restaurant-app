import React from 'react';

function Nav({restaurants, setRestaurants}) {

  const fetchRestaurant = async () => {
    const response = await fetch("https://random-data-api.com/api/restaurant/random_restaurant");
    const data = await response.json();
    setRestaurants([...restaurants, data])
  }

  return (
  <nav className='navbar'>
      <button onClick={fetchRestaurant}> Add New Restaurant </button>
  </nav>
  );
}

export default Nav;
