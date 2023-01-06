import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="app_home">
            <button className="app_home_button" onClick={() => navigate("/appclass")}>App Class Component</button>
            <button className="app_home_button" onClick={() => navigate("/appfunction")}>App Functional Component</button>
        </div>
    )
}

export default Home;