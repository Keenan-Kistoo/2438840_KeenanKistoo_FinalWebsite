//Navigation Bar Code:

let navBar = document.querySelector(".nav-bar");

function SetNavBar(count) {
  const { title, classOne, classTwo, classThree, classFour } = details;
  navBar.innerHTML = `<section class="heading">
  <h1 class="main-head">${details[count].title}</h1>
  </section>
  <section class="tabs">
  <!--Container-->
  <ul class="links">
    <!--Indvidual Links-->
    <li>
      <a class="${details[count].classHome}" href="index.html">Homepage</a>
    </li>
    <li><a class="${details[count].classBlog}" href="blog.html">Blogs</a></li>
    <li><a class="${details[count].classDesign}" href="design.html">Designs</a></li>
    <li>
      <a class="${details[count].classPort}" href="portfolio.html">Portfolio</a>
    </li>
    <li><a class="${details[count].classEssay}" href="essay.html">Essays</a></li>
  </ul>
  </section>`;
}

let blogSection = document.querySelector(".blog");
let ready = false;
const GenBlogPosts = () => {
  blogSection.innerHTML = blogInfo
    .map((blogPost) => {
      const { icon, link, heading, desc, date, dataCode } = blogPost;
      return `<article class="blog-post">
    <img
      src="${icon}"
      alt=""
      class="blog-img"
    />
    <a data-week="${dataCode}" href="${link}" class="blog-head">${heading}</a>
    <p class="blog-desc">
      ${desc}
    </p>
    <p class="blog-date">${date}</p>
  </article>`;
    })
    .join("");
  ready = true;
  //console.log(ready);
};
