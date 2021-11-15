
const EmbedVideo = (props) =>{
    return (
      <>
        <div>
          <div>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/2hol2sS3ONs'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; 
                             clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullScreen
            ></iframe>
          </div>
          <div> Title </div>
          <div> Description </div>
        </div>
      </>
    );
}

export default EmbedVideo;