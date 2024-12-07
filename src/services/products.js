export const searchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const json = await response.json()
    const products = json.products

    return products?.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      images: product.images[0],
    }))
  } catch (error) {
    throw new Error('Error', error)
  }
}
