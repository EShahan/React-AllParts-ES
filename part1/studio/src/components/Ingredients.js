import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
const ingredients = ["1 ½ tablespoons lemon zest (2 large lemons)", "1 ¼ cups granulated sugar", "¼ cup unsalted butter, melted", "⅓ cup neutral oil", "2 large eggs", "1 teaspoon vanilla extract", "1 teaspoon baking powder", "½ teaspoon baking soda", "½ teaspoon kosher salt", "1 tablespoonlemon juice", "2 cups all-purpose flour", "2 cups shredded zucchini"];

    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
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