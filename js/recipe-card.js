//CLASS FOR RECIPE
class Recipe {
    constructor(title,servings,ingredients) {
        this.title = title
        this.servings = servings
        this.ingredients = [] 
    }
    addIngredient = function(ingredient) {
        this.ingredients.push(ingredient)
    }
    showRecipe = function() {
        for (let i = 0; i < this.ingredients.length; i++) {
            console.log(`${this.ingredients[i]}`)
        }
    }
}

//CLASS FOR EACH INGREDIENT
class Ingredient {
    constructor(ingredient) {
        this.ingredient = ingredient
    }
}

//CREATE NEW INSTANCE OF RECIPE
const recipe1 = new Recipe('Guacamole','4')

//CREATE NEW INSTANCE OF INGREDIENT
const ing1 = new Ingredient('-3 Avacados')
const ing2 = new Ingredient('-1 Lime')
const ing3 = new Ingredient('-1 Teaspoon Salt')
const ing4 = new Ingredient('-1/2 Cup Onion')
const ing5 = new Ingredient('-3 Tablespoons Cilantro')
const ing6 = new Ingredient('-2 Diced Tomatoes')
const ing7 = new Ingredient('-1 Teaspoon Garlic')
const ing8 = new Ingredient('-1 Pinch Ground Pepper')



//ADD INGREDIENTS TO RECEIPE
recipe1.addIngredient(ing1)
recipe1.addIngredient(ing2)
recipe1.addIngredient(ing3)
recipe1.addIngredient(ing4)
recipe1.addIngredient(ing5)
recipe1.addIngredient(ing6)
recipe1.addIngredient(ing7)
recipe1.addIngredient(ing8)



console.log(`${recipe1.showRecipe()}`)




