import { useState } from 'react'

const WeChatButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  return (
    <>
      <button 
        className="wechat-button"
        onClick={() => setIsPopupVisible(true)}
      >
        <img 
          src="/assets/images/wechat-icon.png" 
          alt="微信" 
          width="32" 
          height="32"
        />
      </button>

      {isPopupVisible && (
        <div className="wechat-popup">
          <div className="popup-content">
            <img 
              src="/assets/images/wechat-qr.webp" 
              alt="微信二维码" 
              className="qr-code"
            />
            <div className="popup-text">
              <p>平行服交流群：添加微信发送进群</p>
              <p>护肝助手，扫抢摆摊集市添加微信发送护肝</p>
              <p>有需要的功能或者意见也可以留言</p>
              <p>图片加载较慢，直接添加wanted_2016u</p>
            </div>
            <button 
              className="confirm-button"
              onClick={() => setIsPopupVisible(false)}
            >
              确定
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default WeChatButton 