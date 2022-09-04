import React from 'react';
import '../styles/Preview.css';
import ButtonNext from "../general-components/ButtonNext/ButtonNext";
import {anFadeDown1s, anFadeUp1s, anFadeUp2s, anFadeUp3s} from "../constants/animations";

const Preview = () => {
    return (
        <div className={`Preview`}>

            <h1 className={anFadeDown1s}>
                Hello, this is my project that can help you if you want to write your resume
            </h1>

            <h4 className={anFadeUp1s}>
                In order to compose a resume, you need to fill out all the forms in turn.
                Then you will be shown your finished resume, which you can download.
                <br />
                this version of the application is unfinished, in the future
                I will try to make this application more convenient
            </h4>

            <ButtonNext
                animate={anFadeUp2s}
                text={'Get started'}
                url={'/first'}
                absolute={true}
            />

            <a
                className={`ButtonNext posAbsGit ${anFadeUp3s}`}
                href="https://github.com/kdubasov"
                target={`blank`}
            >
                <span>My GitHub</span>
            </a>

        </div>
    );
};

export default Preview;