import React, {useState} from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";


const apiKey = '97459ca4-ffef-46ba-b4c7-f8d88a62126e';

const ImageUpload = () => {

    const [image, setImage] = useState('');
    const [redirect,   setRedirect] = useState(false);

    const upload = async (files: FileList | null) => {
        if(files === null) return;

        const formData = new FormData();
        formData.append('image', files[0]);

        await (async () => {
            const imageResponse = await fetch('https://api.thecatapi.com/v1/images/upload', {
                method: 'POST',
                headers: {
                    'x-api-key': apiKey
                }

            });
            const content = await imageResponse;

            console.log(content);
        })();


        setRedirect(true);
    }

    if(redirect) {
        return <Redirect to="/" />
    }

    return (
        <label className="btn btn-primary">
            Upload <input type="file" hidden onChange={e => upload(e.target.files)}/>
        </label>
    );
};

export default ImageUpload;
