export const views = (post, posts) => {
  post.views += 1;

  const indexTheArray = posts.findIndex((user) => user.id === post.id);

  if (indexTheArray !== -1) {
    posts[indexTheArray] = post;

    localStorage.setItem("posts", JSON.stringify(posts));

    console.log("Objeto atualizado:", posts);
  }
};

export const templateCard = (data) => {
  const { body, category, title, views, id, image, date } = data;
  const desc = body.slice(0, 126);

  return `
    <div class="card ${category} active" id="card-${id} >
        <p class="post-date">posted: ${date}</p>
        <div class="image">
        <img src="${image}" alt="Imagem de ${title}">
        </div>
        <div class="content">
          <p href="#">
            <span class="title">
              ${title}
            </span>
          </p>
  
          <p class="desc">
            ${body.slice(0, 126)}...
          </p>
  
          <footer class="footer-card">
            <span class="category">${category}</span>
  
            <span class="views">
              <p>${views}</p>
              <i class="ph ph-eye"></i>
            </span>
          </footer>
      </div>
    </div>
  `;
};
