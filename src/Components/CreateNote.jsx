import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    let [expand, setExpand] = useState(false);
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
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        });
        
    };

    return ( 
        <>
            <div className="main_note">
                <form>
                    {
                        expand
                        &&
                        <input onChange={handleChange} type="text" value={note.title} name="title" placeholder="Title" autoComplete="off" />
                    }
                    
                    <textarea onChange={handleChange} onClick={() => setExpand(true)} onDoubleClick={() => setExpand(false)} value={note.content} name="content" placeholder="Write a note..." cols="" rows="" />
                    
                    {
                        expand
                        &&
                        <Button onClick={handleAdd}>
                            <AddIcon className="plus_sign" />
                        </Button>
                    }
                </form>
            </div>
        </>
    );
}
 
export default CreateNote;