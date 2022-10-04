const axios = require("axios")
axios.get("https://api.github.com/users/ericnatejones/repos").then(function(response){
    // console.log(response.data)
    console.log(numWatchers(response.data))
})

function numWatchers(repos) {
    return repos.reduce(function(watchers, repo){
        return watchers + repo.watchers
    }, 0)
} 
