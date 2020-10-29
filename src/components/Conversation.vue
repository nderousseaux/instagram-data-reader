<template>
  <main class="conversation">
    <div id="list">
      <label for="page-select">Choisissez une page :</label>

        <select v-model="page" name="pages" id="page_select">
            <option v-for="page in nombreDePages" :key="page" :value="page">{{ page }}</option>
        </select>
    </div>

    <div v-for="message in displayMessages" :key="message.created_at">
      <Message :data=message :user=user />
    </div>
  </main>
</template>

<script>
/* eslint-disable */

import json from '@/messages.json'
import Message from '@/components/Message'
var _ = require('lodash')

export default {

  name: 'conversation',
  components: {Message},
  data () {
    return {
      json,
      user: 'ccarla_car',
      page: null
    }
  },
  computed: {
    conversation(){
      let user = this.user
      let conversation = _.find(this.json, function(o) { return o['participants'].includes(user) })["conversation"]
      return conversation
    },
    displayMessages () {
      let length = Object.keys(this.conversation).length
      let res = []

      for(let i = length-1 - (100*this.page); i>length-101-(100*this.page) && i>0; i--){
        res.push(this.conversation[i])
      }
      return res
    },
    nombreDePages (){
      let length = Object.keys(this.conversation).length
      let res = [...Array(Math.trunc(length/100) +1 ).keys()];
      console.log(this.page)
      return res
    }
  },
}
</script>

<style scoped>
#list{
  position: fixed;
  width: 10%;
  top: 1em;
  right: 1em;
  
}
main{
  width: 50%;
  border: solid;
  margin-left: auto;
  margin-right: auto;
  
}
div{
  display: flex;
  flex-direction: column;
  width: 100%;
}

</style>
