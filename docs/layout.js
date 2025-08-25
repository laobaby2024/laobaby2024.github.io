document.addEventListener("DOMContentLoaded", () => {
  const header = `
    <header>
      <img src="avatar.jpg" alt="头像">
      <h1>我的博客</h1>
      <p>这里是副标题描述</p>
    </header>
    <nav>
      <a href="index.html">首页</a>
      <a href="category1.html">分类1</a>
      <a href="category2.html">分类2</a>
      <a href="category3.html">分类3</a>
    </nav>
    <hr>
  `;
  document.body.insertAdjacentHTML("afterbegin", header);

  const footer = `
    <footer>
      <hr>
      <p>© 2025 我的博客 | Powered by Notion + GitHub Pages</p>
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footer);
});
