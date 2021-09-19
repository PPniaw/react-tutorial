import { useEffect, useState,useCallback } from "react";
import '@/style.css'
import { useSelector, useDispatch } from 'react-redux';

function PersonalEdit() {
    const username = useSelector((state) => state.username)
    const name = useSelector((state) => state.name)
    const imgLink = useSelector((state) => state.imgLink)
    const token = useSelector((state) => state.token)
    const [uploadImg, setUploadImg] = useState('')
    const [data, setData] = useState({
        // username: '',
        // name: '',
        // role: '',
        imgLink: '',
        // token: token,
      })
    const dispatch = useDispatch();
    // const [imgPath,setImgPath] = useState('')
    // console.log("imgLink", imgLink)
    // console.log('token',token)
    console.log('imgLink',imgLink)
    const fetchLink = useCallback(
        () => dispatch({
          type: 'FETCH_LINK',
          imgLink: data.imgLink
        }),
        [dispatch]
      );
    const handleChooseImg = (e) => {
        let photo = e.target.files[0]
        setUploadImg(photo)
        console.log('uploadImg', uploadImg)
        // setImgPath(URL.createObjectURL(e.target.files[0]))
    }
    const handleUploadImg = () => {
        const formData = new FormData()
        formData.append('type', uploadImg.type)
        formData.append('image', uploadImg)
        formData.append('name',uploadImg.name)
        console.log('formData', formData)
        fetch('https://l8-upgrade-apis.vercel.app/api/users/uploadPicture', {
            method: 'post',
            body: formData,
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            setData(data.imgLink = res.data)
            fetchLink()
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