class Styleguide {
  constructor() {
    this.generateNav();
  }

  generateNav() {
    const nav = document.getElementsByClassName("styleguide-nav")[0];
    const components = Array.from(document.getElementsByClassName("component"));
    const markup = [];

    components.forEach(component => {
      const h2 = document.createElement("h2");
      const li = document.createElement("li");
      const a = document.createElement("a");

      h2.innerHTML = component.attributes[0].value;
      h2.className = "styleguide-h2";
      component.prepend(h2);

      a.innerHTML = component.attributes[0].value;
      a.href = `#${component.attributes[0].value}`;
      li.append(a);

      nav.append(li);
    });
  }
}

new Styleguide();
