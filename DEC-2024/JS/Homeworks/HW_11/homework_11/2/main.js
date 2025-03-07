// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes
// та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час
// відображення.

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(({recipes}) => {
        console.log(recipes);
        let container = document.createElement('div');
        document.body.appendChild(container);
        container.style.width = '70vw';


        for (const recipe of recipes) {
            console.log(recipe);
            let recipeDiv = document.createElement('div');
            recipeDiv.style.margin = '25px';
            recipeDiv.style.padding = '25px';
            recipeDiv.style.backgroundColor = 'lightgrey';

            let divInfo = document.createElement('div');
            divInfo.style.display = 'flex';
            divInfo.style.justifyContent = 'space-evenly';
            divInfo.style.alignItems = 'center';

            let divContent = document.createElement('div');
            divContent.style.width = '35%';
            divContent.style.border = '3px solid blue';
            divContent.style.padding = '20px';
            let divLIstRecipe = document.createElement('div');
            divLIstRecipe.style.display = 'flex';
            divLIstRecipe.style.flexDirection = 'column';
            divLIstRecipe.style.gap = '10px';
            divLIstRecipe.style.justifyContent = 'center';
            divLIstRecipe.style.alignItems = 'center';


            let h3Id = document.createElement('h3');
            h3Id.innerText = `ID: ${recipe.id}`;
            h3Id.style.color = 'blue';

            let pNameContent = document.createElement('p');
            pNameContent.innerText = `Name: ${recipe.name}.`
            pNameContent.style.color = 'red';
            pMainContent = document.createElement('p');
            pMainContent.innerText = `PrepTimeMinutes: ${recipe.prepTimeMinutes}. Rating: ${recipe.rating}. Review Count: ${recipe.reviewCount}. Servings: ${recipe.servings}. UserID: ${recipe.userId}`;
            let pContent = document.createElement('p');
            pContent.innerText = `Per Serving Caloriescalories - ${recipe.caloriesPerServing}. Cook time minutes : ${recipe.cookTimeMinutes}`;
            let pDifContent = document.createElement('p');
            pDifContent.innerText = `Cuisine: ${recipe.cuisine}.Difficulty: ${recipe.difficulty}`;

            let pMeal = document.createElement('p');
            let h5Meal = document.createElement('h5');
            h5Meal.innerText = `Meal Type`;
            pMeal.appendChild(h5Meal);
            recipe.mealType.forEach(item => {
                let liMeal = document.createElement('li');
                liMeal.innerText = item;

                pMeal.appendChild(liMeal);
            })

            let pInstruct = document.createElement('p');
            let h5Instruct = document.createElement('h5');
            h5Instruct.innerText = `INSTRUCTION`;
            pInstruct.appendChild(h5Instruct);
            recipe.instructions.forEach((item, ind) => {
                let liInstruct = document.createElement('li');
                liInstruct.innerText = `${ind + 1}. ${item}`;

                pInstruct.appendChild(liInstruct);
            })

            let pTags = document.createElement('p');
            let h5Tag = document.createElement('h5');
            h5Tag.style.fontSize = '10px';
            h5Tag.innerText = 'TAGS';
            pTags.appendChild(h5Tag);
            recipe.tags.forEach(item => {
                let liTag = document.createElement('li');
                liTag.innerText = item;

                h5Tag.appendChild(liTag);
            })


            let h3Ingredient = document.createElement('h3');
            h3Ingredient.innerText = 'INGREDIENTS:';
            let ulIngredient = document.createElement('ul');
            recipe.ingredients.forEach((item) => {
                let li = document.createElement('li');
                li.innerText = `"${item}"`;

                ulIngredient.appendChild(li);
            })

            let image = document.createElement('img');
            image.src = `${recipe.image}`;
            image.style.width = '200px';


            divContent.append(h3Id, pNameContent, pMainContent, pContent, pDifContent, pMeal, pInstruct, pTags);
            divLIstRecipe.append(h3Ingredient, ulIngredient, image);
            divInfo.append(divContent, divLIstRecipe);
            recipeDiv.appendChild(divInfo);
            container.appendChild(recipeDiv);
        }


    })

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
