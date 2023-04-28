class ItemsController {
    constructor(currentId = 0) {
      this.items = [];
      this.currentId = currentId;
    }
  
    addItem(productName, productDescription, productImg, productCreatedAt) {
      this.currentId++;
      const newItem = {
        id: this.currentId,
        product: {
          name: productName,
          description: productDescription,
          img: productImg,
          createdAt: productCreatedAt,
        },
        post: {
          name: '',
          text: '',
          img: '',
          author: '',
          createdAt: '',
        },
      };
      this.items.push(newItem);
    }
  
    getAllItems() {
      return this.items;
    }
  }

const myItemsController = new ItemsController();
const item1 = { id: 1, title: 'Item 1' };
const item2 = { id: 2, title: 'Item 2' };

myItemsController.addItem(item1);
myItemsController.addItem(item2);
const allItems = myItemsController.getAllItems();
console.log(allItems); // Output: [item1, item2]