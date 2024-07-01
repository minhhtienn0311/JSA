const api_link1 = "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST";
const api_link2 = "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST";


var input = document.getElementById('abc');
    input.onclick = function click1() {
        let dt = fetch(api_url1)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log("success:", data.detail);
        });
        console.log(dt);
    }