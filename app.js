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

//Blog post code:
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

let allButton = document.getElementById("all-button");

allButton.addEventListener("click", function (event) {
  GenBlogPosts();
});

const blogSect = document.querySelector(".blog");
const genBlogSemOne = () => {
  const filteredPosts = blogInfo.filter((post) => post.id >= 0 && post.id < 6);

  blogSect.innerHTML = filteredPosts
    .map((post) => {
      const { icon, link, heading, desc, date, dataCode } = post;
      return `<article class="blog-post">
    <img src="${icon}" alt="" class="blog-img" />
    <a data-week="${dataCode}" href="${link}" class="blog-head">${heading}</a>
    <p class="blog-desc">${desc}</p>
    <p class="blog-date">${date}</p>
  </article>`;
    })
    .join("");
};

let semOne = document.getElementById("first-button");

semOne.addEventListener("click", genBlogSemOne);

const genBlogSemTwo = () => {
  const filteredPosts = blogInfo.filter((post) => post.id >= 6 && post.id < 12);

  blogSect.innerHTML = filteredPosts
    .map((post) => {
      const { icon, link, heading, desc, date, dataCode } = post;
      return `<article class="blog-post">
    <img src="${icon}" alt="" class="blog-img" />
    <a data-week="${dataCode}" href="${link}" class="blog-head">${heading}</a>
    <p class="blog-desc">${desc}</p>
    <p class="blog-date">${date}</p>
  </article>`;
    })
    .join("");
};

let semTwo = document.getElementById("second-button");

semTwo.addEventListener("click", genBlogSemTwo);

//Generate Homepage Info:
let homeInfo = document.querySelector(".info-sect");

const GenWebInfo = () => {
  homeInfo.innerHTML = homeData
    .map((homeDisplay) => {
      const { title, img, link, desc } = homeDisplay;
      return `<section class="home-info">
    <h2 class="sub-head">
      <a class="head-link" id="blog-tab" href="${link}"
        >${title}</a
      >
    </h2>
    <img
      class="home-image"
      id="blog-image"
      src="${img}"
      alt="Blog image"
    />

    <p class="desc" >
      ${desc}
    </p>
  </section>`;
    })
    .join("");
};
