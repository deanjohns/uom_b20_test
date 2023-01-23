import AppFunctionInput from "./AppFunctionInput";
import React, { useState, useEffect, useCallback, useRef, createRef } from "react";
import { useScreenshot } from "use-react-screenshot";
import { jsPDF } from "jspdf";

const AppFunction = () => {

    const [name, setName] = useState("");

    const ref = createRef(null);
    const [image, takeScreenShot] = useScreenshot();

    const download = () => {
        // var pdf = new jsPDF({ orientation: "landscape" });
        // pdf.addImage(image, 'JPEG', 0, 0);
        // pdf.save("download.pdf");
        takeScreenShot(ref.current);

    }

    const changeName = (e) => {
        const value = e.target.value;
        setName(value)
    }

    useEffect(() => {
        setName("My default Function name");
    }, [])

    // useEffect(() => {
    //     takeScreenShot(ref.current);
    // }, [])

    useEffect(() => {
        console.log("image", image);
    }, [image])

    return (
        <div className='app_main' ref={ref}>
            <h1 className='app_header'>{name}</h1>
            <AppFunctionInput name={name} changeName={changeName} />
            <button onClick={download}>Download</button>
            <br />
            <img width="1300" src={image} alt={"ScreenShot"} />
        </div>
    )
}

export default AppFunction;