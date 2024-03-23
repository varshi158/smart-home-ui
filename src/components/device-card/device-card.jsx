import { useState } from "react";
import s from "./device-card.module.css";
import { PowerIcon } from "@heroicons/react/24/solid";

function DeviceCard(props) {

    // const [isOn, setIsOn] = useState(false);
    // const showState = isOn === true ? "ON" : "OFF";


    const handleClick = () => {
        // isOn === true ? setIsOn(false) : setIsOn(true);
        // setIsOn(!isOn)
        props.handleDeviceUpdate(props.device._id);
    };

    // const [count, setCount] = useState(0);
    // const handleClick = () => {
    //     // setCount(count+1)

    //     setCount( (n) => {
    //         return n + 1;
    //     })
    //     setCount( (n) => {
    //         return n + 1;
    //     })
    // }

    return (
        <div className={s.device_card}>
            <img 
                className={s.device_card_img}
                src={props.device.image} 
                alt="" 
            />

            <div className={s.device_card_info}>
                <div className={s.device_card_info_container}>
                    <h3 className={s.device_card_text}>{props.device.name}</h3>
                    {/* <h3>{count}</h3>
                    <button type="button" onClick={handleClick}>Click Me</button> */}
                    <button
                        type="button"
                        onClick={handleClick}
                        className={props.device.state === true? s.device_card_icon_on : s.device_card_icon_off}
                    >
                        <PowerIcon width={36} height={36} />
                    </button>
                                        
                </div>
            </div>
        </div>
    );
}


export default DeviceCard;