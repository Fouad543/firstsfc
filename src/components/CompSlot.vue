<!-- <template>
    <div>
        <slot></slot>
    </div>
</template>

<script></script> -->

<style scoped>
    div {
        background-color: lightgreen;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        flex-basis: 150px;
        border-radius: 10px;
        border: solid black 2px;
        margin: 10px;
        padding: 20px 10px 0 10px;
    }
    div:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
    }


</style>  
<!-- //////////////// -->
<!-- // Vue Slots /// -->
<!-- // CompSlot.vu// -->
<!-- //////////////// -->
 <!-- <template>
    <h3>Component</h3>
    <div>
        <slot name="TopSlot"></slot>
    </div>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot name="bottomSlot"></slot>
    </div>
</template>

<script></script>

<style scoped>
    div {
        min-height: 30px;
        width: 50%;
        border: dotted black 1px;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
        font-weight: bold;
    }
</style>              -->
<!-- //////////////// -->
<!-- // Vue scoped slot /// -->
<!-- // CompSlot.vu// -->
<!-- //////////////// -->
<!-- Receive Data from Scoped Slot -->
<!-- 

<template>
    <slot v-bind:lclData="data"></slot>
</template>

<script>
export default {
    data() {
        return {
            data: 'This is local data',
			
        }
    }
}
</script> -->

<!-- Scoped slot with Array -->

<!-- <template>
  <slot
    v-for="x in foods"
    :key="x"
    :foodName="x"
  ></slot>
</template>

<script>
  export default {
    data() {
      return {
        foods: ['Apple','Pizza','Rice','Fish','Cake']
      }
    }
  }
</script> -->
<!-- ////////////////////////// -->
<!-- Scoped slot with an Array of Objects-->
<!-- ////////////////////////// -->
 <!-- <template>
  <slot
    v-for="x in foods"
    :key="x.name"
    :foodName="x.name"
    :foodDesc="x.desc"
    :foodUrl="x.url"
  ></slot>
</template>

<script>
  export default {
    data() {
      return {
        foods: [
			{ name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'img_apple.svg' },
			{ name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: 'img_pizza.svg' },
			{ name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: 'img_rice.svg' },
			{ name: 'Fish', desc: 'Fish is an animal that lives in water.', url: 'img_fish.svg' },
			{ name: 'Cake', desc: 'Cake is something sweet that tastes good but is not considered healthy.', url: 'img_cake.svg' }
       	]
      }
    }
  }
</script>
<style></style> -->
<!-- Static Data from a Scoped Slot-->
<!-- <template>
    <slot 
        staticText="This text is static"
        :dynamicText="text"
    ></slot>
</template>

<script>
	export default {
		data() {
			return {
				text: 'This text is from the data property'
			}
		}
	}
</script>

<style></style> -->
<!-- Named Scoped Slots -->
<template>
  <slot
    name="leftSlot"
    :text="leftText"
  ></slot>
  <slot
    name="rightSlot"
    :text="rightText"
  ></slot>
</template>

<script>
  export default {
    data() {
      return {
        leftText: 'This text belongs to the LEFT slot.',
        rightText: 'This text belongs to the RIGHT slot.'
      }
    }
  }
</script>