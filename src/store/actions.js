import axiosClient from '../axiosClient';

export function searchMeals({commit},keyword, loading){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(
        ({data})=>{
commit('setSearchMeals',data.meals,false)
        }
    )
}

export function searchMealsByLetters({commit},letter,loading){
    axiosClient.get(`search.php?f=${letter}`)
    .then(
        ({data})=>{
commit('setMealsByLetters',data.meals,false)
        }
    )
}

export function searchMealsByIngredients({commit},ingredient,loading){
    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(
        ({data})=>{
commit('setMealsByIngredients',data.meals,false)
        }
    )
}