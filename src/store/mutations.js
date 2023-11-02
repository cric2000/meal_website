export function setSearchMeals(state, meals, loading) {
  state.searchMeals = meals || [];
  state.isLoading = loading
}

export function setMealsByLetters(state, meals, loading) {
  state.mealsByLetters = meals || [];
  state.isLoading = loading
}

export function setMealsByIngredients(state, meals, loading) {
  state.mealsByIngredients = meals || [];
  state.isLoading = loading
}
