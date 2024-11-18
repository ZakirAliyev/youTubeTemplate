import './index.scss';
import {MdHome, MdOutlineHistory} from 'react-icons/md';
import {SiYoutubeshorts} from 'react-icons/si';
import {CgPlayList} from 'react-icons/cg';
import {GoClock, GoVideo} from 'react-icons/go';
import {BiLike} from 'react-icons/bi';
import {HiMiniSignal} from 'react-icons/hi2';

const menuItems = [
    {icon: <MdHome/>, text: 'Ev', isSelected: true},
    {icon: <SiYoutubeshorts/>, text: 'Shorts'},
    {icon: <MdHome/>, text: 'Abunəliklər'},
    {divider: true},
    {title: 'Siz'},
    {icon: <MdOutlineHistory/>, text: 'Tarixçə'},
    {icon: <CgPlayList/>, text: 'Pleylistlər'},
    {icon: <GoVideo/>, text: 'Videolarınız'},
    {icon: <GoClock/>, text: 'Sonra izləyin'},
    {icon: <BiLike/>, text: 'Bəyənilən videolar'},
    {divider: true},
    {title: 'Abunəliklər'},
    {img: "https://avatars.githubusercontent.com/u/1", text: 'Abunəliklər', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/2", text: 'A Spor', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/3", text: 'beIN Sports', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/4", text: 'CBC Sport LIVE', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/5", text: 'Hercai', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/6", text: 'Kebap', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/7", text: 'Marc Martinez', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/8", text: 'Mr_Antibiotik', extraIcon: <HiMiniSignal/>},
    {divider: true},
    {icon: <MdHome/>, text: 'Ev', isSelected: false},
    {icon: <SiYoutubeshorts/>, text: 'Shorts'},
    {icon: <MdHome/>, text: 'Abunəliklər'},
    {divider: true},
    {title: 'Siz'},
    {icon: <MdOutlineHistory/>, text: 'Tarixçə'},
    {icon: <CgPlayList/>, text: 'Pleylistlər'},
    {icon: <GoVideo/>, text: 'Videolarınız'},
    {icon: <GoClock/>, text: 'Sonra izləyin'},
    {icon: <BiLike/>, text: 'Bəyənilən videolar'},
    {divider: true},
];

function LeftMenu() {
    return (
        <section id="leftMenu">
            {menuItems.map((item, index) => {
                if (item.divider) {
                    return <div key={index} className="line"></div>;
                }

                if (item.title) {
                    return (
                        <div key={index} className="section-title">
                            <h2>{item.title}</h2>
                        </div>
                    );
                }

                return (
                    <div
                        key={index}
                        className={`wrapper ${item.isSelected ? 'selected' : ''}`}
                    >
                        <div className="textWrapper">
                            {item.icon && <div className="icon">{item.icon}</div>}
                            {item.img && (
                                <div className="img">
                                    <img src={item.img} alt={item.text}/>
                                </div>
                            )}
                            <p>{item.text}</p>
                        </div>
                        {item.extraIcon && <div className="icon1">{item.extraIcon}</div>}
                    </div>
                );
            })}
        </section>
    );
}

export default LeftMenu;
