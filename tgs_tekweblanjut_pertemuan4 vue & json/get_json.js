Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {},
    };
  },
  methods: {
    getHeaderData()
    {
      axios
        .get(
          "./db.json"
        )
        .then((res) => {
          console.log(res.data); //melihat respon data pada console browser
          this.header = res.data; //memperbarui variabel header pada bagian data()
        })
        .catch((error) => {
          console.log(error); //melihat error jika pengambilan data adalah gagal
        });
    }
  },
  beforeMount() {
    this.getHeaderData() //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
  },
}).mount("#app");