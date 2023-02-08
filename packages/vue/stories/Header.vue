<template>
  <header>
    <div class="wrapper">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        <span
          v-if="user"
          class="welcome"
        >
          Welcome,
          <b> {{ user.name }} </b>!
        </span>
        <my-button
          v-if="user"
          size="small"
          label="Log out"
          @click="$emit('logout')"
        />
        <my-button
          v-if="!user"
          size="small"
          label="Log in"
          @click="$emit('login')"
        />
        <my-button
          v-if="!user"
          primary
          size="small"
          label="Sign up"
          @click="$emit('createAccount')"
        />
      </div>
    </div>
  </header>
</template>

<script>
import './header.css';
import MyButton from './Button.vue';

export default {
  name: 'MyHeader',

  components: { MyButton },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ['login', 'logout', 'createAccount'],
};
</script>
