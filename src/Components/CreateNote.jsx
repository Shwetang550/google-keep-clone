
//   Develped by - Shwetang
//   GitHub profile - https://github.com/Shwetang550 

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
            <div className="main_note" onDoubleClick={() => setExpand(false)}>
                <form>
                    {
                        expand
                        &&
                        <input onChange={handleChange} className="font-style" type="text" value={note.title} name="title" placeholder="Title" autoComplete="off" />
                    }
                    
                    <textarea onChange={handleChange} onClick={() => setExpand(true)} className="font-style" value={note.content} name="content" placeholder="Write a note..." cols="" rows="" />
                    
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