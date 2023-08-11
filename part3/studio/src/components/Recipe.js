const RecipeAuthor = () => {
   let authorLink = "https://www.acouplecooks.com/";
   let authorPhoto = "https://www.acouplecooks.com/wp-content/uploads/2021/06/bio.jpg";
   let authorName = "Sonja & Alex";

   return (
      <div>
         <img src={authorPhoto} alt = "Sonja & Alex" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "1 ½ tablespoons lemon zest (2 large lemons)",
      "1 ¼ cups granulated sugar",
      "¼ cup unsalted butter, melted",
      "⅓ cup neutral oil",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "1 teaspoon baking powder",
      "½ teaspoon baking soda",
      "½ teaspoon kosher salt",
      "1 tablespoonlemon juice",
      "2 cups all-purpose flour",
      "2 cups shredded zucchini"
   ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
            <li>{ingredients[8]}</li>
            <li>{ingredients[9]}</li>
            <li>{ingredients[10]}</li>
            <li>{ingredients[11]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.acouplecooks.com/wp-content/uploads/2023/07/Lemon-zucchini-bread-008.jpg" alt="Lemon Zhucchini Bread" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}