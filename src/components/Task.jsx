import React, { useState, useEffect } from 'react'
import List from './List';
import Alert from './Alert';




const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
        return (list = JSON.parse(localStorage.getItem("list")))
    } else {
        return []
    }
}

const Task = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditId] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list))
    }, [list]);

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!name) {
            showAlert(true, "danger", "Please Enter Value");
        } else if (name && isEditing) {
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return { ...item, title: name }
                    }
                    return item
                })
            );
            setName("");
            setEditId(null);
            setIsEditing(false);
            showAlert(true, "success", "value changes");
        } else {
            showAlert(true, "success", "Item Added to list");

            const newItem = { id: new Date().getTime().toString(), title: name }
            setList([...list, newItem]);
            setName("")
        }
    }
    const showAlert = (show = false, type = "", msg = "") => {
        setAlert({ show, type, msg });
    }
    const removeItem = (id) => {
        showAlert(true, "danger", "Item removed");
        setList(list.filter((item) => item.id !== id))
    }
    const editItem = (id) => {
        const editItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditId(id);
        setName(editItem.title);
    }
    const clearlist = () => {
        showAlert(true, "danger", "Empty List");
        setList([]);
    }


    return (
        <section className='section-center' >
            {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
            <form onSubmit={handlesubmit}>
                <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>To do List</h3>
                <div className="mb-3 form">
                    <input type="text"
                        className='form-control'
                        placeholder='e.g bread'
                        onChange={(e) => { setName(e.target.value) }}
                        value={name}
                        autoFocus
                    />
                    <button type='submit' className='btn btn-success'>{isEditing ? "Edit" : "Add"}</button>
                </div>
            </form>
            {list.length > 0 && (
                <div style={{ marginTop: "2rem" }}>
                    <List items={list} removeItem={removeItem} editItem={editItem} />
                    <div className="text-center">
                        <button className='btn btn-warning' onClick={clearlist}>Clear Items</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Task;
