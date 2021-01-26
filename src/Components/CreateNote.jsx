import React from 'react';

const CreateNote = () => {
    return ( 
        <>
            <div className="main_note">
                <form>
                    <input type="text" placeholder="Title" />
                    <textarea name="" placeholder="Write a note..." cols="30" rows="10"></textarea>
                </form>
            </div>
        </>
    );
}
 
export default CreateNote;