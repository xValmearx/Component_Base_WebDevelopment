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
    </nav>
    <div class = "nav-spacer"><div>
    `;
  }
}
customElements.define('nav-bar', NavBar);

class LargeCard extends HTMLElement {
  constructor() {
    super();

    const img_path = this.getAttribute('img_path')
    const h1 = this.getAttribute('h1')
    const p = this.getAttribute('p')

    if(img_path == null){
      this.innerHTML = `
      <div class = 'large_card'>
        <h1>${h1}</h1>
        <p>${p}</p>
        <p>you are awesome</p>
      </div>
        `;
    }
    else{
      this.innerHTML = `
      <div class = 'large_card'>
        <img src= "${img_path}" alt="logo">
        <h1>${h1}</h1>
        <p>${p}</p>
      </div>
        `;
    }


    
  }
}
customElements.define('large-card', LargeCard);


