<script setup>
import { reactive, ref } from 'vue';

const MenuStatus = ref(false);

const openMenu = () => {
    console.log('123');
    MenuStatus.value = !MenuStatus.value;
};

const MenuItems = reactive([
    {
        name: "Home",
        route: "",
    },
    {
        name: "About",
        route: "",
    },
    {
        name: "Login",
        route: "",
    },
]);
</script>

<template>
    <header class="lg:h-[80px] h-[50px] w-full border-y text-[#787878] grid grid-cols-12 bg-slate-50">
        <!-- logo -->
        <div class="grid col-span-4 justify-center items-center">
            <a class="flex justify-center items-center hover:text-[#125627] p-3">
                QQ
            </a>
        </div>

        <!-- nav -->
        <div class="grid col-span-6 col-start-6 justify-end items-center">
            <button class="lg:hidden flex justify-center items-center hover:text-[#125627] p-3" @click="openMenu()">
                三
            </button>
            <ul class="hidden lg:flex gap-x-6">
                <li class="hover:text-[#125627]" v-for="Items in MenuItems" :key="Items">{{ Items.name }}</li>
            </ul>
        </div>
    </header>

    <!-- nav app -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 h-full w-full flex justify-center items-center lg:hidden"
        v-show="MenuStatus == true">
        <button class="absolute left-[calc(100%-70px)] top-[calc(25px/2)]" @click="openMenu()">
            Ｘ
        </button>
        <ul class="text-center">
            <li class="hover:text-[#125627] mt-3" v-for="Items in MenuItems" :key="Items">{{ Items.name }}</li>
            <li class="hover:text-[#125627] mt-3"></li>
        </ul>
    </div>

</template>

<style scoped></style>
