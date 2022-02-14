<template>
  <header
    class="flex-shrink-0 relative h-16 bg-white flex items-center border-b-2 border-gray-200 "
  >
    <img class="w-auto h-9 sm:h-10 ml-1 sm:ml-4" src="/logo.png" alt="Password Generator" />
          <!-- <h4 class="font-extrabold text-lg ml-2 text-slate-900">Strong Password Generator</h4> -->

    <!-- Desktop nav area -->
    <div
      class="hidden lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between"
    >
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

<style></style>
