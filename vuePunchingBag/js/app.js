var app = new Vue({
    el: "#app",
    data: {
        bagImage: "img/bag.png",
        bagBurstImage: "img/bag-burst.png",
        health: 100,
        health_bar_colors: ['red', 'crimson', 'rgb(240, 87, 87)'],
        ended: false,
        hb_index: 0
    },
    methods: {
        punch: function() {
            this.health -= 10;
            if(this.health === 0){
                this.ended = true;
            }

            if(this.health > 35 && this.health <= 75)
                this.hb_index = 1;
            else if(this.health <= 35)
                this.hb_index = 2;
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
            this.hb_index = 0;
        }
    },
    computed: {
        showImage: function(){
            if(this.ended)
                return this.bagBurstImage;
            else
                return this.bagImage;
        }
    }
});