window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");

  if (nav) {
    nav.innerHTML = `
      <nav>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li>
            <a href="/pages/mandag020226.html">Mandag d.02.02.26 - Exercise</a>
          </li>
          <li>
            <a href="/pages/mandag230226.html"
              >Mandag d.23.02.26 - DOM events</a>
          </li>
          <li><a href="/pages/fredag270226.html">Fredag d.27.02.26 - Forms, error handling, templates</a></li>
          <li><a href="/pages/mandag020326.html">Mandag d.02.03.26 - Modules and Authentication</a></li>
        </ul>
        <ul>
          <li>
            <a href="https://github.com/ckirschberg/baseline-ts-project"
              >Extra project (åben projectet seperat i vsCode, kør npm run dev i
              terminalen)</a>
          </li>
          <li>
            <a href="https://github.com/ckirschberg/baseline-ts-project"
              >- forked from Github</a>
          </li>
        </ul>
      </nav>
    `;
  }
});
