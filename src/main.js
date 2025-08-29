
import { createApp } from 'vue'
import App from './App.vue'
// import TodoItem from './components/TodoItem.vue'
// import FoodItem from './components/FoodItem.vue'
// import CompOne from './components/CompOne.vue'
// import CompTwo from './components/CompTwo.vue'
import CompSlot from './components/CompSlot.vue'
const app = createApp(App)
// app.component('food-item',FoodItem)
// app.component('todo-item', TodoItem)
// app.component('comp-one', CompOne)
// app.component('comp-two', CompTwo)
app.component('comp-slot',CompSlot)
app.mount('#app')