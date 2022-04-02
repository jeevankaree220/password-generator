<!-- This example requires Tailwind CSS v2.0+ -->
<template>

  <div class="min-h-full ">
    <Html>
      <Head>
        <Title>Strong Password Generator</Title>
        <Meta
          name="description"
          content="Generate strong random password using uppercase and lowercase letters, numbers, and symbols to secure your digital accounts"
        />
      </Head>
    </Html>

    <Header></Header>
<!-- -------------------------------------- -->
    <div class="py-0 sm:py-0 px-0 sm:px-0 w-full">
      <main>
        <div class="mx-auto px-0 sm:px-0 px-0">
          <!-- Replace with your content -->
          <div class="px-0 sm:px-0 py-0 sm:py-0">
            <div class="px-2 sm:px-2 min-h-max">
              <div class="sm:max-w-3xl w-full mx-auto pt-5 sm:pt-7 lg:pt-10 pb-5">
                <h1 class=" font-extrabold text-2xl sm:text-5xl tracking-tight text-center">
                  Strong Password Generator</h1>
                  <p class="mt-2 sm:mt-6 text-lg  text-center max-w-3xl mx-auto ">Generate random, secure password to protect user accounts</p>
                  <div class="mt-4 sm:mt-10 flex justify-center text-center space-x-6 text-xl sm:text-3xl sm:text-center bg-white dark:bg-white">
                    <span class="tracking-widest w-full space-x-3 px-3 sm:h-24 h-14 grid items-center bg-white border-none hover:ring-slate-300 focus:outline-none shadow-lg rounded-sm text-slate-800">
                      {{strongPassword}}
                    </span>
                  </div>
                  <div class="mt-5 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 justify-between gap-4 text-sm">
                    <a @click="generatePasswordClick" class="sm:col-span-2 dark:bg-blue-600 bg-blue-600 cursor-pointer focus:outline-none text-white font-normal sm:h-12 h-9 px-6 rounded-sm w-full flex items-center justify-center sm:w-auto ">Generate Password</a>
                    <a @click.prevent="copyPassword" class="dark:bg-teal-600 bg-teal-600 cursor-pointer hover:bg-teal-800 focus:outline-none text-white font-normal sm:h-12 h-9 px-6 rounded-sm w-full flex items-center justify-center sm:w-auto">{{textCopy}}</a>
                  </div>
                  <div class="mt-5 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm ">
                    <div class="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4 w-full ml-1 sm:ml-0 mb-4 sm:mb-0 mt-4 sm:mt-0">
                        <label class="flex items-center justify-center space-x-2 text-sm font-medium ">
                          <input type="checkbox" class="accent-violet-500" v-model="toggleNumbers"/>
                          <span>Numbers</span>
                        </label>
                        <label class="flex items-center justify-center space-x-2 text-sm font-medium ">
                          <input type="checkbox" class="accent-violet-500" v-model="toggleSymbols"/>
                          <span>Symbols</span>
                        </label>
                    </div>
                    <div class="inline-flex items-center justify-center space-x-3 w-full">
                      <span class="">Length</span>
                      <input id="range" class="" type="range" min="8" max="24" value="12" step="4">
                      <span id="rangeV" class="bg-white text-slate-900 focus:outline-none font-semibold shadow-lg h-9 w-10 px-6 rounded-sm w-full flex items-center justify-center sm:w-auto">{{passwordLength}}</span>
                    </div>
                   </div>
                    <div class="w-full sm:w-full mt-4 sm:mt-10">
                      <h4 class="mt-4 mb-4 text-lg sm:text-xl  font-bold tracking-tight">Key points of Password Security</h4>
                      <p class="mt-4 mb-4 text-md sm:text-md  font-normal tracking-tight ">There are key password security points that users must understand in order to reduce the chances of a hacker cracking their password and thus gaining access to their device.</p>
                        <p class="mt-2 mb-4 text-md sm:text-md  font-normal tracking-tight ">Above all, passwords must be long and complex.</p>
                      <p class="mt-2 mb-4 text-md sm:text-md  font-normal tracking-tight ">Long and complex passwords take more effort and time to guess for a hacker.</p>
                      <p class="mt-2 mb-4 text-md sm:text-md  font-normal tracking-tight ">Passwords should be at least ten characters long and contain a variety of characters such as commas, percent signs, parentheses, upper-case and lower-case letters and numbers.</p>
                      <p class="mt-2 mb-4 text-md sm:text-md  font-normal tracking-tight ">Users should never write down their passwords because doing so makes it easier for someone else to steal and use the passwords.</p>
                    </div>
                    <div class="w-full sm:w-full mt-4 sm:mt-10">
                      <h4 class="mt-4 mb-4 text-lg sm:text-xl  font-bold tracking-tight">Why you need strong password?</h4>
                      <p class="mt-4 mb-4 text-md sm:text-md  font-normal tracking-tight ">An excellent, and often overlooked security step is to use a long and complete password.</p>
                        <p class="mt-2 mb-4 text-md sm:text-md  font-normal tracking-tight ">A secure password should be at least eight characters and contain a combination of uppercase and lowercase letters, numerals, and symbols.</p>
                      <p class="mt-2 mb-4 text-md sm:text-md  font-normal tracking-tight ">Password security is a serious issue. When you use the same password for most of your online accounts, it's easy for someone to get into your email or social media account.</p>
                    </div>
              </div>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>

      <!-- Notification -->
          <Footer></Footer>

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
    let textCopy = ref("Copy Password")




    onMounted(async () => {

    const range = document.getElementById("range"),
          rangeV = document.getElementById("rangeV"),
          setValue = () => {
            const newValue = Number(
                ((range.value - range.min) * 100) / (range.max - range.min)
              ),
              newPosition = 10 - newValue * 0.2;
            passwordLength.value = parseInt(range.value);
            rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
          };
        document.addEventListener("DOMContentLoaded", setValue);
        range.addEventListener("input", setValue);

    });



          function generatePassword(rangePass) {
            textCopy.value = "Copy Password";
            var numberChars = "0123456789";
            var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var lowerChars = "abcdefghijklmnopqrstuvwxyz";
            var specials = "}{!@#$%^&)(?*";
            // console.log(toggleNumbers, toggleSymbols, "checkboxes###########");

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

          strongPassword.value = generatePassword(12)

          function generatePasswordClick() {
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
      textCopy,

    }
  },
}
</script>
<style>
input[type=range] {
	-webkit-appearance: none;
	margin: 20px 0;
	width: 50%;
}
input[type=range]:focus {
	outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
	width: 100%;
	height: 4px;
	cursor: pointer;
	animation: 0.2s;
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