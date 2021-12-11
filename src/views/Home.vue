<template>
  <Header/>
    <Latest @pickedList="playList" />
    <Userpicks/>
  <FixedPlayer v-if="songList.length" :songList="songList" :position="position" />
</template>

<script>
import FixedPlayer from '@/components/FixedPlayer.vue'
import Header from '@/components/Header.vue'
import Latest from '@/components/Latest.vue'
import Userpicks from '@/components/Userpicks.vue'
export default {
  name: 'Home',
  components: {
    FixedPlayer,Header,Latest,Userpicks
  },
  data(){
    return {
      songList:[],
      position:""
    }
  },
  methods:{
      playList(data){
        console.log(data);
        this.songList = data.songList;
        this.position = data.position
      },
  }
}
</script>
