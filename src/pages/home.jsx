import { Modal, Button, Input } from 'antd';
import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Home() {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);


    const name = useSelector((state) => state.name)
    const token = useSelector((state) => state.token)
    console.log('home的name', name)
    const [editName, setEditName] = useState('')
    const [data, setData] = useState({
        // username: '',
        name: '',
        // role: '',
        // imgLink: '',
        // token: token,
    })
    const fetchName = useCallback(
        () => dispatch({
            type: 'FETCH_NAME',
            name: data.name
        }),
        [dispatch]
    );
    const showModal = () => {
        setIsModalVisible(true);
        setEditName(name)
        console.log('show editName', editName)
    };

    const handleOk = () => {
        fetch('https://l8-upgrade-apis.vercel.app/api/users/updateName', {
            method: 'put',
            body: JSON.stringify({ name: editName }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            if (res.success) {
                console.log(res)
                fetchName()
                setEditName(name)
                setData(data.name = editName)
                console.log('data.name', data.name)
                setIsModalVisible(false);
            }
        })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleChangeName = (e) => {
        setEditName(e.target.value)
    }
    // useEffect(() => {
    //     console.log('name', name)
    //     if (!name) {
    //         setIsModalVisible(true)
    //     } else {
    //         setIsModalVisible(false)
    //     }
    // }, [])
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                修改使用者名稱
            </Button>
            <Modal title="使用者資料補全" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="請輸入使用者名稱" value={editName} onChange={handleChangeName} />
            </Modal>
        </div>
    );
}

export default Home;