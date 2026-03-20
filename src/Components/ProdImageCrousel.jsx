export default function SingleImage() {
  const image = {
    img: "./prod.jpeg",
    title: "Mountain peaks",
    sub: "Swiss Alps, Switzerland",
  };

  return (
    <div className="w-full max-w-8xl mx-auto h-96">
      <div className="relative rounded-xl overflow-hidden bg-zinc-100">
        <img
          src={image.img}
          alt={image.title}
          className="w-full h-80 object-cover block"
        />
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white font-medium text-sm">{image.title}</p>
          <p className="text-white/75 text-xs mt-0.5">{image.sub}</p>
        </div>
      </div>
    </div>
  );
}