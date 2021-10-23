import React, { Component }  from 'react';
import react from "react";
import Button from './Button'
import './Item.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = ({title, desc, backgroundImg, leftBtnTxt, leftBtnLink,rightBtnTxt, rightBtnLink, twoButtons, first }) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`

        }}>
            <div div classname="item__container">
                <div className="itemn__text">
                    <p>title</p>
                    <div className="item__textDesc">
                        <p>desc</p>
                    
                    </div>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">
                        <button imp='primary' text={leftBtnLink} Link={leftBtnLink} />
                        {twoButtons && (
                            <button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                            
                        )}

                    </div>
                    {first && (
                        <div className="item__expand">
                            <ExpandMoreIcon/> 
                        </div>    
                    )}
                </div>
            </div>
        </div>
    )
}


export default Item