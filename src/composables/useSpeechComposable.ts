export function useSpeech(window: any) {
  const speech = window.speechSynthesis
  const voices = speech.getVoices()
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.voice = voices[0]
    speech.speak(utterance)
  }
  return { speak }
}
