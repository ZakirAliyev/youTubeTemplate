import './index.scss';
import {BsThreeDotsVertical} from "react-icons/bs";
import {SiYoutubeshorts} from "react-icons/si";

function Shorts() {
    const videos = [
        {
            "id": "1",
            "title": "Big Buck Bunny",
            "thumbnailUrl": "https://i.ytimg.com/vi/7RUAHANpHys/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCH6HHmeWqoDXZfrAy-Su0bGv5ztg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "Vlc Media Player",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            "subscriber": "25254545 Subscribers",
            "isLive": true
        },
        {
            "id": "1",
            "title": "Big Buck Bunny",
            "thumbnailUrl": "https://i.ytimg.com/vi/7RUAHANpHys/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCH6HHmeWqoDXZfrAy-Su0bGv5ztg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "Vlc Media Player",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            "subscriber": "25254545 Subscribers",
            "isLive": true
        },
        {
            "id": "1",
            "title": "Big Buck Bunny",
            "thumbnailUrl": "https://i.ytimg.com/vi/7RUAHANpHys/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCH6HHmeWqoDXZfrAy-Su0bGv5ztg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "Vlc Media Player",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            "subscriber": "25254545 Subscribers",
            "isLive": true
        },
        {
            "id": "1",
            "title": "Big Buck Bunny",
            "thumbnailUrl": "https://i.ytimg.com/vi/7RUAHANpHys/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCH6HHmeWqoDXZfrAy-Su0bGv5ztg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "Vlc Media Player",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            "subscriber": "25254545 Subscribers",
            "isLive": true
        },
    ]

    return (
        <section id="shorts">
            <div className="container">
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <SiYoutubeshorts style={{
                        color: 'red',
                        fontSize: '24px',
                        marginLeft: '8px'
                    }}/>
                    <p style={{
                        color: '#FFF',
                        padding: '16px 8px',
                        fontWeight: 'bold',
                        fontSize: '20px'
                    }}>Shorts</p>
                </div>
                <div className="row">
                    {videos.map((video) => (
                        <div className="col-xs-24 col-sm-12 col-md-12 col-lg-8 col-xl-6 col-xxl-4"
                             key={video.id}>
                            <div className="video-card">
                                <div className="img">
                                    <img src={video.thumbnailUrl} alt={video.title}/>
                                    <span className="duration">{video.duration}</span>
                                </div>
                                <div className="wrapper">
                                    <div className={"wrapper1"}>
                                        <div className="textWrapper">
                                            <h2>{video.title}</h2>
                                            <h3>
                                                {video.views} baxış
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="dots">
                                        <BsThreeDotsVertical className="icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Shorts;
