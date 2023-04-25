import {useEffect, useState} from "react";
import {Card} from "../atoms/card";
import getAge from "../../pages/fetch/calculator";

export default function DOB({ getAge, serverError }) {
    const [dob, setDob] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = event => {
        setDob(event.target.value);
    }

    const validateInput = (input) => {

        return /(\d+){4}\/(\d+){2}\/(\d+){2}/.test(input);
    }

    const callAPI = async () => {
        let finalString = dob.split('/').reverse().join('/')
        if(validateInput(finalString)) {
            getAge(finalString);
            setErrorMessage('')
        } else {
            setErrorMessage('Invalid Date');
        }
    };

    return (
        <Card className={'p-8'}>
            <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                Enter Date Of Birth <span className="font-sm-size">(Example: 05/07/1983)</span>
                            </label>
            <div className="relative rounded-md shadow-sm">
                <input
                    onChange={ handleChange }
                    type="text"
                    name="dob"
                    id="dob"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="DD/MM/YYYY"
                />
            </div>

            {( errorMessage ) ? <span className="error">{ errorMessage }</span> : null}
            {( serverError ) ? <span className="error">{ serverError }</span> : null}

            <div className="m-t-2">
                <button
                    onClick={ callAPI }
                    type="button"
                    className="primary-button">
                    Calculate
                </button>
            </div>
        </Card>
    )
}
