<template>
  <Header/>
    <Latest/>
    <Userpicks/>
  <FixedPlayer/>
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
  }
}
</script>
