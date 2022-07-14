Vue.createApp({
    data() {
      return {
        mesage: 'Hello Vue!',
        header: {
          nama: 'Apridan Husaeni Muharam',
          tg: 'Saya Adalah Mahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta, NIM 200016001. Saya Berasal dari Pangandaran, Jawa Barat, Indonesia',
          fotosaya: "./gambar/fotosaya.png"
        }, 
        
        list: {
            portofolio: [
                {
                    title: 'Sistem Informasi Geografis',
                    desc: 'Saya pernah membuat SIG desa saya sendiri yaitu Desa Karangkamiri, dan berikut salahsatu project saya;',
                    image: './gambar/gis.jpg',
                    url: 'https://karangkamiri.gis.co.id/'   
                    
                },
                {
                  title: 'Figma',
                  desc: 'Figma adalah editor grafik vektor dan alat prototyping aplikasi, dan berikut salah satu project saya;',
                  image: 'https://s3-alpha.figma.com/hub/file/716359964/3b5d23d8-502a-454d-a590-6b8add2f367f-cover.png',
                  url: 'https://www.figma.com/file/9LobbzJJr99aVjDXoEb4eK/UX-Desain?node-id=194%3A2653'   
                  
                },           
                {
                    title: 'HTML',
                    desc: 'HTML adalah bahasa markah yang dirancang untuk ditampilkan di peramban internet, dan berikut salah satu project saya;',
                    image: 'https://itjambi.com/wp-content/uploads/2017/07/html.jpg',  
                    url: 'https://github.com/apridanhm/tekweb2022'  
                },
                {
                  title: 'CSS',
                  desc: 'CSS adalah untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam',
                  image: 'https://www.matawebsite.com/images/blog/323_sejarah_dan_perkembangan_css.png',
                  url: 'https://github.com/apridanhm/tekweb2022'    
                },
                {
                  title: 'Java Script',
                  desc: 'JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis',
                  image: 'https://dc722jrlp2zu8.cloudfront.net/media/featured_images/errores-comunes-en-javascript.jpg',
                  url: 'https://github.com/apridanhm/tekweb2022'    
                },
                {
                  title: 'Bootstrap',
                  desc: 'Bootstrap adalah framework CSS dan JS yang sumber terbuka dan bebas untuk merancang web yang rsponsive',
                  image: 'https://res.cloudinary.com/webdevacademy/image/upload/v1516676760/bootstrap/webdevacademy-bootstrap-4.png',
                  url: 'https://github.com/apridanhm/tekweb2022'    
                },
                {
                  title: 'Vue.js',
                  desc: 'Vue.js adalah kerangka kerja JavaScript yang bersifat progresif, bersumber terbuka untuk membangun antarmuka pengguna',
                  image: 'https://swansoftwaresolutions.com/wp-content/uploads/2020/01/Benefits-of-Using-VUE.JS-1024x576.jpeg',
                  url: 'https://github.com/apridanhm/tekweb2022'    
                },
                {
                  title: 'Adobe Premiere Pro',
                  desc: 'Adobe Premiere Pro adalah sebuah program penyunting video berbasis non-linier dari Adobe Systems',
                  image: 'https://danangmike.com/wp-content/uploads/2018/11/maxresdefault-1.jpg',
                  url: 'https://youtu.be/TzC_DYyXYL8'    
                },
                {
                  title: 'Bahasa Arab',
                  desc: 'Bahasa Arab adalah bahasa Al-Quran dan bahasa Nabi kita yaitu Muhammad SAW',
                  image: 'https://cdn0-production-images-kly.akamaized.net/WTtl6TS3NP-7ib5r1gtRmrXTrYI=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3441677/original/035336200_1619575676-pisit-heng-FQvadXmA524-unsplash.jpg',
                  url: '#'    
                }

            ]
        }
        
      }
    }
  }).mount('#app')

  
