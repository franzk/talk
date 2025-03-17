<template>
  <div class="talk">
    <h1>Talk</h1>

    <textarea v-model="message" placeholder="Type your message here" />

    <button @click="read">Read</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSpeech } from '@/composables/useSpeechComposable'

const speach = useSpeech(window)
const message = ref('')

const read = () => {
  speach.speak(message.value)
}
</script>

<style scoped lang="scss">
.talk {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  h1 {
    color: white;
  }

  textarea {
    width: 70%;
    height: 100px;
    padding: 10px;
    font-size: 1.2em;
  }

  button {
    margin: 10px;
    padding: 10px;
    font-size: 1.2em;
  }
}
</style>
