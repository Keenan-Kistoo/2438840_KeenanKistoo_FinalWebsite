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
