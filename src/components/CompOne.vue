<!-- Scoped Styling -->
<!-- <template>
    <p>This p-tag belongs to 'CompOne.vue'</p>
</template>

<script></script>

<style scoped>
    p {
		border: dashed black 1px;
		margin: 10px;
		padding: 10px;
		display: inline-block;
		background-color: lightgreen;
        width: 150px;
    }
</style>  -->
<!-- Local Components -->
<!-- <template>
    <div class="compOneDiv">
        <p>CompOne.vue (local)</p>
    </div>
</template>

<script></script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>   -->
<!-- dynamic components Keep alive  -->
<!-- <template>
    <div>
        <img :src="imgSrc">
        <h2>Component One</h2>
        <p>Choose food.</p>
        <label>
            <input type="radio" name="rbgFood" 
            v-model="imgSrc" :value="'img_apple.svg'" /> 
            Apple
        </label>
        <label>
            <input type="radio" name="rbgFood" 
            v-model="imgSrc" :value="'img_cake.svg'" /> 
            Cake
        </label>
    </div>
</template>

<script>
  export default {
    name: 'CompOne',
    data () {
      return {
        imgSrc: 'img_question.svg'
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
    img {
        float: right;
        height: 100px;
        margin-top: 20px;
    }
</style> -->
<template>
  <div>
    <h2>Component</h2>
    <p>This is the inside of the component.</p>
    <Teleport to="body">
      <div 
        id="redDiv" 
        @click="toggleVal = !toggleVal" 
        :style="{ backgroundColor: bgColor }"
      >
        Hello!<br>
        Click me!
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleVal: true
    }
  },
  computed: {
    bgColor() {
      if (this.toggleVal) {
        return 'lightpink'
      }
      else {
        return 'lightgreen'
      }
    }
  }
}
</script>

<style scoped>
#redDiv {
  margin: 10px;
  padding: 10px;
  display: inline-block;
}

#redDiv:hover {
  cursor: pointer;
}
</style>      