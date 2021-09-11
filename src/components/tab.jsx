import '@style';
import { useEffect, useState } from 'react/cjs/react.development';

// const [tab,setTab]=useState({name:'tab',index:0,isShow:false})

function Tab(props) {
    const { tabSet, leftShow, setLeftShow } = props
    const arr = Object.keys(tabSet) // 由tab標籤組成的數據
    const [selected, setSelected] = useState(arr[0]) // 當前選中的tab標籤
    const [needAdmin, setNeedAdmin] = useState(false)
    useEffect(() => {
        console.log("tab leftShow", leftShow)
    })
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