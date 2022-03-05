<template>
  <header
    class="flex-shrink-0 relative h-16 bg-white flex items-center justify-between border-b-2 border-gray-200 "
  >
    <img class="w-auto h-9 sm:h-10 ml-1 sm:ml-4" src="/logo.png" alt="Password Generator" />
          <!-- <h4 class="font-extrabold text-lg ml-2 text-slate-900">Strong Password Generator</h4> -->

    <!-- Desktop nav area -->

      <div class="form-check form-switch inline-flex px-8">
          <!-- <label class="text-slate-600 font-medium text-md mr-5 mt-1">Dark Mode:</label>
          <input class="form-check-input appearance-none w-14 rounded-full h-7 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"> -->
          <button @click="flexSwitchCheckDefault" id="flexSwitchCheckDefault" class="flexSwitchCheckDefault">
              <svg class="w-8 h-8 text-slate-800 shadow-md rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path fill="currentColor" d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" transform="translate(-8 -8)"></path></svg>
            </button>
      </div>
  </header>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  ArchiveIcon as ArchiveIconSolid,
  ChevronDownIcon,
  ChevronUpIcon,
  DotsVerticalIcon,
  FolderDownloadIcon,
  PencilIcon,
  ReplyIcon,
  SearchIcon,
  UserAddIcon,
} from "@heroicons/vue/solid";
import {
  ArchiveIcon as ArchiveIconOutline,
  BanIcon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    ArchiveIconSolid,
    BellIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    DotsVerticalIcon,
    FolderDownloadIcon,
    MenuIcon,
    PencilIcon,
    ReplyIcon,
    SearchIcon,
    UserAddIcon,
    XIcon,
  },
  setup() {

    if(process.client)
    {
            let gtm = "GTM-P5D48TH";

            (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js"
              });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", gtm);

            var gtmScript = document.createElement("div"); // is a node
            gtmScript.innerHTML = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;
            document.body.appendChild(gtmScript);
    }


    if (process.client) {
      var darkSwitch = document.getElementById("flexSwitchCheckDefault");

      var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      if (storedTheme)
          document.documentElement.setAttribute('data-theme', storedTheme)


      darkSwitch.onclick = function(e) {
          e.preventDefault()
          var currentTheme = document.documentElement.getAttribute("data-theme");
          var targetTheme = "light";
          console.log(currentTheme, "Hey1");
          if (currentTheme === "light") {
              targetTheme = "dark";
          }

          document.documentElement.setAttribute('data-theme', targetTheme)
          localStorage.setItem('theme', targetTheme);
      };
    }


    const navigation = [
      {
        name: "Inboxes",
        href: "#",
        children: [
          { name: "Technical Support", href: "#" },
          { name: "Sales", href: "#" },
          { name: "General", href: "#" },
        ],
      },
      { name: "Reporting", href: "#", children: [] },
      { name: "Settings", href: "#", children: [] },
    ];

    // const user = {
    //   name: "Whitney Francis",
    //   email: "whitneyfrancis@example.com",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    // };

    const open = ref(false);

    return {
      open,
      navigation,
      // user,
    };
  },
};
</script>

<style>
     :root {
        --background-color: #fff;
        --text-color: #121416d8;
        --link-color: #543fd7;
    }

    html[data-theme='light'] {
        --background-color: #fff;
        --text-color: #121416d8;
        --link-color: #543fd7;
    }

    html[data-theme='dark'] {
        /* --background-color: #212a2e; */
        --tw-bg-opacity: 1;
        --background-color: rgb(15 23 42 / var(--tw-bg-opacity));
        --text-color: #eeeeee;
        --link-color: #828fff;
    }

    body {
        background: var(--background-color);
        color: var(--text-color);
    }
</style>
