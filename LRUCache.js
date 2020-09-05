/* Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1. put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up: Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache(2); 2 = capacity 

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/




// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.store = {};
    this.tracker = [];
  }

  get(key) {
    if (Object.keys(this.store).length + 1 > this.capacity) {
      this.tracker.splice(this.tracker.findIndex(elem => elem === key), 1);
      this.tracker.push(key);
    }
    console.log(`returns ${this.store[key] || -1}`);
    return this.store[key] || -1;
  }

  put(key, value) {
    if (Object.keys(this.store).length + 1 > this.capacity) {
      var invalidated = this.tracker[0];
      this.tracker.shift();
      delete this.store[invalidated];

      console.log("evicts key " + invalidated);
    }
    this.store[key] = value;
    this.tracker.push(key);
  }
}

// As you're using a key, search for it in array, splice it out and push it. That way
// LRU items are at the beginning of the array. Just unshift it to remove it

var cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4

