import React from 'react';
import VideoListItem from './video_list_item.jsx'


const VideoList = (props) => {

   const videoItems = props.videos.map((video) => {
          // console.log(video);
          return (<VideoListItem
                    onVideoSelect={props.onVideoSelect}
                    video={video}
                    key={video.etag} />

            );
          });


    return (

      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>

    );
};



export default VideoList;

