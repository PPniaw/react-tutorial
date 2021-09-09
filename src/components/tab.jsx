import '@style';
import { useState } from 'react/cjs/react.development';

// const [tab,setTab]=useState({name:'tab',index:0,isShow:false})

function Tab(props) {
    const { tabSet } = props 
    const arr = Object.keys(tabSet) // 由tab标签名组成的数组
    const [selected, setSelected] = useState(arr[0]) // 当前选中的tab标签
    const[needAdmin,setNeedAdmin] = useState(false)
    
    function select(item) {
      setSelected(item)
    }
    return (
          <div className="tabBox">
              <div className='list'>
                  {arr.map(item => (
                      <div
                          key={item}
                          className={item === selected ? 'active' : ''}
                          onClick={() => select(item)}
                      >
                          {item}
                      </div>
                  ))}
              </div>
              {tabSet[selected]}
          </div>
    )
  }
export default Tab;