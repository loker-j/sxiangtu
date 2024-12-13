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

// 添加图片格式检查函数
export const checkImageFormat = async (url) => {
  try {
    const response = await fetch(url)
    const contentType = response.headers.get('content-type')
    
    if (!contentType?.startsWith('image/')) {
      console.warn('文件格式不是图片:', {
        url,
        contentType
      })
      return false
    }
    
    return true
  } catch (error) {
    console.error('检查图片格式失败:', error)
    return false
  }
} 