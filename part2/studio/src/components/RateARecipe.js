let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  const isValid = (props.rating >= 1 && props.rating <= 5);
  function GiveRating() {
    return <h3>{stars[props.rating - 1]}</h3>
  }

  return isValid ? GiveRating() : null;;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
