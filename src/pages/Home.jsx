import { useState } from "react";
import { useEffect } from "react";
import Question from "../components/Question";

const Home = () => {

    const [questions, setQuestions] = useState(null);
    const [select, setSelect] = useState('new-first');

    const fetchData = async () => {
        const response = await fetch('https://synthusiast.herokuapp.com/questions')
        const json = await response.json();
        setQuestions(json);
    }

    const onChange = e => {
        setSelect(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        if (select === 'new-first') {
            const sorted = questions.sort((a, b) => {
                return new Date(b.post_date).getTime() - new Date(a.post_date).getTime()
            })
            setQuestions([...sorted])
        } else {
            const sorted = questions.sort((a, b) => {
                return new Date(a.post_date).getTime() - new Date(b.post_date).getTime()
            })
            setQuestions([...sorted])
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className="home-container">
            <h1 className="home-heading">See what the community is talking about</h1>
            <div>
                <form style={{ marginTop: 50, marginLeft: 50, marginBottom: 50 }} onSubmit={onSubmit}>
                    <label>Sort by date added: </label>
                    <select className="select" onChange={onChange} value={select}>
                        <option value="new-first">Newest first</option>
                        <option value="old-first">Oldest first</option>
                    </select>
                    <button className="btn" style={{ marginLeft: 20 }}>Sort</button>
                </form>
            </div>
            <div className="container">
                {
                    questions ? (
                        questions.map((question, i) => <Question key={i} data={question}></Question>)
                    ) : (
                        <div className="spinner"></div>
                    )
                }
            </div>
        </div>
    );
}

export default Home;