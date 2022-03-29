import { useState } from 'react';
import RatingCard from './components/RatingCard/RatingCard';
import RatingCardSuccess from './components/RatingCardSuccess/RatingCardSuccess';
import './styles/App.css';

function App() {
  const [ratingSuccess, setRatingSuccess] = useState(false);
  const [totalRating, setTotalRating] = useState(0);

  return (
    <div className="App">
      {!ratingSuccess ?
        <RatingCard
          totalRating={totalRating}
          setTotalRating={totalRating => {
            console.log({ totalRating });
            setTotalRating(totalRating)
          }}
          onSubmit={() => {
            console.log("on Submit");
            setRatingSuccess(true)
          }}
        />
        : <RatingCardSuccess totalRating={totalRating} />
      }
    </div>
  );
}

export default App;
