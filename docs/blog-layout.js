// 博客统一布局系统 - 自动加载头部、导航、底部
document.addEventListener('DOMContentLoaded', function() {
    
    // 检查是否为文章页面
    const isArticlePage = document.body.classList.contains('notion-article');
    
    if (isArticlePage) {
        console.log('检测到文章页面，开始加载博客布局...');
        
        // 博客头部和导航HTML
        const headerHTML = `
            <header>
                <img src="../avatar.jpg" alt="网站头像" onerror="this.src='avatar.jpg'">
                <h1>我的博客</h1>
                <p>这里是博客副标题描述</p>
            </header>
            
            <nav>
                <ul>
                    <li><a href="../index.html">首页</a></li>
                    <li><a href="../category1.html">一级菜单1</a>
                        <ul>
                            <li><a href="../category1_sub1.html">二级菜单1-1</a>
                                <ul>
                                    <li><a href="../category1_sub1_item1.html">三级菜单1-1-1</a></li>
                                    <li><a href="../category1_sub1_item2.html">三级菜单1-1-2</a></li>
                                </ul>
                            </li>
                            <li><a href="../category1_sub2.html">二级菜单1-2</a></li>
                        </ul>
                    </li>
                    <li><a href="../category2.html">一级菜单2</a>
                        <ul>
                            <li><a href="../category2_sub1.html">二级菜单2-1</a></li>
                            <li><a href="../category2_sub2.html">二级菜单2-2</a></li>
                        </ul>
                    </li>
                    <li><a href="../category3.html">一级菜单3</a></li>
                    <li><a href="../category4.html">一级菜单4</a></li>
                    <li><a href="../category5.html">一级菜单5</a></li>
                    <li><a href="../others.html">其它</a></li>
                </ul>
            </nav>
            
            <hr class="divider">
        `;
        
        // 博客底部HTML
        const footerHTML = `
            <footer>
                <hr>
                <p>© 2025 我的博客 | Powered by Notion + GitHub Pages</p>
            </footer>
        `;
        
        // 在页面开头插入头部和导航
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
        
        // 处理文章内容容器
        const notionContent = document.querySelector('.notion-content');
        if (notionContent) {
            // 创建文章主容器
            const articleMain = document.createElement('main');
            articleMain.className = 'article-main';
            
            // 添加返回链接
            const backLink = document.createElement('div');
            backLink.className = 'back-link';
            backLink.innerHTML = '<a href="../index.html">← 返回首页</a>';
            
            // 创建文章容器
            const articleContainer = document.createElement('article');
            articleContainer.className = 'notion-article-content';
            
            // 移动原有内容到新容器
            while (notionContent.firstChild) {
                articleContainer.appendChild(notionContent.firstChild);
            }
            
            // 组装结构
            articleMain.appendChild(backLink);
            articleMain.appendChild(articleContainer);
            
            // 替换原有内容
            notionContent.parentNode.replaceChild(articleMain, notionContent);
        }
        
        // 在页面末尾插入底部
        document.body.insertAdjacentHTML('beforeend', footerHTML);
        
        // 确保标题格式正确
        if (!document.title.includes(' - 我的博客')) {
            document.title += ' - 我的博客';
        }
        
        console.log('博客布局加载完成！');
    }
});