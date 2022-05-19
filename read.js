Vue.createApp({
    data() {
      return {       
        artikel: null,
      };
    },
    methods: {
      getMarkdownData()
      {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const artikel = urlParams.get('artikel');        
        var converter = new showdown.Converter();
        console.log(artikel);
        axios
          .get('https://raw.githubusercontent.com/apridanhm/tekweb2022/master/json/'+artikel)
          .then((res) => {
            var html = converter.makeHtml(res.data);           
            this.artikel = html;
            console.log(html);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getMarkdownData();
    },
  }).mount("#app");
