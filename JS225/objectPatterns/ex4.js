/* eslint-disable max-len */

// In this exercise, you'll build a simple inventory management system. The
// system is composed of an item creator, an item manager, and a reports
// manager. The item creator makes sure that all necessary information are
// present and valid. The item manager is responsible for creating items,
// updating information about items, deleting items, and querying information
// about the items. Finally, the report manager generates reports for a
// specific item or ALL items. Reports for specific items are generated
// from report objects created from the report manager. The report manager
// is responsible for reports for all items.

// Component Specifications
// Here's all the required information for an item:

// SKU code: This is the unique identifier for a product. It consists of the
// first 3 letters of the item and the first 2 letters of the category. If
// the item name consists of two words and the first word consists of two
// letters only, the next letter is taken from the next word.
// Item name: This is the name of the item. It must consist of a minimum of
// 5 characters. Spaces are not counted as characters.
// Category: This is the category that the item belongs to. It must consist
// of a minimum of 5 characters and be only one word.
// Quantity: This is the quantity in stock of an item. This must not be
// blank. You may assume that a valid number will be provided.
// The following are the methods that the item manager can perform:

// create: This method creates a new item. Returns false if creation is
// not successful.
// update: This method accepts an SKU Code and an object as an argument and
// updates any of the information on an item. You may assume valid values
// will be provided.
// delete: This method accepts an SKU Code and deletes the item from the
// list. You may assume a valid SKU code is provided.
// items: This property contains a list of all the items.
// inStock: This method returns a list of all the items that have a quantity
// greater than 0.
// itemsInCategory: This method returns a list of all the items for a
// given category
// The following are the methods on the reports managers:

// init: This method accepts the ItemManager object as an argument and
// assigns it to the items property.
// createReporter: This method accepts an SKU code as an argument and returns
// an object.
// The returned object has one method, itemInfo. It logs to the console all
// the properties of an object as "key:value" pairs (one pair per line).
// There are no other properties or methods on the returned object (except
//   for properties/methods inherited from Object.prototype).
// reportInStock: Logs to the console the item names of all the items that
// are in stock as a comma separated values.
// Notes:

// There's no need to add the ability to validate the uniqueness of the SKU
// code. Given the current description, it's possible that a duplicate wil
//  exist.
// Each required piece of information for an item corresponds to one property.
// If any of the information provided is not valid, the item creator returns
// an object with a notValid property with a value of true.
// The created item objects should not have any methods/properties on them
// other than the required information above and those inherited from
// Object.prototype.
// You may add methods to the item manager as you deem necessary.
// Here is a sample run that you can use as a reference:

function Item(name, category, quant) {
  this.name = name;
  this.category = category;
  this.quantity = quant;
  this.SKU = Item.generateSKU(name, category);
  if (!(Item.validName(this.name) && Item.validCategory(this.category) &&
        Item.validQuantity(this.quantity))) {
    this.notValid = true;
  }
}

Item.validName = function(name) {
  return (name.replaceAll(/ /g, '').length) > 4;
};

Item.validCategory = function(category) {
  return /^\w{5,}$/.test(category);
};

Item.validQuantity = function(quant) {
  return (typeof quant === 'number' && quant >= 0);
};

Item.generateSKU = function(name, category) {
  let first = name.slice(0,3);
  let last = (first.length === 2) ? category.slice(0,3) : category.slice(0,2);
  return (first + last).toUpperCase();
};

let ItemManager = {
  _items: [],

  create(name, category, quant) {
    let newItem = new Item(name, category, quant);
    if (!newItem.notValid) this.items.push(newItem);
  },

  delete(SKU) {
    let idx = this.findItem(SKU);
    if (idx !== -1) {
      this.items.splice(idx, 1);
    }
  },

  update(SKU, update) {
    let idx = this.findItem(SKU);
    if (idx !== -1) {
      this.items[idx].quantity = update.quantity;
    }
  },

  findItem(SKU) {
    let len = this.items.length;
    for (let idx = 0; idx < len; idx++) {
      if (this.items[idx].SKU === SKU) return idx;
    }

    return -1;
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },

  get items() {
    return this._items;
  },
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(SKU) {
    let idx = this.items.findItem(SKU);
    let item = this.items.items[idx] ? this.items.items[idx] : {};

    return {
      itemInfo() {
        Object.entries(item).forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });
      },
    };
  },

  reportInStock() {
    let results = this.items.items.filter(item => item.quantity > 0);
    console.log(results.map(item => item.name).join(','));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);

ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot

ReportManager.reportInStock();
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10