import React from 'react';

const Skills = props => {
    return( <div>
            <h1>{props.skillsname}</h1>

            <form action={props.actions} method="post" enctype="multipart/form-data">
                <input type="file" name="avatar" multiple/>
                <button>Submit</button>
            </form>
            </div>
    );
};

export default Skills;