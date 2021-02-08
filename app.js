// check if browser supports feature
if ('serviceWorker' in navigator) {
  // Add event listener to register our worker
  window.addEventListener('load', async () => {
    // Some basic error handling. Even if it fails, it'll try on the next load
    try {
      const reg = await navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.log('Registration failed: ', err);
    }
  });
}

const api = 'https://jsonplaceholder.typicode.com/posts';
const postsContainer = document.getElementById('posts');
postsContainer.innerHTML = `
    <div class='col'>
        <div class="row justify-content-center align-items-center">
            <img src='/assets/200.gif' alt='loading'>
        </div>
    </div>
`;
const getPosts = async () => {
  try {
    const res = await fetch(api);
    const posts = await res.json();
    postsContainer.innerHTML = '';
    posts.forEach(post => {
      let postItem = document.createElement('div');
      postItem.classList = 'col-md-4 mb-4';
      postItem.innerHTML = `
          <div class="card">
              <img class="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.body}</p>
              </div>
          </div>
      `;
      postsContainer.appendChild(postItem);
    });
  } catch (error) {
    postsContainer.innerHTML = `
        <div class='col'>
            <div class="row justify-content-center align-items-center">
                <h2>Apparently, something went wrong</h2>
            </div>
        </div>
      `;
  }
};

getPosts();
