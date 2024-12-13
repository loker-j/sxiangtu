import { useCallback, useRef, useEffect } from 'react'
import { getImageUrl, preloadImage } from '../utils/imageUtils'
import { ITEM_POOLS } from '../constants/itemPools'

export const useOptimizedRender = (items, type) => {
  const renderTimeoutRef = useRef(null)
  const isFirstRender = useRef(true)

  const debouncedRender = useCallback((callback) => {
    if (renderTimeoutRef.current) {
      clearTimeout(renderTimeoutRef.current)
    }
    renderTimeoutRef.current = setTimeout(callback, 16)
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      // 预加载常用物品图片
      const itemPool = ITEM_POOLS[type]
      if (!itemPool) {
        console.warn(`未找到类型 ${type} 的物品池配置`)
        return
      }

      const commonItems = Object.values(itemPool)
        .flat()
        .slice(0, 10) // 只预加载前10个常用物品
      
      // 预加载图片
      Promise.all(
        commonItems.map(item => 
          preloadImage(getImageUrl(item.name))
            .catch(error => console.warn(`预加载图片失败: ${item.name}`, error))
        )
      )
      
      // 预加载默认图片
      preloadImage(getImageUrl('default'))
        .catch(error => console.error('默认图片加载失败:', error))
      
      isFirstRender.current = false
    }
  }, [type])

  useEffect(() => {
    return () => {
      if (renderTimeoutRef.current) {
        clearTimeout(renderTimeoutRef.current)
      }
    }
  }, [])

  return {
    debouncedRender
  }
} 