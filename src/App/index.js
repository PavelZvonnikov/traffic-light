import Info from '../components/Info/temp.vue'

export default {
  name: 'app',
  components: {
    Info
  },
  data() {
    const state = {
      activeColor: 0,
      timeToChange: 0,
      count: 0,
      colorsList: [
        {
          color: 'red',
          seconds: 10,
          id: 1
        },
        {
          color: 'yellow',
          seconds: 3,
          id: 2
        },
        {
          color: 'green',
          seconds: 15,
          id: 3
        },
        {
          color: 'yellow',
          seconds: 3,
          id: 2
        },
      ],
    };

    return state;
  },
  methods: {
    getStorage() {
      return JSON.parse(localStorage.getItem('values'))
    },
    setStorage (timeToChange, activeColor, count) {
      localStorage.setItem('values', JSON.stringify({timeToChange, activeColor, count}))
    }
  },
  mounted() {
    const { timeToChange, activeColor, count } = this.getStorage();

    const routerValue = Number((this.$route.path).slice(1));

    if (timeToChange !== null && activeColor !== null && count !== null && (routerValue - 1) === activeColor) {
      this.activeColor = Number(activeColor);
      this.timeToChange = Number(timeToChange);
      this.count = Number(count);

    } else {
      this.activeColor = routerValue - 1;
      this.timeToChange = this.colorsList[this.activeColor].seconds;
    }

    setInterval(() => {
      this.count++;
      this.timeToChange--;
      if (this.count > this.colorsList[this.activeColor].seconds) {
        this.activeColor = (this.activeColor < 3) ? this.activeColor + 1 : 0;
        this.count = 0;
        this.timeToChange = this.colorsList[this.activeColor].seconds;
        this.$router.push({ path: `${this.colorsList[this.activeColor].id}` });
      }
      this.setStorage(this.timeToChange, this.activeColor, this.count)
    }, 1000);
  }
}