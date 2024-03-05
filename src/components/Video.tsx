export default function Video() {
  return (
    <video width="320" height="240" autoPlay={true} loop={true} preload="none">
      <source src="../../public/video.mp4" type="video/mp4" />
      <p>hola</p>
    </video>
  );
}
