import './index.scss';
import {MdHome, MdOutlineFeedback, MdOutlineHistory} from 'react-icons/md';
import {SiYoutubekids, SiYoutubemusic, SiYoutubeshorts, SiYoutubestudio} from 'react-icons/si';
import {CgPlayList} from 'react-icons/cg';
import {GoClock, GoVideo} from 'react-icons/go';
import {BiLike} from 'react-icons/bi';
import {HiMiniSignal} from 'react-icons/hi2';
import {
    IoChevronDown,
    IoFlagOutline,
    IoGameControllerOutline,
    IoMusicalNotesOutline, IoSettingsOutline,
    IoTrophyOutline
} from "react-icons/io5";
import {AiOutlineFire, AiOutlineQuestionCircle} from "react-icons/ai";
import {FaYoutube} from "react-icons/fa";

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
    {img: "https://avatars.githubusercontent.com/u/2", text: 'A Spor', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/3", text: 'beIN Sports', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/4", text: 'CBC Sport LIVE', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/5", text: 'Hercai', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/6", text: 'Kebap', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/7", text: 'Marc Martinez', extraIcon: <HiMiniSignal/>},
    {img: "https://avatars.githubusercontent.com/u/8", text: 'Mr_Antibiotik', extraIcon: <HiMiniSignal/>},
    {icon: <IoChevronDown/>, text: 'Daha çox göstər'},
    {divider: true},
    {title: 'Kəşf edin'},
    {icon: <AiOutlineFire/>, text: 'Trenddə olan'},
    {icon: <IoMusicalNotesOutline/>, text: 'Musiqi'},
    {icon: <IoGameControllerOutline/>, text: 'Oyunlar'},
    {icon: <IoChevronDown/>, text: 'İdman'},
    {icon: <IoTrophyOutline/>, text: 'Daha çox göstər'},
    {divider: true},
    {title: "YouTube'dan daha çox"},
    {icon: <FaYoutube color={"red"}/>, text: 'YouTube Premium'},
    {icon: <SiYoutubestudio color={"red"}/>, text: 'YouTube Studio'},
    {icon: <SiYoutubemusic color={"red"}/>, text: 'YouTube Music'},
    {icon: <SiYoutubekids color={"red"}/>, text: 'YouTube Kids'},
    {divider: true},
    {icon: <IoSettingsOutline/>, text: 'Ayarlar'},
    {icon: <IoFlagOutline/>, text: 'Xəbər tarixçəsi'},
    {icon: <AiOutlineQuestionCircle/>, text: 'Yardım'},
    {icon: <MdOutlineFeedback/>, text: 'Rəy göndərin'},
    {divider: true},
    {title1: "Haqqında Basın"},
    {title1: "Müəllif hüququ Bizimlə əlaqə"},
    {title1: "Yaradıcılar Reklam edinn"},
    {title1: "Developerlər"},
    {title1: ""},
    {title1: "Şərtlər Məxfilik"},
    {title1: "Siyasət və Təhlükəsizlik"},
    {title1: "YouTube necə işləyir"},
    {title1: "Yeni funksiyaları sınayın"},
    {title2: "© 2024 Google LLC"},
];

function LeftMenu() {
    return (
        <section id="leftMenu">
            {menuItems.map((item, index) => {
                if (item.divider) {
                    return <div key={index} className="line"></div>;
                }

                if (item.title1) {
                    return <div key={index} className="title1">
                        {item.title1}
                    </div>;
                }

                if (item.title2) {
                    return <div key={index} className="title2">
                        {item.title2}
                    </div>;
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
