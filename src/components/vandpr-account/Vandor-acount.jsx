import React, { useState } from "react";
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
export default function Vandoracount() {
    const [value, setValue] = useState('');
return(
    <>
<div className="Vandoracount">
        <div className=" Vandora card flex justify-content-center">
            <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter Name" />
        </div>

        <div className="Vandora2 flex-auto">
                    <label  htmlFor="email" className="font-bold block mb-2 " >
                           
                    </label>
                    <InputText id="email" keyfilter="email" className="w-full" placeholder=" Email" />
                </div>
    


        <div className="  Vandora  card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask placeholder="Enter password"/>
        </div>

        <div className="Vandora4  card flex justify-content-center">
            <Button label="Submit" />
        </div>

        </div>
    
    </>
    )
}