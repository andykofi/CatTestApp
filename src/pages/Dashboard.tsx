import React, {useEffect, useState} from 'react';
import Wrapper from "../components/Wrapper";
import './../App.css';
import {Link} from "react-router-dom";
import {Cat} from "../model/Cat";
import { Button } from 'reactstrap'

const apiKey = '97459ca4-ffef-46ba-b4c7-f8d88a62126e';
const listUrl = 'https://api.thecatapi.com/v1/images/search?limit=20&page=10&order=Desc';

const Dashboard = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        console.log('Hello World')
        getCat();
    }, [])

    const getCat = () => {
        fetch(listUrl, {
            headers: {
                'x-api-key': apiKey
            }
        })
            .then((res) => res.json())
            .then((cats) => {
                console.log(cats);
                setCats(cats);

            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <Link to="/upload" className="btn btn-sm btn-outline-secondary">Upload Cat</Link>
            </div>

            <div className="row">
                       {cats.map((cat: Cat) => {
                           return(
                               <div className="column" key={cat.id}>
                                   <img  src={cat.url}  alt="Cat image" />
                                   <div>
                                       <Link to="/vote">
                                           <Button color="primary">Vote Now</Button>
                                       </Link>
                                   </div>
                               </div>
                           )
                       })}
               </div>

        </Wrapper>
    );
}

export default Dashboard;
