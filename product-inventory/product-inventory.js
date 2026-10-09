let products = [
        {product: "Phone", inventory: 20}, 
        {product: "Laptop", inventory: 32}, 
        {product: "Television", inventory: 14}, 
        {product: "Camera", inventory: 48}
    ];

function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    if (price < 0) return null;
    // TODO: Implement logic
    const discountPrice = (1 - discountRate)*price
    return discountPrice;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return "I'm sorry, data cannot be filtered.";
    return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return "I'm sorry, unable to sort the inventory.";
    return [...inventory].sort((a, b) => a[key] - b[key]);
}

module.exports = { calculateDiscount, filterProducts, sortInventory };