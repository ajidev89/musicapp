<template>
  <div class="flex h-screen justify-center items-center bg-gray-100">
      <div class="bg-white shadow-lg w-96 p-5 rounded-md" >
          <h1 class="font-semibold text-xl" >Login in the account</h1>
          <form action="" method="post">
                <div class="my-4" >
                    <fieldset class="input-fieldset" >
                        <legend class="hidden text-sm transition translate-y-7 duration-300 transform" >E-mail Address</legend>
                        <input type="email" @blur="backtoFieldSet($event,'E-mail Address')" @focus="changeInputStyle" class="w-full text-sm py-2 focus:outline-none" placeholder="E-mail Address">
                    </fieldset>
                </div>
                <div class="my-3" >
                    <fieldset class="input-fieldset" >
                        <legend class="hidden text-sm transition translate-y-7 duration-300 transform" >Password</legend>
                        <input type="password" @blur="backtoFieldSet($event,'Password')" @focus="changeInputStyle" class="w-full text-sm py-2 focus:outline-none" placeholder="Password" >
                    </fieldset>
                </div>

                <button class="bg-indigo-600 p-3 w-full rounded my-3 text-gray-100 font-semibold">Log in</button>

          </form> 
      </div>

  </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{

        }
    },
    methods:{
        changeInputStyle($event){
            let input = $event.srcElement;
            input.placeholder = ""
            let legend = input.previousSibling;

            legend.classList.remove("hidden"); 
            input.classList.remove("py-2");  
            setTimeout(() => {
               legend.classList.remove("translate-y-7");
            }, 5);
            
        },
        backtoFieldSet($event,placeHolder){
            let input = $event.srcElement;
            let legend = input.previousSibling; 
            legend.classList.add("translate-y-7");
            setTimeout(() => {
                input.classList.add("py-2"); 
                input.placeholder = placeHolder;
               legend.classList.add("hidden");
            }, 300);        
        }
    }
}
</script>

<style>

</style>