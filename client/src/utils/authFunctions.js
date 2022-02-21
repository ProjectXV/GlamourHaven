export function setWithExpiry(key, value, ttl) {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

// Delete all localStorage items with a set expiry date
export function deleteExpiredLS() {
  var eachitem;
  var eachkey;
  var dummyitem;

  // Loop all localStorage items that has an expiry date
  for (var i = 0; i < localStorage.length; i++) {
    eachitem = localStorage.getItem(localStorage.key(i));
    eachkey = localStorage.key(i);
    // If value includes "expiry", call GetWithExpiry to read it and delete if expired
    if (eachitem.includes("expiry")) {
      // Call function to read it and delete if expired
      // eslint-disable-next-line no-unused-vars
      dummyitem = getWithExpiry(eachkey);
    }
  }
}
