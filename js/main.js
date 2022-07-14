let apiUrl = "http://apiku.apridan.xyz/index.php/"
Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {}
      };
    },
    methods: {
      getHeaderData()
      {
        axios
          .get(apiUrl+"users/1")
          .then((res) => {
            console.log(res.data); //melihat respon data pada console browser
            this.artikel = res.data; //memperbarui variabel article pada bagian data()
          })
          .catch((error) => {
            console.log(error); //melihat error jika pengambilan data adalah gagal
          });
      }
    },
    beforeMount() {
      this.getHeaderData() //esksekusi fungsi getArticles() pada bagian methods saat halaman terbuka
    },
  }).mount("#app");