<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList :videos="videos"></VideoList>
        <!-- VideoList v-bind:videos="videos"></VideoList-->
        <!--the first videos here is the name of the props
           and the second one is the data.videos 
           in react this second one will be the state -->
    </div>
</template>


<script>
/* working with vue instance 
new Vue({
    el: '#app',
    data: {//Initialize our list of 'ingridients
        textInput: ''
    }
})*/

import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const API_KEY = 'AIzaSyB6tTonrxmyofeQ0rrbwbms718G7pi8Mzs';

export default{
    name: 'App',
    components: {
        SearchBar,
        VideoList
    },
    data() {
        return { videos: [] }
    },
    methods: {
        onTermChange: function(searchTerm) {
            axios
                .get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet',
                        q: searchTerm
                    }
                })
                .then(response => {
                    this.videos = response.data.items;
                });
        }
    }
}
</script>