<!-- This example requires Tailwind CSS v2.0+ -->
<template>

  <div class="min-h-full">
    <Html>
      <Head>
        <Title>Strong Password Generator</Title>
        <Meta
          name="description"
          content="Generate strong password using uppercase and lowercase letters, numbers, and symbols to secure your digital account"
        />
         
        <!-- <Script src="https://unpkg.com/cronstrue@latest/dist/cronstrue.min.js">
        </Script> -->
      </Head>
    </Html>

    <Header></Header>
<!-- -------------------------------------- -->
    <div class="py-2 sm:py-10 px-0 sm:px-0">
      <main>
        <div class="w-full sm:max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-1 sm:px-2 sm:py-2 sm:py-4">
            <div class="border-4 border-dashed border-gray-100 rounded-lg h-auto bg-gray-50 sm:bg-gray-50 px-4 sm:px-2">

              <div class="sm:max-w-2xl w-full mx-auto pt-5 sm:pt-7 lg:pt-10 pb-5">
                <h1
                  class="text-slate-900 font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center dark:text-white">
                  Need a password? Try the Strong Password Generator</h1>
                <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">Generate secure, random passwords to stay safe online.</p>
                <div class="mt-6 sm:mt-10 flex justify-center space-x-6 sm:text-center ">
                    
                    <span class=" w-full space-x-3 px-3 h-12 grid items-center bg-white border-none hover:ring-slate-300 focus:outline-none shadow-lg rounded-md text-slate-800 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                      <!-- {{strongPassword}} -->
                       <div>
                          <!-- <label for="search" class="block text-sm font-medium text-gray-700">Quick search</label> -->
                          <div class=" relative flex items-center">
                            <input type="text" class="text-md h-12 text-center tracking-widest block w-full focus:outline-none pr-4 sm:text-xl border-none text-slate-800 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700" v-model="strongPassword"/>
                            <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5 cursor-pointer">
                              <kbd  @click.prevent="copyPassword" class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400 "> {{textCopy}} </kbd>
                            </div>
                          </div>
                        </div>
                       
                    </span>
                  

                  </div>
                  <div class="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 justify-between gap-4 text-sm">
                    <a @click="generatePasswordClick" class="cursor-pointer bg-slate-900 hover:bg-slate-700 focus:outline-none text-white font-semibold h-9 px-6 rounded-md w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">Generate Strong Password</a>
                    <!-- <a @click.prevent="copyPassword" class="bg-slate-900 hover:bg-slate-700 focus:outline-none text-white font-semibold h-9 px-6 rounded-md w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">Copy</a> -->
                      <div class="flex items-center justify-center space-x-2 text-sm font-medium text-slate-600 range-wrap">
                      <span>Length</span>
                      <!-- <div class="range-value" id=""></div> -->
                      <input id="range" type="range" min="8" max="24" value="12" step="4">
                      <span id="rangeV" class="bg-white focus:outline-none font-semibold h-9 w-16 px-6 rounded-md w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">{{passwordLength}}</span>
                    </div>    
                  </div>
                  <div class="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                        <label class="flex items-center justify-center space-x-2 text-sm font-medium text-slate-600">
                          <input type="checkbox" class="accent-violet-500" v-model="toggleNumbers"/>
                          <span>Numbers</span>
                        </label>                  
                        <label class="flex items-center justify-center space-x-2 text-sm font-medium text-slate-600">
                          <input type="checkbox" class="accent-violet-500" v-model="toggleSymbols"/>
                          <span>Symbols</span>
                        </label>
                    </div>
                               
                   </div>
                    <!-- <div class="w-full sm:w-full">
                      <p class="mt-4 text-md sm:text-md text-slate-900 font-normal tracking-tight dark:text-slate-50 ">An excellent, and often overlooked security step is to use a long and complete password.</p>
                        <p class="mt-2 text-md sm:text-md text-slate-900 font-normal tracking-tight dark:text-slate-50 ">A secure password should be at least eight characters and contain a combination of uppercase and lowercase letters, numerals, and symbols. To complete your profile, you can also include numbers in the password for that extra layer of security.</p>
                      <p class="mt-2 text-md sm:text-md text-slate-900 font-normal tracking-tight dark:text-slate-50 ">Password security is a serious issue.</p>
                        <p class="mt-2 text-md sm:text-md text-slate-900 font-normal tracking-tight dark:text-slate-50 ">When you use the same password for most of your online accounts, it's easy for someone to get into your email or social media account. Make sure you are using a secure, strong password that includes uppercase letters, lowercase letters, numbers and symbols.</p>
                    </div> -->
              </div>

            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>

      <!-- Notification -->

     <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
      <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
        <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <div v-if="copiedPassword" class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="text-sm font-medium text-gray-900">Successfully copied password!</p>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <button @click="copiedPassword = false" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="sr-only">Close</span>
                    <XIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon, CheckCircleIcon  } from '@heroicons/vue/outline'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    CheckCircleIcon,
  },
  setup() {

    let passwordLength = ref(12)
    let toggleNumbers = ref(true)
    let toggleSymbols = ref(false)
    let strongPassword = ref("")
    let copiedPassword = ref(false)
    let textCopy = ref("Copy")
    // const toggleNumbers = ref(true)
    // generatePassword
    // copyPassword
    // toggleNumbers
    // toggleSymbols

    

    onMounted(async () => {

        // $( "#generateStrgPswd" ).click(function() {
        //         $("#jkRandomPwd").val('')
        //         generatePassword();
        //     });



       

    const range = document.getElementById("range"),
          rangeV = document.getElementById("rangeV"),
          setValue = () => {
            const newValue = Number(
                ((range.value - range.min) * 100) / (range.max - range.min)
              ),
              newPosition = 10 - newValue * 0.2;
            // rangeV.innerHTML = `<span>${range.value}</span>`;
            passwordLength.value = parseInt(range.value);
            console.log(passwordLength.value, "password length selected@@@@@@@@@@@@@@@");
            rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
          };
        document.addEventListener("DOMContentLoaded", setValue);
        range.addEventListener("input", setValue);

    });

 

          function generatePassword(rangePass) {
            textCopy.value = "Copy";
            var numberChars = "0123456789";
            var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var lowerChars = "abcdefghijklmnopqrstuvwxyz";
            var specials = "}{!@#$%^&)(?*";
            console.log(toggleNumbers, toggleSymbols, "checkboxes###########");

            var allChars = upperChars + lowerChars;
            var randPasswordArray = Array(passwordLength.value);
            randPasswordArray[0] = upperChars;
            randPasswordArray[1] = lowerChars;

          var arrayValue = 2;

            if (toggleNumbers.value == true) {

              allChars = allChars + numberChars;
              randPasswordArray[arrayValue] = numberChars;

              arrayValue = arrayValue + 1;

            }
            if (toggleSymbols.value == true) {

              allChars = allChars + specials;
              randPasswordArray[arrayValue] = specials;


            }
          
            randPasswordArray = randPasswordArray.fill(allChars, 4);
            return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
            }

            function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
            }

          strongPassword.value = generatePassword(passwordLength.value)

          function generatePasswordClick() {
            console.log(strongPassword, passwordLength.value, "here!!!!!!!!!!!!!!!!!!!!!!!!!")
            strongPassword.value = generatePassword(passwordLength.value)

            console.log("New Strong Password:", strongPassword);

          }

           
            function copyPassword() {
              
            var copyText = strongPassword.value

            // copyText.select();
            // copyText.setSelectionRange(0, 99999); 

            navigator.clipboard.writeText(copyText);

            // alert("Copied the text: " + copyText);
            copiedPassword.value = true;
            textCopy.value = "Copied!"
            }


    return {
      // user,
      // navigation,
      // userNavigation,
      strongPassword,
      passwordLength,
      generatePassword,
      copyPassword,
      toggleNumbers,
      toggleSymbols,
      generatePasswordClick,
      copiedPassword,
      textCopy
      
    }
  },
}
</script>
<style>
input[type=range] {
	-webkit-appearance: none;
	margin: 20px 0;
	width: 20%;
}
input[type=range]:focus {
	outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
	width: 100%;
	height: 4px;
	cursor: pointer;
	animate: 0.2s;
	background: #2563eb;
	border-radius: 25px;
}
input[type=range]::-webkit-slider-thumb {
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background: #fff;
	box-shadow: 0 0 4px 0 rgba(0,0,0, 1);
	cursor: pointer;
	-webkit-appearance: none;
	margin-top: -8px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
	background: #2563eb;
}
.range-wrap{
	width: 500px;
	position: relative;
}
.range-value{
	position: absolute;
	top: -50%;
}
/* .range-value span{
	width: 30px;
	height: 24px;
	line-height: 24px;
	text-align: center;
	background: #2563eb;
	color: #fff;
	font-size: 12px;
	display: block;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	border-radius: 6px;
}
.range-value span:before{
	content: "";
	position: absolute;
	width: 0;
	height: 0;
	border-top: 10px solid #2563eb;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	top: 100%;
	left: 50%;
	margin-left: -5px;
	margin-top: -1px;
} */
</style>