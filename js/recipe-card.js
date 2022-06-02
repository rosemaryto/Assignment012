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
const ing1 = new Ingredient('3 Avacados')
const ing2 = new Ingredient('4 Avacados')
const ing3 = new Ingredient('5 Avacados')
//ADD INGREDIENTS TO RECEIPE
recipe1.addIngredient(ing1)
recipe1.addIngredient(ing2)
recipe1.addIngredient(ing3)


console.log(`${recipe1.showRecipe()}`)




