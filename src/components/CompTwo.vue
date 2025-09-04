<!-- Scoped Styling -->
<!-- <template>
    <p>This p-tag belongs to 'CompTwo.vue'</p>
</template>

<script></script>

<style scoped>
    p {
		border: dashed black 1px;
		margin: 10px;
		padding: 10px;
		display: inline-block;
        text-transform: uppercase;
		background-color: lightcoral;
    }
</style> -->
<!-- Global Components -->
<!-- <template>
    <div class="compTwoDiv">
        <p>CompTwo.vue (global)</p>
    </div>
</template>

<script>
</script>

<style scoped>
	p {
		font-weight: bold;
	}
	div {
        background-color: lightpink;
    }
</style> -->
<!-- Keep alive -->
<template>
    <div>
        <h2>Component Two</h2>
        <input type="text" v-model="msg" placeholder="Write something...">
        <p>Your message:</p>
        <p><strong>{{ this.msg }}</strong></p>
    </div>
</template>

<script>
  export default {
    name: 'CompTwo',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightpink;
    }
    strong {
      background-color: yellow;
      padding: 5px;
    }
</style>         