import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import Wrapper from "../components/Wrapper";

const apiKey  = '97459ca4-ffef-46ba-b4c7-f8d88a62126e';
const url = 'https://api.thecatapi.com/v1/images/search';


const Users = () => {

    const [catUrl, setCatUrl] = useState('');

    useEffect(() => {
        console.log('Hello World')
        getCat();
    }, []);

    const getCat = () => {
        fetch(url, {
            headers: {
                'x-api-key': apiKey
            }
        })
            .then((res) => res.json())
            .then((cats) => {
                const catUrl = cats[0].url;
                setCatUrl(catUrl);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }


    return (
        <Wrapper>

            <div className="cat">
                <img src={catUrl} alt="The cats"/>
                <button onClick={getCat}>Get Random</button>
            </div>

        </Wrapper>
    );

}

export default Users;
