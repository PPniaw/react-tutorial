import SideBar from '../components/SideBar';
import Header from '../components/Header';

const Admin = () => {
    return (
        <div className="member">
            <Header />
            <SideBar />
            <div>管理員才可訪問</div>
        </div>
    )
}

export default Admin;