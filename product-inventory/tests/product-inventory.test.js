const { calculateDiscount, filterProducts, sortInventory } = require("../product-inventory.js");

describe("Calculate the discounted price of a product", () => {
    test("Positive case: Calculate the discounted price of a product", () => {
        expect(calculateDiscount(100, .2)).toBe(80);    
    }) 

    test("Negative case: Calculate discount if not a number in price parameter", () => {
        expect(calculateDiscount("100", .2)).toBe(null);
    })

    test("Negative case: Calculate discount if not a number in discountRate parameter", () => {
        expect(calculateDiscount(100, ".2")).toBe(null);
    })

    test("Negative case: Calculate if the discount is over 100%", () => {
        expect(calculateDiscount(100, 1.2)).toBe(null);
    })

    test("Negative case: Calculate the discount if the parameter is negative", () => {
        expect(calculateDiscount(-100, .2)).toBe(null);
    })

    test("Edge case: Calculate the discount if the discount is 100%", () => {
        expect(calculateDiscount(100, 1)).toBe(0);
    })

    test("Edge case: Calculate the discount if the discount is 0", () => {
        expect(calculateDiscount(100, 0)).toBe(100);
    })
}) 

describe("Filtering products array", () => {
    let products = [
        {product: "Phone", inventory: 20}, 
        {product: "Laptop", inventory: 32}, 
        {product: "Television", inventory: 14}, 
        {product: "Camera", inventory: 48}
    ];

    test("Positive case: Filter the products array", () => {
        expect(filterProducts(products, (elem) => elem.product[0] === "P")).toEqual([{product: "Phone", inventory: 20}]);
    })
})

describe("Sorting inventory", () => {
    let products = [
        {product: "Phone", inventory: 20}, 
        {product: "Laptop", inventory: 32}, 
        {product: "Television", inventory: 14}, 
        {product: "Camera", inventory: 48}
    ];

    test("Positive case: Sort inventory in ascending order by key", () => {
        expect(sortInventory(products, "inventory")).toEqual([
        {product: "Television", inventory: 14}, 
        {product: "Phone", inventory: 20}, 
        {product: "Laptop", inventory: 32}, 
        {product: "Camera", inventory: 48}
    ]);
    })

})