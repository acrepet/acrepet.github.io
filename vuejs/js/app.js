const heroku_url_api = "https://thawing-journey-78988.herokuapp.com/api/rooms";

const vm = new Vue({
    el: '#app',
    data: {
        rooms: [],
        selectedRoom: 0
    },
    mounted() {
        axios.get(heroku_url_api)
            .then(response => {this.rooms = response.data});
    },
    methods: {
        switchLight(room) {
            this.selectedRoom = room;
            let post_url = heroku_url_api + "/" + room.id + "/switch-light-and-list";
            axios.post(post_url, {roomId: room.id})
                .then(response => {this.rooms = response.data});
            },
        switchRinger(room) {
            this.selectedRoom = room;
            let post_url = heroku_url_api + "/" + room.id + "/switch-ringer-and-list";
            axios.post(post_url, {roomId: room.id})
                .then(response => {this.rooms = response.data});
        },

    }
});
