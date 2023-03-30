function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(respose => respose.json())
        .then(data => sharePosts(data))
}
loadPosts();

function sharePosts(posts) {
    const postsData = document.getElementById('posts');

    for (const post of posts) {
        console.log(post)
        const postData = document.createElement('div');
        postData.classList.add('post');
        postData.innerHTML = `<h1>${post.title}</h1>
        <p>${post.body}</p>`
        postsData.appendChild(postData);

    }
}