import React from 'react';
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

const Overlay = ({position,text}) => {

    return (
        <OverlayTrigger
            placement={position}
            overlay={
                <Tooltip id={`tooltip-${position}`}>
                    {text}
                </Tooltip>
            }
        >

            <button className={'overlay-button'}>
                ?
            </button>

        </OverlayTrigger>
    );
};

export default Overlay;