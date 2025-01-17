import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/Photos';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <RecipePhoto />
          <div>
            <RecipeDescription />
            <RecipeIngredients rating={4}/>
          </div>
      </div>
    </div>
  );
}

export default App;