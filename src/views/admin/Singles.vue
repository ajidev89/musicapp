<template>
  <Template>
      <div class="flex justify-between mb-8">
          <div class="flex space-x-4 py-4">
              <p class="font-semibold text-gray-800" >Singles</p>
              <p class="font-semibold text-gray-400" >Add Single</p>
          </div>
          <div class="" >
              <input type="search" name="" id="" class="text-sm p-3 w-56 rounded border focus:outline-none focus:border-indigo-600" placeholder="Search Songs">
          </div>
      </div>

      <div v-show="isSingle" class="grid grid-cols-3 gap-4" >
          <div v-for="single in singles" :key="single" class="border-t-2 border-indigo-600 bg-white shadow-lg rounded p-4">
              <div>
                  <p class="text-xs uppercase" >Track Name</p>
                  <div class="font-semibold" >{{  single.name }}</div>
              </div>

              <div class="my-4">
                  <p class="text-xs uppercase" >Artist</p>
                  <div class="font-semibold">{{ single.artist }}</div>
              </div>

              
              <div class="flex justify-end space-x-4 mt-4" >
                  <button class="text-red-600 text-sm" >Delete</button>
                  <button class="text-sm bg-indigo-600 p-2 rounded text-gray-100" >Update</button>
              </div>
          </div>
      </div>
  </Template>
</template>

<script>

import Template from "@/components/admin/template.vue";

export default {
    name:"Dashboard",
    components:{
        Template
    },
    data(){
      return{
        isSingle:true,
        singles:[
          { name:"Dreams Unfold", artist:"Joyner Lucas", tracklist: 23 },
          { name:"Your Spirit", artist:"Tasha Cobbs Lenoard", tracklist: 23 },
          { name:"Confessions", artist:"AV", tracklist: 23 },
          { name:"Dreams Unfold", artist:"Joyner Lucas", tracklist: 23 },
          { name:"Your Spirit", artist:"Tasha Cobbs Lenoard", tracklist: 23 },
          { name:"Confessions", artist:"AV", tracklist: 23 },
          { name:"Dreams Unfold", artist:"Joyner Lucas", tracklist: 23 },
          { name:"Your Spirit", artist:"Tasha Cobbs Lenoard", tracklist: 23 },
          { name:"Confessions", artist:"AV", tracklist: 23 },
        ]
      }
    }
}
</script>

<style>

</style>