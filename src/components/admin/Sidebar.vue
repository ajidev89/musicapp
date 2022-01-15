<template>
    <div class="bg-indigo-900 sticky top-0 flex-shrink-0 h-screen w-64 shadow-lg py-8 px-4 text-gray-200" >
        <div class="text-center mb-8" >
            <a href="#" class="font-semibold text-center text-xl">STREAMX</a>
        </div>
        <div class="font-semibold grid grid-rows-1 gap-6">
            <router-link :to="{name:'Dashboard'}" class="flex space-x-2 items-center">
                <div>
                    <svg class="h-5 w-5 text-gray-200"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                    </svg>
                </div>
                <div class="cursor-default" >Dashboard</div>    
            </router-link>
            <router-link :to="{name:'Albums'}" class="flex space-x-2 items-center">
                <div>
                    <svg class="h-5 w-5 text-gray-200"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect width="6" height="6" x="14" y="5" rx="1" />  <line x1="4" y1="7" x2="10" y2="7" />  <line x1="4" y1="11" x2="10" y2="11" />  <line x1="4" y1="15" x2="20" y2="15" />  <line x1="4" y1="19" x2="20" y2="19" /></svg>
                </div>
                <p class="cursor-default">Albums</p>    
            </router-link>
             <router-link :to="{name:'Singles'}" class="flex space-x-2 items-center">
                <div>
                    <svg class="h-5 w-5 text-gray-300" width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 18V5l12-2v13" />  <circle cx="6" cy="18" r="3" />  <circle cx="18" cy="16" r="3" /></svg>
                </div>
                <p class="cursor-default">Singles</p> 
            </router-link> 

            <li class="flex space-x-2 items-center">
                <div>
                   <svg class="h-5 w-5 text-gray-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />  <polyline points="16 17 21 12 16 7" />  <line x1="21" y1="12" x2="9" y2="12" /></svg>
                </div>
                <p class="cursor-default">Log out</p> 
            </li> 
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>