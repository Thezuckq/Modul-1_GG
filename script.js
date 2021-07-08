    function onSubmit() {
        const title = document.getElementById("title").value;
        const desc = document.getElementById("desc").value;
        const message = "Your playlist is successfully created. " + title + " ,desc: " + desc;
        alert(message);
    }

    const axios = require('axios');

    axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
        .then(function (response) {
            let trackTitle = response.data.name;
            document.getElementById("trackTitle").innerHTML = "Track Title: " + trackTitle;
            console.log(trackTitle);

            let namaArtist = response.data.album.artists[0].name;
            document.getElementById("artists").innerHTML = "Artists: " + namaArtist;
            console.log(namaArtist);

            let albums = response.data.album.name;
            document.getElementById("albums").innerHTML = "Albums: " + albums;
            console.log(albums);
        })
        .catch(function(error) {
            let messageError = "We can't found the songs";
            alert(messageError)
            console.log(error);
        });
