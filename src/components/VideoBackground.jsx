import ReactPlayer from "react-player";
export default function VideoBackground() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <ReactPlayer
          url="/images/door.jpeg"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-4xl font-bold">
            Tafaddal to our Page
          </div>
        </div>
      </div>
      );
    </div>
  );
}
