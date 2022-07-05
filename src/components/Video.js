import React from "react";

export default function Video() {
  return (
    <div>
      <video loop autoPlay>
        <source
          src="https://www.dropbox.com/s/hnt9572ra9cch9k/s3-video%20copy.mp4?raw=1"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}