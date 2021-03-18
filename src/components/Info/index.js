export default {
  name: 'Info',
  props: {
    value: Number,
    timer: Number,
  },
  computed: {
    calculatedTime() {
      let minutes = Math.floor(this.timer / 60);
      let seconds = this.timer % 60;
      seconds = (seconds < 10) ? `0${seconds}` : seconds;
      return `${minutes}:${seconds}`
    }
  }
}