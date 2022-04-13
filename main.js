Vue.createApp({
    data() {
      return {
        mesage: 'Hello Vue!',
        header: {
          nama: 'Apridan Husaeni Muharam ',
          NIM: 'NIM : 2000016001',
          tg: '"Saya Adalah Mahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta, Saya Berasal dari Pangandaran, Jawa Barat, Indonesia"',
          fotosaya: "./gambar/apridanfoto.png"
        }, 
        portofolio: [
          {
              title: 'Ms Word',
              desc: '.......',
              image: 'https://imgsrv2.voi.id/S5ELeBtSh4mxvTS8wcvGMPxc_WZQWGDOqRNJ-uDqqWY/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy85OTM5OS8yMDIxMTAzMDE3NDItbWFpbi5qcGc.jpg'
          },
          {
              title: 'Ms Power Point',
              desc: '.......',
              image: 'https://winpeaker.com/wp-content/uploads/2021/05/PowerPoint-3545502.png'
          },
          {
              title: 'Ms Excel',
              desc: '......',
              image: 'https://vemafats.com/wp-content/uploads/2017/05/excel.png'
          },
          {
              title: 'Adobe Premire pro',
              desc: '........',
              image: 'https://i0.wp.com/www.nesabamedia.com/wp-content/uploads/2022/03/Alternatif-Aplikasi-Pengganti-Adobe-Premiere.jpg?fit=1920%2C1080&ssl=1'

          },
          {
              title: 'Skill Belum Diketahui',
              desc: '........',
              image: 'https://media.suara.com/pictures/653x366/2015/12/09/o_1a6225m1nfbm9p13i519phpfa.jpg'

          },
          {
              title: 'Skill Belum Diketahui',
              desc: '........',
              image: 'https://media.suara.com/pictures/653x366/2015/12/09/o_1a6225m1nfbm9p13i519phpfa.jpg'
          },
          {
              title: 'Skill Belum Diketahui',
              desc: '........',
              image: 'https://media.suara.com/pictures/653x366/2015/12/09/o_1a6225m1nfbm9p13i519phpfa.jpg'
          },
          {
              title: 'Skill Belum Diketahui',
              desc: '........',
              image: 'https://media.suara.com/pictures/653x366/2015/12/09/o_1a6225m1nfbm9p13i519phpfa.jpg'
          },
          {
              title: 'Skill Belum Diketahui',
              desc: '........',
              image: 'https://media.suara.com/pictures/653x366/2015/12/09/o_1a6225m1nfbm9p13i519phpfa.jpg'
          },
          {
              title: 'Skill Belum Diketahui',
              desc: '........',
              image: 'https://media.suara.com/pictures/653x366/2015/12/09/o_1a6225m1nfbm9p13i519phpfa.jpg'
          },


      ]
        
      };
    },
    mounted:()=>{    
        axios.get("./header.json")
        .then((res)=>{
          console.log(res.data);
        })
        .catch((error)=>{
          console.log(error);
        })
      }
  }).mount('#app')

  