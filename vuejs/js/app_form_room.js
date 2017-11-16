const heroku_url_api = "https://thawing-journey-78988.herokuapp.com/api/rooms";

const vm_form_room = new Vue({
    el: '#formroom',
    data: {
        rooms: [],
        selected: '',
        message: 'totto'
    },
    mounted() {
        axios.get(heroku_url_api)
            .then(response => {this.rooms = response.data});
    },
    methods: {
        switchLight(room) {
            let post_url = heroku_url_api + "/" + room.id + "/switch-light-and-list";
          //  axios.post(post_url, {roomId: room.id}).then();
            },
        switchRinger(room) {
            //this.message = 'test';
          //  let post_url = heroku_url_api + "/" + room.id + "/switch-ringer-and-list";
          //  axios.post(post_url, {roomId: room.id}).then();
        },

    }
});
