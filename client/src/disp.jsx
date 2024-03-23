import React, { useState, useEffect } from "react";

function Display() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/contacts/');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [data]);

    async function deletes(i){
        const response = await fetch(`http://localhost:3000/contacts/${i}`, {
            method: "DELETE"
        });
    }

    return (
        <>
            <ul>
                {data.map(i => (
                    <li key={i.id}>
                        Name: {i.name}<br/>
                        Email: {i.email} <br/>
                        <button onClick={()=>deletes(i._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Display;
