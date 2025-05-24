<script setup>
import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert("button click");
};

const input = ref("");
const handleSearch = () => {
  console.log("Search:", input.value);
};
</script>

<template>
  <div class="content">
    <el-card class="card-style w-full">
      <el-input
        v-model="input"
        placeholder="Find host or ssh user@hostname..."
        clearable
        class="input-text"
      >
        <template #append>
          <el-button @click="handleSearch" :disabled="input.length === 0"
            >Connect</el-button
          >
        </template>
      </el-input>
      <el-dropdown
        split-button
        type="primary"
        @click="handleClick"
        class="mt-2"
      >
        NEW HOST
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item divided>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-button class="mt-2 ml-2" type="primary" @click="handleClick"
        >TERMINAL</el-button
      >
      <el-button class="mt-2 ml-2" type="primary" @click="handleClick"
        >SERIAL</el-button
      >
    </el-card>
    <div>
      <div class="groups-container">
        <div>Groups</div>
          <div class="grid">
            <el-card class="flex-col">AWS</el-card>
            <el-card class="flex-col">Acme</el-card>
            <el-card class="flex-col">Testing</el-card>
            <el-card class="flex-col">Staging</el-card>
            <el-card class="flex-col">Development</el-card>
          </div>
      </div>
    </div>
    <div>
      <div class="groups-container">
        <div>Host</div>
          <div class="grid">
            <el-card class="flex-col">api-db.m4.xlarge.us-west-1</el-card>
            <el-card class="flex-col">api-db.m4.xlarge.us-west-1</el-card>
            <el-card class="flex-col">api-db.m4.xlarge.us-west-1</el-card>
            <el-card class="flex-col">api-db.m4.xlarge.us-west-1</el-card>
            <el-card class="flex-col">api-db.m4.xlarge.us-west-1</el-card>
            <el-card class="flex-col">api-db.m4.xlarge.us-west-1</el-card>
            <el-card class="flex-col">api-db.m4.xlarge.us-west-1</el-card>
            <el-card class="flex-col">api-db.m4.xlarge.us-west-1</el-card>
            <el-card class="flex-col">api-db.m4.xlarge.us-west-1</el-card>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-text {
  height: 2.5rem;
  width: 100%;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}

.card-style {
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  width: 100%;
  height: auto;
}

.content {
  width: 100%;
}

.groups-container {
  margin-top: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
