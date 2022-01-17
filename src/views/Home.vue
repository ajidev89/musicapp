<template>
  <div :class="{'mb-28': songList.length,'mb-16': songList.length < 1}">
  <Header/>
    <Latest @pickedList="playList" />
    <LatestAlbums @pickedList="playList" />
    <FixedPlayer v-if="songList.length" :songList="songList" :position="position" />
  </div>
</template>

<script>
import FixedPlayer from '@/components/FixedPlayer.vue'
import Header from '@/components/Header.vue'
import Latest from '@/components/LatestMusic.vue'
import LatestAlbums from '@/components/LatestAlbums.vue'
import Userpicks from '@/components/Userpicks.vue'
export default {
  name: 'Home',
  components: {
    FixedPlayer,Header,Latest,Userpicks,LatestAlbums
  },
  data(){
    return {
      songList:[],
      position:""
    }
  },
  emits:['pickedList'],
  methods:{
      playList(data){
        this.songList = data.songList;
        this.position = data.position
      },
  }
}
</script>
