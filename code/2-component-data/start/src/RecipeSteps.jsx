import React from "react";

function RecipeSteps(props) {
    // Create the list items using map
    const recipeStepsListItems = props.recipeSteps.map((recipeStep, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index}>
                { recipeStep.desc }
            </li>
        );
    });

    // return the HTML for the component
    // recipeStepsListItems will be rendered as li elements
    return (       
        <ol>
            { recipeStepsListItems }
        </ol>
    );
};

export default RecipeSteps;