function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => showDatas(data))
}
loadComments();

function showDatas(comments) {
    const commentContainer = document.getElementById('comments')
    for (const comment of comments) {
        console.log(comment.name);
        const img = document.createElement('img');
        // p.style.textAlign = 'center';
        img.src = comment.url;
        commentContainer.appendChild(img);
    }
}