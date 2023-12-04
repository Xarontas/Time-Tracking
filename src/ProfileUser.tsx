
import { useState } from "react";
export default function Profile({ setDaily, setWeekly, setMonthly }: { setDaily: any, setWeekly: any, setMonthly: any }) {

    const [isActive, setIsActive] = useState("Daily")

    function Daily() {

        setDaily(true);
        setWeekly(false);
        setMonthly(false);
        setIsActive("Daily");

    }
    function Weekly() {
        setDaily(false);
        setWeekly(true);
        setMonthly(false);
        setIsActive("Weekly");
    }
    function Monthly() {
        setDaily(false);
        setWeekly(false);
        setMonthly(true);
        setIsActive("Monthly");
    }

    return (
        <>
            <div className="profile-wrapper">
                <div className="profile1">
                    <div className="profile-img"></div>
                    <div className="profile-txt">
                        <div className="report">Report for</div>
                        <div className="name">Nikos Sarantinos</div>
                    </div>
                </div>
                <div className="profile2">
                    <ul>
                        <li onClick={() => Daily()} className={isActive === "Daily" ? "active" : ""}>Daily</li>
                        <li onClick={() => Weekly()} className={isActive === "Weekly" ? "active" : ""}>Weekly</li>
                        <li onClick={() => Monthly()} className={isActive === "Monthly" ? "active" : ""}>Monthly</li>
                    </ul>
                </div>
            </div>
        </>
    )
}