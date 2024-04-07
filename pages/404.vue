<template>
   <div class="bg-white flex flex-col min-h-screen">
  <div class="bg-white px-4 py-24 mx-auto max-w-7xl">
        <div class="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <p class="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">Error 404</p>
            <h1 class="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">Oops! The page you're looking for isn't here.</h1>
            <p class="mb-5 text-base text-left text-gray-800 md:text-xl">You might have the wrong address, or the page may have moved!</p>
            <a href="/" class="w-full mb-2 bg-teal-500 text-white border-white hover:bg-teal-700 hover:text-white hover:border-white btn btn-lg btn-light sm:w-auto sm:mb-0">Back to homepage</a>
          </div>
          <div>
            <div class="w-96 h-96 rounded-lg">
            <img src="~/assets/img/404.svg" class="object-cover" />
            </div>
          </div>
        </div>
</div>

   </div>
</template>

<script>
import { onMounted } from '#imports';
export default {

  setup() {

    onMounted(async () => {

      setViewHeight();
      window.addEventListener("resize", () => {
        setViewHeight();
      });

      function setViewHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }

    })
     
    
  }

}
</script>

<style>

</style>