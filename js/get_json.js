Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        artikel: [],
      };
    },
    methods: {
      getArticle()
      {
        axios
          .get('https://raw.githubusercontent.com/apridanhm/tekweb2022/master/json/artikel.json')
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
      this.getArticle() //eksekusi fungsi getArticles() pada bagian methods saat halaman terbuka
    },
  }).mount("#app");
