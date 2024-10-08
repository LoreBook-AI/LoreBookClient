import React, { useState } from 'react'
import { assets } from '../../assets/assets'


const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div className="min-h-screen flex flex-col justify-between bg-[#f0f4f9] p-6">
        <div className="top">
            <img
                onClick={() => setExtended(prev => !prev)}
                className="block ml-2 cursor-pointer"
                src={assets.menu_icon}
                alt="ícone de menu"
            />
        </div>
        <div className="bottom flex flex-col">
            <div className="flex items-center gap-2 p-2 rounded-full cursor-pointer hover:bg-[#e2e6eb]">
                <img src={assets.question_icon} alt="" className="w-5" />
                {extended && <p>Help</p>}
            </div>
            <div className="flex items-center gap-2 p-2 rounded-full cursor-pointer hover:bg-[#e2e6eb]">
                <img src={assets.history_icon} alt="" className="w-5" />
                {extended && <p>Activity</p>}
            </div>
            <div className="flex items-center gap-2 p-2 rounded-full cursor-pointer hover:bg-[#e2e6eb]">
                <img src={assets.setting_icon} alt="" className="w-5" />
                {extended && <p>Settings</p>}
            </div>
        </div>
    </div>
    );
};

export default Sidebar