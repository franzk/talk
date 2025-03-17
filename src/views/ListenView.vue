<template>
  <div class="listen">
    <h1>Talk !!</h1>

    <p v-if="!onAir">Press GO and talk</p>
    <p v-else>ON AIR !!</p>

    <div>
      <button @click="go">GO</button>
      <button @click="stop">STOP</button>
    </div>

    <div class="transcripts">
      <p v-for="(transcript, index) in transcripts" :key="index">&rarr; {{ transcript }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let recognition: SpeechRecognition | null = null
const transcripts = ref<string[]>([])
const onAir = ref(false)

const go = () => {
  console.log('GO')
  onAir.value = true
  recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)()
  recognition.lang = 'fr-FR'
  recognition.continuous = true
  recognition.interimResults = false
  recognition.onresult = (event: any) => {
    console.log('result', event)
    transcripts.value.push(event.results[event.results.length - 1][0].transcript.trim())
    console.log('Reconnu :', transcripts)
  }
  recognition.start()
}

const stop = () => {
  console.log('STOP')
  recognition?.stop()
  onAir.value = false
}
</script>

<style scoped lang="scss">
.listen {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  h1 {
    color: white;
  }

  button {
    margin: 10px;
    padding: 10px;
  }

  .transcripts {
    display: flex;
    flex-direction: column;
    gap: 1px;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 20px;
    width: 90%;
    p {
      margin: 0;
      font-size: 2rem;
    }
  }
}
</style>
