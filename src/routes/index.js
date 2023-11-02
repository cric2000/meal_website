import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import MealsByName from '../pages/MealsByName.vue'
import MealsByLetter from '../pages/MealsByLetter.vue'
import MealsByIngredient from '../pages/MealsByIngredient.vue'
import DefaultLayout from '../components/DeafultLayout.vue'
import MealDetails from '../pages/MealDetails.vue'
import Ingredients from '../pages/Ingredients.vue'

const routes=[
    {
        path:'/',
        component:DefaultLayout,
        children:[
            {
                path:'/',
                name:'home',
                component:Home
            },
            {
                path:'/by-name/:name?',
                name:'byName',
                component:MealsByName
            },
            {
                path:'/by-letter/:letter?',
                name:'byLetter',
                component:MealsByLetter
            },
            {
                path:'/by-ingredient/:ingredient?',
                name:'byIngredient',
                component:MealsByIngredient
            },
            {
                path:'/ingredients',
                name:'ingredients',
                component:Ingredients
            },
            {
                path:'/meal/:id',
                name:'mealDetails',
                component:MealDetails
            }
        ]
    },
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;