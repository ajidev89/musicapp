<template>
  <section class="fixed mt-96 bottom-0 w-full bg-gradient-to-r from-purple-600 via-purple-800 to-blue-500 text-gray-200 p-5 rounded-md rounded-b-none" >
      <div class="flex space-x-8 items-center">
          <div class="flex items-center space-x-3 flex-grow-0">
                <div class="h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-gray-200" >
                    <img :src="playingSong.img" class="object-cover" >
                </div>
                <div>
                    <p class="font-semibold text-xs">{{ playingSong.title }}</p>
                    <p class="lg:text-xs text-xxs" >{{ playingSong.artistName }}</p>
                </div>
          </div>
          <div class="flex space-x-4" >
              <!-- <svg class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="11 19 2 12 11 5 11 19" />  <polygon points="22 19 13 12 22 5 22 19" /></svg> -->
              <button @click="prevSong">
                  <svg class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="19 20 9 12 19 4 19 20" />  <line x1="5" y1="19" x2="5" y2="5" /></svg>
              </button>
              <button @click="toogleMusic" >
                  <svg v-if="play" class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="6" y="4" width="4" height="16" />  <rect x="14" y="4" width="4" height="16" /></svg>
                  <svg v-else class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
              </button>
              <button @click="nextSong" > 
                  <svg class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 4 15 12 5 20 5 4" />  <line x1="19" y1="5" x2="19" y2="19" /></svg>
              </button>
              <!-- <svg class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="13 19 22 12 13 5 13 19" />  <polygon points="2 19 11 12 2 5 2 19" /></svg> -->
          </div>
          <div class="hidden lg:block flex-grow mt-2" >
              <div class="relative" >
                  <div class="h-1 rounded-full bg-gray-400" ></div>
                  <div :style="{width :widthSong }" class="absolute top-0 h-1 rounded-full bg-gray-200 z-10" ></div>
              </div>
              <div class="flex justify-between text-xs mt-2 items-center" >
                  <p>{{ currentTime }}</p>
                  <p>{{ duration }}</p>
              </div>
          </div>
          <div class="hidden lg:flex space-x-4" >
            <div>
              <svg class="h-6 w-6 text-gray-200"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="12" r="3" />  <circle cx="18" cy="6" r="3" />  <circle cx="18" cy="18" r="3" />  <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />  <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" /></svg>
              <p class="text-xs mt-2">Share</p>
            </div>
            <div>
                <svg class="h-6 w-6 text-gray-200"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                <p class="text-xs mt-2">Like</p>
            </div>
            <div>
                <svg class="h-6 w-6 text-gray-200 mx-auto"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"/>
                </svg>
                <p class="text-xs mt-2">Playlist</p>
            </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name:"Player",
    data(){
        return{
            songList:[
                {
                    artistName:"Ckay",
                    title:"DTF",
                    link:"test/6941253.mp3",
                    img:"https://i.scdn.co/image/ab67616d0000b273405fdad252857e01dbced96a"
                },
                 {
                    artistName:"Ckay",
                    title:"ah ah ah",
                    link:"test/6941255.mp3",
                    img:"https://i.scdn.co/image/ab67616d0000b273405fdad252857e01dbced96a"
                },
                {
                    artistName:"Ckay",
                    title:"Kakulata",
                    link:"test/6941257.mp3",
                    img:"https://i.scdn.co/image/ab67616d0000b273405fdad252857e01dbced96a"
                },
                 {
                    artistName:"Ckay",
                    title:"Way ft Dj Lambo",
                    link:"test/6941259.mp3",
                    img:"https://i.scdn.co/image/ab67616d0000b273405fdad252857e01dbced96a"
                },
                {
                    artistName:"Ckay",
                    title:"Ski Ski",
                    link:"test/6941261.mp3",
                    img:"https://i.scdn.co/image/ab67616d0000b273405fdad252857e01dbced96a"
                },
                {
                    artistName:"Ckay",
                    title:"Like to party",
                    link:"test/6941265.mp3",
                    img:"https://i.scdn.co/image/ab67616d0000b273405fdad252857e01dbced96a"
                },
                {
                    artistName:"Ckay",
                    title:"Oliver kahn ft BOJ",
                    link:"test/6941266.mp3",
                    img:"https://i.scdn.co/image/ab67616d0000b273405fdad252857e01dbced96a"
                },
                {
                    artistName:"Ckay",
                    title:"Beeni ft Barry Jhay",
                    link:"test/6941269.mp3",
                    img:"https://i.scdn.co/image/ab67616d0000b273405fdad252857e01dbced96a"
                }
                
                
            ],
            playingSong:{},
            play:false,
            song:{}
        }
    },
    computed:{
        currentTime(){
            console.dir(this.song);
           return (this.song.currentTime) ? this.formatSecondToMin(this.song.currentTime) : '0.00'
        },
        duration(){
            return (this.song.duration) ? this.formatSecondToMin(this.song.duration) : '0.00'
        },
        widthSong(){
            let percent = ((this.song.currentTime/this.song.duration) * 100).toFixed(0)
            return percent +'%'
        }
    },
    methods:{
        toogleMusic(){
            this.play = !this.play
            if(this.play){
                this.song.play();
            }else{
                this.song.pause();
            }
            this.currentTime
        },
        formatSecondToMin(data){
            return (data/60).toFixed(2);
        },
        loadMusic(){
            this.song = new Audio(this.playingSong.link);

        },
        nextSong(){
            let currsong = this.songList.find(item => item.link == this.playingSong.link)
            let nextsong = this.songList.indexOf(currsong) + 1
            if(this.songList.length > nextsong ){
                this.playingSong = this.songList[nextsong]
            }
            else{
                this.playingSong = this.songList[0]
            }
            if(this.play){
                this.toogleMusic();
            }
            this.loadMusic();
            this.toogleMusic();
           
        },
        prevSong(){
            let currsong = this.songList.find(item => item.link == this.playingSong.link)
            let prevsong = this.songList.indexOf(currsong) - 1
            if(prevsong >= 0  ){
                this.playingSong = this.songList[prevsong]
            }
            else{
                this.playingSong = this.songList[this.songList.length - 1]
            }
            if(this.play){
                this.toogleMusic();
            }
            this.loadMusic();
            this.toogleMusic();

        }
    },
    mounted(){
        this.playingSong = this.songList[0];
        this.loadMusic()
    },

}
</script>

<style>

</style>