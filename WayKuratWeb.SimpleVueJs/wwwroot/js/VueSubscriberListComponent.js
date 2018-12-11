var subscriberListComponent = new Vue({
    el: '#subscriber-list-component',
    data: {
        subscribers: [],
        isViewReady: false
    },
    methods: {
        refreshData: function () {
            this.isViewReady = false;
            
            //dummy data for now, will update this later
            var subscribers = [
                { name: 'jic', email: 'paytercode@waykurat.com' },
                { name: 'kin', email: 'monsterart@waykurat.com' }
            ];

            this.subscribers = subscribers;
            this.isViewReady = true;
        }
    },
    created: function () {
        this.refreshData();
    }
});