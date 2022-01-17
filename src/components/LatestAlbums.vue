<template>
    <section class="mt-8">
        <div class="md:container mx-3 md:mx-auto" >
            <h1 class="font-semibold text-2xl" >Latest Albums</h1>
            <div v-if="latestAlbums.length < 1" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4" >
               <RowPreloader/>
            </div>
            <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4" >
                <div v-for="latest in latestAlbums" :key="latest"  @click="playList(latest.songs)" >
                    <img :src="latest.image_url" class="object-cover rounded-md" alt="">
                    <div class="w-full h-8 rounded-full mt-2">
                        <p class="text-sm font-semibold" >{{ latest.albumName }}</p>
                        <div class="flex justify-between">
                            <p class="text-xs" >{{ latest.artist.artistName }}</p>
                            <p class="text-xs" >{{ latest.year }}</p>
                        </div>
                    </div>
                </div>
            </div>

      </div>
    </section>
</template>

<script>
import RowPreloader from "@/components/RowPreloader.vue"
export default {
    name:"LastestAlbums",
    components:{
        RowPreloader
    },
    data(){
        return{
            latestAlbums:[],
            albumToplay:[]
        }
    },
    methods:{
        async getLastestAlbums(){
            let url = this.$store.state.base_url + 'album/latest'
            let res = await this.axios.get(url)
            this.latestAlbums = res.data 
        },
        playList(albumSongs){
            let data = {      
                "songList": albumSongs,
                "position": 0
            }
            this.$emit('pickedList',data)
        }
    },
    beforeMount(){
        this.getLastestAlbums();
    }
}
</script>

<style>

</style>