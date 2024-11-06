import { getProducts, getSortedProducts, getCategories, getProductsByCategory } from '@/lib/api';

global.fetch = jest.fn();

describe('API functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getProducts fetches products with limit', async () => {
    const mockResponse: { id: number; title: string }[] = [{ id: 1, title: 'Product 1' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const limit: number = 5;
    const products = await getProducts(limit);
    expect(fetch).toHaveBeenCalledWith(`https://fakestoreapi.com/products?limit=${limit}`);
    expect(products).toEqual(mockResponse);
  });

  test('getProducts fetches all products without limit', async () => {
    const mockResponse: { id: number; title: string }[] = [{ id: 1, title: 'Product 1' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const products = await getProducts();
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    expect(products).toEqual(mockResponse);
  });

  test('getSortedProducts fetches sorted products', async () => {
    const mockResponse: { id: number; title: string }[] = [{ id: 2, title: 'Product 2' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const sort: string = 'asc';
    const products = await getSortedProducts(sort);
    expect(fetch).toHaveBeenCalledWith(`https://fakestoreapi.com/products?sort=${sort}`);
    expect(products).toEqual(mockResponse);
  });

  test('getCategories fetches product categories', async () => {
    const mockResponse: string[] = ['category1', 'category2'];
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const categories = await getCategories();
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/categories');
    expect(categories).toEqual(mockResponse);
  });

  test('getProductsByCategory fetches products by category', async () => {
    const mockResponse: { id: number; title: string }[] = [{ id: 3, title: 'Product 3' }];
    const category: string = 'electronics';
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const products = await getProductsByCategory(category);
    expect(fetch).toHaveBeenCalledWith(`https://fakestoreapi.com/products/category/${category}`);
    expect(products).toEqual(mockResponse);
  });
});
