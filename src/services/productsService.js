export default async function productsService() {
    const URL = "https://fakestoreapi.com/products/"
    console.log("FETCHING", URL)
    const response = await fetch(URL);
    const products = await response.json();
    return products;

}