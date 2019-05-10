
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    // this.data = document.querySelector(`.tabs-link[data-tab='${this.data.dataset.tab}']`);
    // this.data = document.querySelector(`.tabs-link[data-tab='1']`);
    // console.log(this.data.dataset.tab);
    this.data = document.querySelector(`.tabs-link[data-tab='${this.element.dataset.tab}']`);

    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(`.tabs-Item[data-tab='${this.element.dataset.tab}']`)
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select())
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    const links = document.querySelectorAll('.tabs-link');
    console.log(links);

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    links.forEach(link => {
      // console.log(links.classList);
      this.element.classList.remove('tabs-link-selected');
      
    });
    

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.element.select('tabs-link-selected');

  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.classList.remove('tabs-item-selected');
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    items.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/
const tabLink = document.querySelectorAll('.tabs-link');
console.log(tabLink);

tabLink.forEach(tabLink => {
  return new TabLink(tabLink);
});

// links = document.querySelectorAll();