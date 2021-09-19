export const normalizeProduct = (product) => {
  return Object.entries(product).map((item) => ({
    key: item[0],
    ...item[1]
  }))
}