<template>
  <header
    class="flex-shrink-0 relative h-16 bg-white flex items-center border-b-2 border-gray-200"
  >
    <img class="h-12 w-36" src="~/assets/img/logo1.svg" alt="Workflow" />

    <!-- Desktop nav area -->
    <div
      class="hidden lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between"
    ></div>
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

    const user = {
      name: "Whitney Francis",
      email: "whitneyfrancis@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    };

    const open = ref(false);

    return {
      open,
      navigation,
      user,
    };
  },
};
</script>

<style></style>
