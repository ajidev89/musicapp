<template>
    <header class="bg-white rounded py-4 px-6 sticky top-0 shadow-lg" >
        <div class="flex space-x-2 justify-end" >
            <div class="rounded-full flex justify-center items-center bg-purple-400 h-8 w-8" >
                <svg class="h-5 w-5 text-gray-50"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
            </div>
            <div class="rounded-full flex justify-center items-center bg-red-400 h-8 w-8" >
                <svg class="h-5 w-5 text-gray-50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />  <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            </div>
            <div class="flex items-center space-x-1" >
                <div class="rounded-full flex justify-center items-center bg-indigo-400 h-8 w-8" >
                    <svg class="h-5 w-5 text-gray-50"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                </div>
                <div class="text-sm font-semibold text-gray-800"></div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style>

</style>