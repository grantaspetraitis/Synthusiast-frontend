import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Card from "../components/Card";
import { AppContext } from "../Context";

const Profile = () => {

    const [data, setData] = useState(null)

    const { login } = useContext(AppContext);

    const fetchData = async () => {
        const response = await fetch('https://synthusiast.herokuapp.com/profile', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${login.token}`
            }
        })
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            {login ? (
                <>
                    <h2 style={{ marginTop: 200, marginLeft: 50 }}>Hi, {login.username}!</h2>
                    <div className="profile-question-container">
                        <h3 style={{ padding: "30px" }}>Your threads:</h3>
                        {
                            data ? data.map((data, i) => <Card key={i} data={data}></Card>) : <div className="spinner"></div>
                        }
                    </div>
                </>
            ) : toast.error('You must be logged in to view this page')

            }
        </>
    );
}

export default Profile;