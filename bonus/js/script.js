/*
Bonus:
1- al click su uno dei pallini mostrare l’immagine in posizione corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, 
   cambia immagine automaticamente
*/

var app = new Vue({
    el: '#app',
    data: {
      counter: 0,
      images: [
          'image1.jpg',
          'image2.jpg',
          'image3.jpg',
          'image4.jpg',
      ]
    },
    methods: {
        // next: function () {
        //     this.counter += 1;
        //     if (this.counter > this.images.length - 1) {
        //         this.counter = 0;
        //     }
        // },
        // prev: function () {
        //     this.counter -= 1;
        //     if (this.counter < 0) {
        //         this.counter = this.images.length -1;
        //     }
        // },
        // image: function () {
        //     setInterval (function()  {
        //         this.counter += 1;
        //         if (this.counter > this.images.length - 1) {
        //             this.counter = 0;
        //         }
        //     }, 3000)
        //     console.log(image)
        // }
    },
    created() {
        
        setInterval (() => {
            this.counter += 1;
            if (this.counter > this.images.length - 1) {
                this.counter = 0;
            }
        }, 3000)
        
    }
  })


