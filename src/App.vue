<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
const API_KEY = 'AIzaSyB6tTonrxmyofeQ0rrbwbms718G7pi8Mzs';

export default{
    name: 'App',
    components: {
        SearchBar
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
                .then(response => console.log(response));
        }
    }
}
</script>