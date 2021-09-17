import { useEffect, useState } from "react";
import '@/style.css'
import { useSelector, useDispatch } from 'react-redux';

function PersonalEdit() {
    const username = useSelector((state) => state.username)
    const name = useSelector((state) => state.name)
    const imgLink = useSelector((state) => state.imgLink)
    const token = useSelector((state) => state.token)
    const [uploadImg, setUploadImg] = useState('')
    // const [imgPath,setImgPath] = useState('')
    // console.log("imgLink", imgLink)
    // console.log('token',token)
    // useEffect(() => {
    //     console.log('uploadImg',uploadImg)
    // })
    const handleChooseImg = (e) => {
        let photo = e.target.files[0]
        setUploadImg(photo)
        console.log('uploadImg', uploadImg)
        // setImgPath(URL.createObjectURL(e.target.files[0]))
    }
    const handleUploadImg = () => {
        const formData = new FormData()
        formData.append('image', uploadImg)
        console.log('formData', formData)
        // console.log('imgPath',imgPath)
        fetch('https://l8-upgrade-apis.vercel.app/api/users/uploadPicture', {
            method: 'post',
            body: formData,
            headers: new Headers({
                'Content-type': false,
                'Authorization': 'Bearer ' + token
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log('Error:', error)
        })
    }

    return (
        <div className="right_item">
            <h1>帳戶設定</h1>
            <div className="imgBox">
                <img src={imgLink}></img>
            </div>
            <div>
                <span>{name}</span><span>({username})</span>
            </div>
            <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" multiple onChange={handleChooseImg} />
            <button className="upLoadBtn" onClick={handleUploadImg}>上傳圖片</button>
        </div>
    )
}

export default PersonalEdit;