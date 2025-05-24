<script setup lang="ts">
import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";

interface ServerData {
  id: number;
  name: string;
}

interface EnvironmentItem {
  id: number;
  name: string;
}

const servers: ServerData[] = [
  { id: 1, name: "api-db.m4.xlarge.us-west-1" },
  { id: 2, name: "api-db.c5.large.us-east-1" },
  { id: 3, name: "api-db.t3.medium.ap-southeast-1" },
  { id: 4, name: "api-db.r5.large.eu-central-1" },
  { id: 5, name: "api-db.c6g.large.ap-northeast-1" },
  { id: 6, name: "api-db.m6i.large.us-east-2" },
  { id: 7, name: "api-db.t4g.medium.sa-east-1" },
  { id: 8, name: "api-db.r6g.large.ca-central-1" },
  { id: 9, name: "api-db.c7g.medium.eu-west-3" },
];

const environments: EnvironmentItem[] = [
  { id: 1, name: "AWS" },
  { id: 2, name: "Acme" },
  { id: 3, name: "Testing" },
  { id: 4, name: "Staging" },
  { id: 5, name: "Development" },
];

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
          <el-card v-for="env in environments" :key="env.id" class="flex-col">
            {{ env.name }}
          </el-card>
        </div>
      </div>
    </div>
    <div>
      <div class="groups-container">
        <div>Host</div>
        <div class="grid">
          <el-card
            v-for="server in servers.slice(1)"
            :key="server.id"
            class="flex-col"
          >
            {{ server.name }}
          </el-card>
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
