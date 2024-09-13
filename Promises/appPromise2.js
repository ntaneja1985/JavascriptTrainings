fetch('video.json')
//.json returns a Promise
.then(response => response.json())
//have the final in-memory result when json is parsed
.then(data => console.log(data));

