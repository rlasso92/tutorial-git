<script setup lang="js">
import { ref } from "vue";
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

let user = {
  name: '',
  lastname: '',
  email: '',
  phone: ''
}

const visible = ref(false);

function showDialog() {
  visible.value = !visible.value;
}

</script>

<template>

  <div class="justify-center">
    <Card class="flex justify-center">
      <template #title>
        <h4>Vue Test</h4>
      </template>
      <template #content>
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 col-span-6">Name</div>
          <div class="col-span-12 col-span-6">
            <InputText id="name" v-model="user.name" />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 col-span-6">Last Name</div>
          <div class="col-span-12 col-span-6">
            <InputText id="lastname" v-model="user.lastname" />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 col-span-6">Email</div>
          <div class="col-span-12 col-span-6">
            <InputText id="mail" v-model="user.email" />
          </div>
        </div>
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 col-span-6">Phone</div>
          <div class="col-span-12 col-span-6">
            <InputText id="phone" v-model="user.phone" />
          </div>
        </div>
      </template>
      <template #footer>
        <Button type="button" label="Send" icon="pi pi-search" :loading="loading" @click="showDialog" />
      </template>
    </Card>

    <Dialog v-model:visible="visible" modal header="User Info" :style="{ width: '25rem' }">
      <ul>
        <li>Name: {{ user.name }}</li>
        <li>Last Name: {{ user.lastname }}</li>
        <li>Email: {{ user.email }}</li>
        <li>Phone: {{ user.phone }}</li>
      </ul>
    </Dialog>
  </div>

</template>
