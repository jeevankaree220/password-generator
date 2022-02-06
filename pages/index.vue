<!-- This example requires Tailwind CSS v2.0+ -->
<template>

  <div class="min-h-full">
    <Html>
      <Head>
        <Title>Strong Password Generator</Title>
        <Meta
          name="description"
          content="Check your daily horoscope. Get astrological predictions related to your zodiac signs"
        />

        <Script src="https://unpkg.com/cronstrue@latest/dist/cronstrue.min.js">
        </Script>
      </Head>
    </Html>

    <Header></Header>
<!-- -------------------------------------- -->
    <div class="py-10">
      <main>
        <div class="w-full sm:max-w-7xl mx-auto sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-auto bg-indigo-100">

              <div class="relative max-w-2xl mx-auto pt-5 sm:pt-7 lg:pt-10 pb-5">
                <h1
                  class="text-slate-900 font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center dark:text-white">
                  Need a password? Try the Strong Password Generator</h1>
                <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">Generate secure, random passwords to stay safe online.</p>
                <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-xl sm:text-center ">
                    
                    <span class="tracking-widest w-full space-x-3 px-3 h-12 grid items-center bg-white border-none hover:ring-slate-300 focus:outline-none shadow-lg rounded-md text-slate-800 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                      {{strongPassword}}
                    </span>

                  </div>
                  <div class="mt-3 sm:mt-4 flex justify-between space-x-6 text-sm">
                    <a @click="generatePasswordClick" class="bg-slate-900 hover:bg-slate-700 focus:outline-none text-white font-semibold h-9 px-6 rounded-md w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">Generate Strong Password</a>
                    <a @click.prevent="copyPassword" class="bg-slate-900 hover:bg-slate-700 focus:outline-none text-white font-semibold h-9 px-6 rounded-md w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">Copy</a>
                  </div>
                  <div class="mt-3 sm:mt-4 flex justify-start space-x-14 text-sm">
                    <label class="flex items-center justify-center space-x-2 text-sm font-medium text-slate-600">
                      <input type="checkbox" class="accent-violet-500" v-model="toggleNumbers"/>
                      <span>Numbers</span>
                    </label>                  
                    <label class="flex items-center justify-center space-x-2 text-sm font-medium text-slate-600">
                      <input type="checkbox" class="accent-violet-500" v-model="toggleSymbols"/>
                      <span>Symbols</span>
                    </label>
                    <div class="flex items-center justify-center space-x-2 text-sm font-medium text-slate-600 range-wrap">
                      <span>Length</span>
                      <!-- <div class="range-value" id=""></div> -->
                      <input id="range" type="range" min="8" max="24" value="12" step="4">
                      <span id="rangeV" class="bg-white focus:outline-none font-semibold h-9 w-16 px-6 rounded-md w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">{{passwordLength}}</span>
                    </div>                 
                   </div>
                  
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
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="copiedPassword" class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Successfully copied password!</p>
                <!-- <p class="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p> -->
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

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

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
            }


    return {
      user,
      navigation,
      userNavigation,
      strongPassword,
      passwordLength,
      generatePassword,
      copyPassword,
      toggleNumbers,
      toggleSymbols,
      generatePasswordClick,
      copiedPassword
      
    }
  },
}
</script>
<style>
input[type=range] {
	-webkit-appearance: none;
	margin: 20px 0;
	width: 100%;
}
input[type=range]:focus {
	outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
	width: 100%;
	height: 4px;
	cursor: pointer;
	animate: 0.2s;
	background: #03a9f4;
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
	background: #03a9f4;
}
.range-wrap{
	width: 500px;
	position: relative;
}
.range-value{
	position: absolute;
	top: -50%;
}
.range-value span{
	width: 30px;
	height: 24px;
	line-height: 24px;
	text-align: center;
	background: #03a9f4;
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
	border-top: 10px solid #03a9f4;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	top: 100%;
	left: 50%;
	margin-left: -5px;
	margin-top: -1px;
}
</style>