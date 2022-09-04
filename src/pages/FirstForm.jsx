import React, {useState} from 'react';
import Overlay from "../general-components/Overlay";

const FirstForm = () => {

    const [dataInputs,setDataInputs] = useState({
        name:'',
        surname:'',
        about:'',
    })

    const handleChangeInput = (key,value) =>{
        let data = Object.assign({},dataInputs);
        data[key] = value;
        setDataInputs(data);
        console.log(data);
    }

    return (
        <div className={`FirstForm vh-vw center-ac`}>

            <form>
                <div className="input-top-label">
                    <label>
                        Your name
                        <Overlay position={'right'} text={'Hello'} />
                    </label>

                    <input
                        autoComplete="off"
                        value={dataInputs.name}
                        onChange={event => handleChangeInput('name',event.target.value)}
                    />
                </div>

                <div className="input-top-label">
                    <label>
                        Your name
                        <Overlay position={'right'} text={'Hello'} />
                    </label>

                    <input
                        autoComplete="off"
                        value={dataInputs[1]}
                        onChange={event => handleChangeInput('surname',event.target.value)}
                    />
                </div>

                <div className="input-top-label">
                    <label>
                        Your name
                        <Overlay position={'right'} text={'Hello'} />
                    </label>
                    <textarea
                        autoComplete="off"
                        rows={5}
                        value={dataInputs[2]}
                        onChange={event => handleChangeInput('about',event.target.value)}
                    />
                </div>

                <button
                    type={"submit"}
                    style={{marginTop:10}}
                    className={`ButtonNext`}
                >
                    <span>Next page</span>
                </button>
            </form>

        </div>
    );
};

export default FirstForm;