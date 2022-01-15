<template>
    <Template>
        <div class="text-xl my-4" >
            Dashboard
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="bg-white shadow-lg p-4 rounded-lg" >
                <div class="grid grid-cols-2 gap-2 " >
                    <div>
                        <p class="text-sm text-gray-400" >No of</p>
                        <p>Albums</p> 
                    </div>
                    <div class="" >
                        <p class="text-6xl font-bold text-indigo-600">50</p> 
                    </div>
                </div>
            </div>

            <div class="bg-white shadow-lg p-4 rounded-lg" >
                <div class="grid grid-cols-2 gap-2" >
                    <div>
                        <p class="text-sm text-gray-400" >No of</p>
                        <p>Songs</p> 
                    </div>
                    <div class="" >
                        <p class="text-6xl font-bold text-indigo-600">500</p> 
                    </div>
                </div>
            </div>

            <div class="bg-white shadow-lg p-4 rounded-lg" >
                <div class="grid grid-cols-2 gap-2" >
                    <div>
                        <p class="text-sm text-gray-400" >No of</p>
                        <p>Streams</p> 
                    </div>
                    <div class="" >
                        <p class="text-6xl font-bold text-indigo-600">50</p> 
                    </div>
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
    }
}
</script>

<style>

</style>