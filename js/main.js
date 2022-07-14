let apiUrl = "http://apiku.apridan.xyz/index.php/";

Vue.createApp({
  data() {
    return {
      mesage: 'Hello Vue!',
      header: {}, 
      list: {
          portofolio: []
      }
      
    }
  },
  
  methods: {
    getHeadersData()
    {
      axios
        .get(apiUrl+"users/1")
        .then((res) => {
          console.log(res.data); 
          this.user = res.data; 
        })
        .catch((error) => {
          console.log(error); 
        });
    },

    beforeMount() {
      this.getHeaderData();
  }
}

}).mount('#app')

