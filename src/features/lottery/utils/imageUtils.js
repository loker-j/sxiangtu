export const getImageUrl = (itemName) => {
  try {
    // 对中文文件名进行编码
    const encodedName = encodeURIComponent(itemName)
    return `/assets/items/${encodedName}.webp`
  } catch (error) {
    console.error('获取图片URL失败:', {
      error,
      itemName
    })
    return '/assets/items/default.webp'
  }
}

// 添加图片预加载函数
export const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(url)
    img.onerror = () => {
      console.warn('图片预加载失败:', url)
      reject(new Error(`Failed to load image: ${url}`))
    }
    img.src = url
  })
} 