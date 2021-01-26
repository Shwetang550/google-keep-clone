import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    let [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });
    };

    const handleAdd = () => {
        return props.passNote(note);
    };

    return ( 
        <>
            <div className="main_note">
                <form>
                    <input onChange={handleChange} type="text" value={note.title} name="title" placeholder="Title" autoComplete="off" />
                    <textarea onChange={handleChange} value={note.content} name="content" placeholder="Write a note..." cols="" rows=""></textarea>
                    <Button onClick={handleAdd}>
                        <AddIcon className="plus_sign" />
                    </Button>
                </form>
            </div>
        </>
    );
}
 
export default CreateNote;