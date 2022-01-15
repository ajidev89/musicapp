<template>
    <div class="flex bg-gray-100">
        <Sidebar/>
        <div class="flex-grow " >
            <Header/>
            <main class="p-6" >
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/admin/Sidebar.vue";
import Header from "@/components/admin/Header.vue";
export default {
    name:"Dashboard",
    components:{
        Sidebar,Header
    }
}
</script>
