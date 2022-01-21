import './App.css';
import Restaurant from './components/Restaurant';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {

  const [restaurants, setRestaurants] = useState([]);

  return (
    <div className="restaurants">
      <Nav restaurants={restaurants} setRestaurants={setRestaurants}/>
      {restaurants.map(herbirrt => <Restaurant restaurant={herbirrt}/>)}
    </div>
  );
}

export default App;
