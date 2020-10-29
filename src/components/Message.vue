<template>
    <div v-bind:id="align=='right' ? 'div-right':'div-left'">
        <p  v-bind:id="align=='right' ? 'p-right':'p-left'">{{ data.text }}</p>
    </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['data', 'user'],
  computed: {
    align(){
      let res = this.data['sender']==this.user ? 'left' : 'right'
      return res 
      
    }
  }
}
</script>

<style scoped>
div{
  border: solid;
  width: 35%;
}
#div-right{
  align-self: flex-end;
}
#p-right{
  text-align: right;
}
#div-left{
  align-self: flex-start;
}
#p-left{
  text-align: left;
}
</style>
