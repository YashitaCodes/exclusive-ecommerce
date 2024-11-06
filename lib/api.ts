export async function getProducts(limit?: number) {
  const url = limit 
    ? `https://fakestoreapi.com/products?limit=${limit}` 
    : 'https://fakestoreapi.com/products';
  const res = await fetch(url);
  return res.json();
}

export async function getSortedProducts(sort: string) {
  const url = `https://fakestoreapi.com/products?sort=${sort}`;
  const res = await fetch(url);
  return res.json();
}

export async function getCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  return res.json();
}

export async function getProductsByCategory(category: string) {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  return res.json();
}