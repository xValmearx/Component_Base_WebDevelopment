// Custome Code Here



class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <nav class="navbar">
        <div class="nav_logo">Testing Components</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>`;
  }
}

customElements.define('nav-bar', NavBar);