const imageCache = new Map()

export const preloadImages = (items) => {
  items.forEach(item => {
    if (!imageCache.has(item.name)) {
      const img = new Image()
      img.src = `/assets/items/${item.name}.png`
      imageCache.set(item.name, img)
    }
  })
}

export const getImageUrl = (name) => {
  const cachedImage = imageCache.get(name)
  return cachedImage ? cachedImage.src : `/assets/items/${name}.png`
}

export const clearImageCache = () => {
  imageCache.clear()
} 