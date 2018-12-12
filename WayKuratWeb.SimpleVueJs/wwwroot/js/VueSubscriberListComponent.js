var subscriberListComponent = new Vue({
    el: '#subscriber-list-component',
    data() {
        return {
            subscribers: [],
            isViewReady: false
        };
    },
    methods: {
        refreshData: function () {
            var self = this;
            this.isViewReady = false;

            //UPDATED TO GET DATA FROM WEB API
            axios.get('/api/subscribers/getall/')
                .then(function (response) {
                    self.subscribers = response.data;
                    self.isViewReady = true;
                })
                .catch(function (error) {
                    alert("ERROR: " + (error.message|error));
                }); 
        }
    },
    created: function() {
        this.refreshData();
    }
});