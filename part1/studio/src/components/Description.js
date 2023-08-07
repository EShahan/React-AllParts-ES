import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://www.acouplecooks.com/";
    let authorPhoto = "https://www.acouplecooks.com/wp-content/uploads/2021/06/bio.jpg";
    let authorName = "Sonja & Alex";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Sonja & Alex" className={styles.imageUpdates} />
            <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>A Couple Of Cooks</a> 
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
    
        return (
            <div> 
                <div>
                    <h1>Lemon Zhucchini Bread</h1>
                    <p>This lemon zucchini bread is incredibly moist with a bright citrus zing! Bake it up and top it with a zesty glaze.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;