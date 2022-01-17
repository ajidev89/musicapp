<template>
  <section :class="{'h-screen flex items-center justify-center ': isfullScreeen }" class="fixed transition-height transform duration-500 ease-in-out mt-96 bottom-0  w-full bg-gradient-to-r from-purple-600 via-purple-800 to-blue-500 text-gray-200 p-5 rounded-md rounded-b-none" >
      <div v-if="isfullScreeen === false" class="flex lg:space-x-8 justify-between items-center">
          <div @click="toogleFullscreen" class="flex items-center space-x-3 flex-grow-0">
                <div class="h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-gray-200" >
                    <img :src="playingSong.image_url" class="object-cover" >
                </div>
                <div>
                    <p class="font-semibold text-xs">{{ playingSong.songTitle }}</p>
                    <p class="lg:text-xs text-xxs" >{{ playingSong.artist.artistName }}</p>
                </div>
          </div>
          <div class="flex space-x-4" >
              <button @click="prevSong">
                  <svg class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="19 20 9 12 19 4 19 20" />  <line x1="5" y1="19" x2="5" y2="5" /></svg>
              </button>
              <button @click="toogleMusic" >
                  <svg v-if="play" class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="6" y="4" width="4" height="16" />  <rect x="14" y="4" width="4" height="16" /></svg>
                  <svg v-else class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
              </button>
              <button @click="nextSong" class="z-10" > 
                  <svg v-if="isFastForward" class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="13 19 22 12 13 5 13 19" />  <polygon points="2 19 11 12 2 5 2 19" /></svg>
                  <svg v-else class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 4 15 12 5 20 5 4" />  <line x1="19" y1="5" x2="19" y2="19" /></svg>
              </button>
          </div>
          <div class="hidden lg:block flex-grow mt-2" >
              <div class="relative cursor-pointer" >
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
      <div v-else>
          <div class="flex-grow flex justify-end fixed top-4 right-4" >
              <button @click="toogleFullscreen">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2  lg:gap-4" >
              <div>
                    <div class="flex justify-center" >
                         <div class="lg:h-96 lg:w-96 h-72 w-72 overflow-hidden rounded bg-gray-200" >
                            <img :src="playingSong.image_url" class="object-cover" >
                        </div>
                    </div>
                    <div class="mt-4 flex justify-center " >
                        <div class="text-center" >
                            <p class="font-semibold text-base">{{ playingSong.songTitle }}</p>
                            <p class="lg:text-xs text-xxs" >{{ playingSong.artist.artistName }}</p>
                        </div>       
                    </div>
                    <div class="flex justify-center mt-4" >
                        <div class="lg:w-96 w-72" >
                            <div class="relative cursor-pointer" >
                                <div class="h-1 rounded-full bg-gray-400" ></div>
                                <div :style="{width :widthSong }" class="absolute top-0 h-1 rounded-full bg-gray-200 z-10" ></div>
                            </div>
                            <div class="flex justify-between text-xs mt-2 items-center" >
                                <p>{{ currentTime }}</p>
                                <p>{{ duration }}</p>
                            </div>
                        </div>
                    </div>  
                    <div class="flex justify-center mt-4" >
                         <div class="flex justify-between lg:w-96 w-72" >
                            <button @click="prevSong">
                                <svg class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="19 20 9 12 19 4 19 20" />  <line x1="5" y1="19" x2="5" y2="5" /></svg>
                            </button>
                            <button @click="toogleMusic" >
                                <svg v-if="play" class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="6" y="4" width="4" height="16" />  <rect x="14" y="4" width="4" height="16" /></svg>
                                <svg v-else class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
                            </button>
                            <button @click="nextSong" class="z-10" > 
                                <svg v-if="isFastForward" class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="13 19 22 12 13 5 13 19" />  <polygon points="2 19 11 12 2 5 2 19" /></svg>
                                <svg v-else class="h-8 w-8 text-gray-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 4 15 12 5 20 5 4" />  <line x1="19" y1="5" x2="19" y2="19" /></svg>
                            </button>
                        </div>
                    </div>                 
              </div>
              <div class="hidden lg:block" >
                  <h1 class="font-semibold text-2xl" >Playlist</h1>
                  <div v-for="(song, index) in songList" :key="song" class="p-3 bg-gray-800 bg-opacity-25 rounded mt-2 text-sm flex items-center space-x-2">
                    <div @click="toogleMusic" v-if="playingSong.id == song.id" class="flex items-center" >
                        <svg v-if="this.play == true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                         <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div v-else class="flex items-center">
                        <button @click="playnewMusic(index)" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex items-center" >{{ song.songTitle }}
                        <span class="ml-1" v-if="song.featured_artists.length" >
                            ft <span v-for="featArtist in song.featured_artists" :key="featArtist" >{{ featArtist.artistName }}</span>
                        </span>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name:"Player",
    props:['songList','position'],
    data(){
        return{
            playingSong:{},
            play:false,
            song:{},
            currentTime:"",
            duration:"",
            widthSong:"",
            isFastForward:false,
            isfullScreeen:false
        }
    },
    methods:{
        toogleMusic(){
            this.play = !this.play
            if(this.play){
                this.song.play();
                this.updates = setInterval(() => {
                    this.currentTime = this.formatCurrentTime(this.song.currentTime);
                    this.duration = this.formatCurrentTime(this.song.duration)
                    this.widthSong = ((this.song.currentTime/this.song.duration) * 100).toFixed(7) + '%'
                    if(this.currentTime == this.duration){
                        this.nextSong();
                    }
                }, 10);
            }else{
                this.song.pause();
                clearInterval(this.updates);
            }
        },
        formatSecondToMin(data){
            return (data/60).toFixed(2);
        },
        formatCurrentTime(seconds){
            let minutes = Math.floor(seconds / 60);
            minutes = (minutes >= 10) ? minutes : minutes;
            seconds = Math.floor(seconds % 60);
            seconds = (seconds >= 10) ? seconds : "0" + seconds;
            return minutes + ":" + seconds;
        },
        loadMusic(){
            this.currentTime = this.duration = "0.00"; 
            this.song = new Audio(this.playingSong.url);    
        },
        nextSong(){
            let currsong = this.songList.find(item => item.url == this.playingSong.url)
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
            let currsong = this.songList.find(item => item.url == this.playingSong.url)
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

        },
        fastForward(){           
            setTimeout(() => {
                this.isFastForward = true;
                this.song.currentTime += 10
            }, 1000);   
        },
        stopFastForward(){
            this.isFastForward = false;
        },
        toogleFullscreen(){
            this.isfullScreeen = !this.isfullScreeen
        },
        playnewMusic(position){
            this.playingSong = this.songList[position];
            if(this.play){
                this.toogleMusic();
            }
            this.loadMusic();
            this.toogleMusic();
        },
        increaseVolume(){
            this.song.volume = this.song.volume + 0.1
        },
        decreaseVolume(){
            this.song.volume = this.song.volume - 0.1
        }
    },
    created(){
        let self = this
        document.body.onkeyup = function(e){ 
            if(e.keyCode == 32 || this.playingSong){   
                self.toogleMusic();
            }else if(e.keyCode == 78 || this.playingSong){
                self.nextSong()
            }else if(e.keyCode == 80 || this.playingSong){
                self.prevSong()
            }else if(e.keyCode == 187){
                self.increaseVolume()
            }else if(e.keyCode == 189){
                self.decreaseVolume()
            }
        }
    },
    beforeMount(){
        this.playingSong = this.songList[this.position];
    },
    mounted(){
        this.loadMusic();
        this.toogleMusic();
    },

}
</script>

<style>

</style>