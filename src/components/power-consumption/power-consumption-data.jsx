import s from "./power-consumption-data.module.css";
import { BoltIcon} from "@heroicons/react/24/solid";
import { LightBulbIcon, Bars3Icon } from "@heroicons/react/24/outline";

function PowerConsumptionData () {
    return (
        <div className={s.power_consump_container}>
            <div>
                <h2 className={s.pow_cons_heading}>Power Consumption</h2>
                <h3 className={s.pow_cons_tagline}>Summary of the energy consumption</h3>
            </div>
            

            <div className={s.power_usage_container}>
                <div className={s.todays_usage_container}>
                    <div className={s.power_icon_container}>
                        <BoltIcon width={13} height={13}/>
                    </div>
                    <h4>16 kwh</h4>
                    <p>Today</p>
                </div>
                
                <div className={s.this_month_usage_container}>
                    <div className={s.power_icon_container}>
                        <BoltIcon width={13} height={13}/>
                    </div>
                    <h4>439 kwh</h4>
                    <p>This month</p>
                </div>
            </div>

            <div className={s.main_light_container}>
                <div className={s.main_light_icon_container}>
                    <LightBulbIcon width={22} height={22}/>
                </div>
                <div className={s.main_light_info}>
                    <h3 className={s.main_light_text}>Main Light</h3>
                    <p>2 kwh</p>
                </div>
            </div>

            <div className={s.air_con_container}>
                <div className={s.air_con_icon_container}>
                    <Bars3Icon width={22} height={22}/>
                </div>
                    <div className={s.air_con_info}>
                        <h3 className={s.air_con_text}>Air Conditioner</h3>
                        <p>8 kwh</p>
                    </div>
                </div>
        </div>
    )
}

export default PowerConsumptionData;