import { Inter } from 'next/font/google'
import H2 from "../components/atoms/headings";
import DOB from "../components/age/dob";
import Result from "../components/age/result";
import getAge from "./fetch/calculator";
import {useState} from "react";
import Overlay from "../components/atoms/overlay";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [result, setResult] = useState({})
    const [error, setError] = useState('')
    const [showOverlay, setShowOverlay] = useState(false)

    const callGetAge = input => {
        setResult({});
        setShowOverlay(true)
        getAge(input).then( res => {
            setShowOverlay(false)
            if(res.error.description === null || res.error.description === 'null') {
                setResult(res.data);
                setError('')
            } else {
                setError('Invalid Date')
                console.log(error)
            }

        }).catch( res => {
            setShowOverlay(false)
            setError('Invalid Date')
        })
    }
    return (
        <React.Fragment>
            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    <div>
                        <H2 message={'Age Calculator'}/>
                        <DOB getAge={callGetAge} serverError={error} />
                        <Result className="m-t-2"  results={result} />
                    </div>
                </div>
            </main>
            <Overlay show={showOverlay}/>
        </React.Fragment>
    );
}
