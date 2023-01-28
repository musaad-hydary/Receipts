import React from 'react';
import { useEffect } from 'react';
import Tesseract from 'tesseract.js';
import { useState } from 'react';
import './Upload.css';
import { CircularProgress } from '@mui/material';

function Upload() {
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState(0);
    const myPath = './images/test2.jpg';

    useEffect(() => {
        Tesseract.recognize(
            myPath,
            'eng',
            { logger: m => {
                console.log(m)
                // setLoad(m.progress*100);
            } }
          ).then(({ data: { text } }) => {
            console.log(text);
            const extractedText = text;
            const splited = extractedText.split('\n');
            
            for(var i = 0; i < splited.length; i++){
                if(splited[i].toLowerCase().includes('total') && splited[i].toLowerCase().includes('.')){
                    const splitLine = splited[i].split(' ');

                    console.log(splitLine[splitLine.length-1]);

                    setPrice(splitLine[splitLine.length-1]);
                }

                if(splited[i].split('/').length - 1 == 2){
                    setDate(splited[i]);
                }
            }

            console.log(splited[0]);
            setTitle(splited[0]);
            console.log('Title: ' + splited[0]);


            document.getElementById('susJS').style.visibility = 'hidden';
          })
    });

    return (
    <div className='upload'>
        <input type='file'/>
        <div className='container'>
            <div className='left'>
                <img src = {myPath}></img>
                <canvas id = 'mycanvas'></canvas>
            </div>

            <div className='right'>
                {/* <Statusbar.Progress value={40} max={100} /> */}
                {/* <ProgressBar now={load} label={`${load}%`} /> */}
                <div id = 'susJS'><CircularProgress /></div>
                <div id = 'inputToMe'>
                    {title}
                    {price}
                    {date}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Upload