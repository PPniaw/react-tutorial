import { createPortal } from 'react-dom'

function Modal(){
    return createPortal((
        <div className='modal'>
          彈窗
        </div>
      ), document.body)
}

export default Modal