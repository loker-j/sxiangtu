export const checkImageAvailability = async (itemName) => {
  const url = `/assets/items/${encodeURIComponent(itemName)}.png`
  try {
    const response = await fetch(url)
    const result = {
      itemName,
      url,
      status: response.status,
      ok: response.ok,
      contentType: response.headers.get('content-type'),
      contentLength: response.headers.get('content-length'),
      isImage: response.headers.get('content-type')?.startsWith('image/')
    }
    
    if (!result.isImage) {
      console.warn('返回的不是图片:', result)
      return false
    }
    
    console.log('图片检查结果:', result)
    return result.ok && result.isImage
  } catch (error) {
    console.error('图片检查失败:', {
      itemName,
      url,
      error: error.message
    })
    return false
  }
}

export const generateImageReport = async (items) => {
  console.group('图片文件检查报告')
  
  const missingImages = []
  const wrongTypeImages = []
  const results = await Promise.allSettled(
    items.map(async item => {
      const url = `/assets/items/${encodeURIComponent(item.name)}.png`
      try {
        const response = await fetch(url)
        const contentType = response.headers.get('content-type')
        
        if (!response.ok) {
          missingImages.push(item.name)
          return { ok: false, reason: 'not_found' }
        }
        
        if (!contentType?.startsWith('image/')) {
          wrongTypeImages.push(item.name)
          return { ok: false, reason: 'wrong_type', contentType }
        }
        
        return { ok: true }
      } catch (error) {
        return { ok: false, reason: 'error', error: error.message }
      }
    })
  )
  
  console.log('缺失的图片文件:', missingImages)
  console.log('格式错误的文件:', wrongTypeImages)
  console.groupEnd()
  
  return {
    missingImages,
    wrongTypeImages,
    results
  }
} 