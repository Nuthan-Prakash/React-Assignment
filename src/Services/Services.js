async function getListOfBlogs() {
    let url = "https://jsonplaceholder.typicode.com/posts"
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getUserEmailList() {
    let url = "https://jsonplaceholder.typicode.com/users"
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getComments(postId) {
    let url = "https://jsonplaceholder.typicode.com/comments?postId=" + postId;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getPostById(postId) {
    let url = "https://jsonplaceholder.typicode.com/posts/" + postId;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getAlbums() {
    let url = "https://jsonplaceholder.typicode.com/albums"
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getAlbumsById(albumId) {
    let url = "https://jsonplaceholder.typicode.com/albums/" + albumId + "/photos";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function postMyPost(Title, Body, UserId) {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    const response =  await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: Title,
            body: Body,
            userId: UserId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const data = await response.json();
    return data;
}

module.exports = {
    getListOfBlogs,
    getUserEmailList,
    getComments,
    getAlbums,
    getAlbumsById,
    getPostById,
    postMyPost
}