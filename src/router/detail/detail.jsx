import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './detail.module.css';

const Detail = () => {

    let {id} = useParams();

    return (
        <div>
            <h1>디테일 페이지</h1>
            <h1>디테일 페이지</h1>
            <h1>디테일 페이지</h1>
            <h1>디테일 페이지</h1>
            <h1>디테일 페이지</h1>
        </div>
    );
};

export default Detail;