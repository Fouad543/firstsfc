<!-- Vue / SFC / Components / Props / v-for / $ emit() (FoodItem.vue) -->
<!-- <template>
	<h1>Food</h1>
	<p>The toggle button on the component emits an event to the parent "App.vue". The favorite status is modified in "App.vue", and the updated status is sent back to the component so that the image is toggled to reflect the favorite status.</p>
	<p>The result looks exactly like before, but now the favorite staus is modified where it should be in "App.vue" instead of in the "FoodItem.vue" component.</p>
	<div id="wrapper">
		<food-item
		v-for="x in foods"
		:key="x.name"
		:food-name="x.name"
		:food-desc="x.desc"
		:is-favorite="x.favorite"
		@toggle-favorite="receiveEmit"/>
	</div> 
</template>

<script>
	export default {
		data() { 
			return {
				foods: [
					{ name: 'Apples', desc: 'Apples are a type of fruit that grow on trees.', favorite: true},
					{ name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', favorite: false},
					{ name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', favorite: false},
					{ name: 'Fish', desc: 'Fish is an animal that lives in water.', favorite: true},
					{ name: 'Cake', desc: 'Cake is something sweet that tates good.', favorite: false}
				]
			};
		},
		methods: {
			receiveEmit(foodId) {
				let foundFood = this.foods.find(
				food => food.name === foodId
			);
			foundFood.favorite = !foundFood.favorite;
			}
		}
	}
</script>

<style>
	#wrapper {
		display: flex;
		flex-wrap: wrap;
	}
	#wrapper > div {
		border: dashed black 1px;
		flex-basis: 120px;
		margin: 10px;
		padding: 10px;
		background-color: lightgreen;
	}
</style> -->
<!-- /////////////////////////// -->
<!-- VUE Fallthrought Attributes -->
<!-- TodoItem.vue -->
<!-- /////////////////////////// -->
<!-- <template>
  <h3>Todo List</h3>
  <p>In this example, the style attribute falls through from App.vue into the li element which is the components root element.</p>
  <ul>
    <todo-item
      v-for="x in items"
      :key="x"
      :item-name="x"
      style="background-color: lightgreen"
    />
  </ul>
  <input id="add_task" name="new_task" placeholder="Add things to do here" v-model="newItem" @keydown.enter="addItem">
  <button @click="addItem">Add</button>
</template>

<script>
	export default {
		data() { 
			return {
			newItem: '',
			items: ['Buy apples','Make pizza','Mow the lawn']
			};
		},
		methods: {
			addItem() {
			this.items.push(this.newItem);
			this.newItem = '';
			}
		}
	}
</script>

<style>
	ul {
		width: 150px;
	}
</style>     -->
<!-- Vue scoped styling -->
<!-- CompOne.vue && CompTwo.vue -->
<!-- <template>
  <div>
    <h3>Scoped Styling</h3>
    <p>This p-tag belongs to 'App.vue'</p>
    <comp-one />
    <comp-two />
  </div>
</template> -->
<!-- /////////////////////////// -->
<!-- // Vue local Components /// -->
<!-- // CompOne CompTwo.vue /// -->
<!-- /////////////////////////// -->
<!-- <template>
	<div>
		<h3>Local Component</h3>
		<p>The CompOne.vue component is a local component and can only be used inside App.vue.</p>
		<comp-one /> <br>
		<comp-two />
	</div>
</template>

	<script>
	import CompOne from './components/CompOne.vue';

	export default {
		components: {
		'comp-one': CompOne
		}
	}
</script>

<style>
	p {
		width: 200px;
	}
	#app div {
		border: dashed black 1px;
		margin: 10px;
		padding: 10px;
		display: inline-block;
	}
	.compOneDiv {
		background-color: lightgreen;
	}
	.compTwoDiv {
		background-color: lightcoral;
	}
</style>                -->
<!-- //////////////// -->
<!-- // Vue Slots /// -->
<!-- // CompSlot.vu// -->
<!-- //////////////// -->
<!-- <template>
	<h3>Slots in Vue</h3>
	<p>We create card-like div boxes from the foods array.</p>
	<div id="wrapper">
		<comp-slot v-for="x in foods">
			<img v-bind:src="x.url">
			<h4>{{x.name}}</h4>
			<p>{{x.desc}}</p>
		</comp-slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				foods: [
					{ name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'img_apple.svg'},
					{ name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: 'img_pizza.svg'},
					{ name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: 'img_rice.svg'},
					{ name: 'Fish', desc: 'Fish is an animal that lives in water.', url: 'img_fish.svg'},
					{ name: 'Cake', desc: 'Cake is something sweet that tates good but is not considered healthy.', url: 'img_cake.svg'}
				]
			}
		}
	}
</script>

<style>
	#wrapper {
		display: flex;
		flex-wrap: wrap;
	}
	#wrapper img {
		display: block; 
		margin: auto; 
		width: 60%;
	}
</style>   -->

<!-- //////////////// -->
<!-- // Vue v-slot /// -->
<!-- // CompSlot.vu// -->
<!-- //////////////// -->

<!-- <template>
	<h1>App.vue</h1>
	<p>The component has two div tags with one slot in each.</p>
	<comp-slot>
		<template v-slot:bottomSlot>
			<h4>The bottom slot!</h4>
			<p>This p tag and the h4 tag above are directed to the bottom slot with the v-slot directive used on the template tag.</p>
		</template>
		<template #TopSlot>
			<h4>The Top slot!</h4>
		</template>
		<p>
			'Default Slot!'
		</p>
	</comp-slot>
</template>
<script></script>
<style>
	#app {
		width: 300px;
	}
</style>         -->

<!-- //////////////// -->
<!-- // Vue Scoped slot /// -->
<!-- // CompSlot.vu// -->
<!-- //////////////// -->


<!-- Receive Data from Scoped Slot -->
<!-- <template>
  <h1>Local Component</h1>
  <p>App.vue controls how local data from the scoped slot is rendered.</p>
  <comp-slot v-slot="dataFromSlot">
    <h2>{{ dataFromSlot.lclData }}</h2>
  </comp-slot>
  
  
</template> -->

<!-- Scoped slot with Array -->
<!-- <template>
	<comp-slot v-slot="food">
		<h2>{{ food.foodName }}</h2>
	</comp-slot>
</template>
<script></script>
<style>
#app {
		width: 300px;
	}
	h2 {
		background-color: lightgreen;
		padding: 10px;
	}
</style>                               -->

<!-- Scoped slot with an Array of Objects-->
 <!-- <template>
	<comp-slot v-slot="food">
  <hr>
  <h2>{{ food.foodName }}<img :src=food.foodUrl></h2>
  <p>{{ food.foodDesc }}</p>
</comp-slot>
 </template>
 
<style>
	#app {
		width: 300px;
	}
	h2, .greenP {
		background-color: lightgreen;
		padding: 10px;
		margin: 0;
	}
	img {
		float: right;
		height: 70px;
		margin-left: 10px;
	}
</style>  -->

<!-- Static Data from a Scoped Slot-->
<!-- <template>
  <h1>Scoped Slots</h1>
  <p>App.vue controls how local data from the scoped slot is rendered.</p>
  <hr>
  <comp-slot v-slot="texts">
    <h2>{{ texts.staticText }}</h2>
    <p class="greenP">{{ texts.dynamicText }}</p>
  </comp-slot>
</template>

<script></script>

<style>
  #app {
    width: 300px;
  }
  h2, .greenP {
    background-color: lightgreen;
    padding: 10px;
  }
</style> -->
<!-- Static Data from a Named Scoped Slot-->
<!-- <template>
  <h1>Named Scoped Slots</h1>
  <p>Named scoped slots "leftSlot" and "rightSlot" send different data to App.vue from the SlotComp.vue component.</p>
  <hr>
  <comp-slot #leftSlot="leftProps">
    <div>{{ leftProps.text }}</div>
	<!--     name="leftSlot"
    :text="leftText" -->

  <!-- </comp-slot>
  <comp-slot #rightSlot="rightProps">
    <div>{{ rightProps.text }}</div>
  </comp-slot> -->
<!-- </template> --> -->

<!-- <script></script>

<style>
  #app {
    width: 300px;
  }
  #app > div {
    display: inline-block;
    background-color: lightgreen;
    width: 100px;
    padding: 10px;
    margin: 10px;
  }
</style>   -->

<!-- VUE Dynamic Components -->
<!-- VUE Comp One CompTwo -->
<!-- <template>
  <h1>Dynamic Components</h1>
  <p>With &lt;KeepAlive :max="2"&gt; only the last two visited components will remember the user input.</p>
  <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-one'"> One</label>
  <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-two'"> Two</label>
  <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-three'"> Three</label>
  <KeepAlive :max="2" >
    <component :is="compName"></component>
  </KeepAlive>
</template>

<script>
  export default {
    data () {
      return {
        compName: 'comp-one'
      }
    }
  }
</script>

<style>
  #app {
    width: 350px;
    margin: 10px;
  }
  #app > div {
    border: solid black 2px;
    padding: 10px;
    margin-top: 10px;
  }
  h2 {
    text-decoration: underline;
  }
  label {
    display: inline-block;
    padding: 5px;
  }
  label:hover {
    cursor: pointer;
  }
</style>                 -->
<!-- VUE Teleport -->
<!-- VUE Comp One -->
 <template>
  <h1>Teleport</h1>
  <p>With &lt;teleport to="body"&gt; we move the red &lt;div&gt; from inside the component to the root of the body tag.</p>
  <comp-one></comp-one>
</template>

<script></script>

<style>
#app {
  width: 350px;
  margin: 10px;
}

#app > div {
  border: solid black 2px;
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(186, 228, 255);
}

h2 {
  text-decoration: underline;
}
</style> 