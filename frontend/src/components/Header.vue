<script lang="ts" setup>
import MainContent from "./MainContent.vue";
import { ref } from "vue";
const activeIndex = ref("1");
const activeIndex2 = ref("1");
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// Toggle collapse menu state
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<template>
  <div class="h-6" />
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <el-icon @click="toggleCollapse">
        <Menu class="icon-color" />
      </el-icon>
    </el-menu-item>

    <!-- Sub Menu -->
    <el-sub-menu index="2">
      <template #title>Vault</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <!-- Menu Item Disabled -->
    <el-menu-item index="3">SFTP</el-menu-item>

    <!-- Menu Item lainnya -->
    <el-menu-item index="4">Split View</el-menu-item>
  </el-menu>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :value="false">expand</el-radio-button>
    <el-radio-button :value="true">collapse</el-radio-button>
  </el-radio-group> -->
  <div class="overall-style">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <v-icon name="fa-server"></v-icon>
          <span class="menu-text">Host</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Host</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <v-icon name="fa-server" scale="1.2" class="icon-color" />
        <span class="menu-text">Port Forwarding</span>
      </el-menu-item>

      <el-menu-item index="4">
        <v-icon name="ri-code-view" scale="1.2" class="icon-color" />
        <span class="menu-text">Snippets</span>
      </el-menu-item>

      <el-menu-item index="3">
        <v-icon name="fa-folder" scale="1.2" class="icon-color" />
        <span class="menu-text">SFTP</span>
      </el-menu-item>

      <el-menu-item index="5">
        <v-icon name="fa-clock" scale="1.2" class="icon-color" />
        <span class="menu-text">History</span>
      </el-menu-item>
    </el-menu>
    <MainContent />
  </div>
</template>

<style scoped>
.el-menu-vertical-demo {
  background-color: #585c64;
  height: 100vh;
  max-width: 12rem;
  min-width: 4.3rem;
  padding-right: 20px;
}

.menu-text {
  color: #fff;
  margin-left: 1rem;
}

.icon-color {
  color: #fff;
}

.overall-style {
  display: flex;
  gap: 0.5rem;
}
</style>
