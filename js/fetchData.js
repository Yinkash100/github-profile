window.on = ()=>{
    const query = `{
        user(login: "yinkash100") {
            id
            name
            bio
            avatarUrl
            url
            email
            websiteUrl
            twitterUsername
            repositories(last : 15 )
            {
                nodes
                {
                    name
                    description
                    updatedAt
                }
            }
        }
    }`

    const http = new XMLHttpRequest();
    const url = 'https://api.github.com/graphql';
    const token = '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'

    http.open('POST', url, true);
    http.withCredentials = false

    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', `bearer ${token}`)
    http.setRequestHeader('mode', 'no-cors')
    http.setRequestHeader('Access-Control-Allow-Origin', "http://127.0.0.1:8080")
    http.setRequestHeader('Access-Control-Allow-Credentials', 'false')

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    try {
        http.send(JSON.stringify(query));
        if (http.status != 200) {
            console.log(`Error ${http.status}: ${http.statusText}`);
        } else {
            console.log('response', http.response);
        }
    } catch (err) {
        console.log("Request failed", err);
    }}