<template>
    <Template>
        <div class="flex justify-between mb-8">
            <div class="flex space-x-4 py-4">
                <button @click="showTab('Albums')" class="font-semibold text-gray-800" >Albums</button>
                <button  @click="showTab('Albums')" class="font-semibold text-gray-400" >Add Album</button>
            </div>
            <div class="" >
                <input type="search" name="" id="" class="text-sm p-3 w-56 rounded border focus:outline-none focus:border-indigo-600" placeholder="Search Albums">
            </div>
        </div>

        <div v-show="album" class="grid grid-cols-3 gap-4" >
            <div v-for="album in albums" :key="album" class="border-t-2 border-indigo-600 bg-white shadow-lg rounded p-4">
                <div>
                    <p class="text-xs uppercase" >Album Name</p>
                    <div class="font-semibold" >{{  album.name }}</div>
                </div>

                 <div class="my-4">
                    <p class="text-xs uppercase" >Number of tracks</p>
                    <div class="font-semibold">{{ album.tracklist }}</div>
                </div>

                <div class="my-4">
                    <p class="text-xs uppercase" >Artist</p>
                    <div class="font-semibold">{{ album.artist }}</div>
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
    name:"Albums",
    components:{
        Template
    },
    data(){
        return{
            album:true,
            albums:[
                { name:"American Teen", artist:"Khaild", tracklist: 23 },
                { name:"African Gaint", artist:"Burna Boy", tracklist: 23 },
                { name:"More LIfe", artist:"Drake", tracklist: 23 },
                { name:"American Teen", artist:"Khaild", tracklist: 23 },
                { name:"African Gaint", artist:"Burna Boy", tracklist: 23 },
                { name:"More LIfe", artist:"Drake", tracklist: 23 },
                { name:"American Teen", artist:"Khaild", tracklist: 23 },
                { name:"African Gaint", artist:"Burna Boy", tracklist: 23 },
                { name:"More LIfe", artist:"Drake", tracklist: 23 },
            ]
        }
    }
}
</script>

<style>

</style>