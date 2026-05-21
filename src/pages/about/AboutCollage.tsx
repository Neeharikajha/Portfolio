import photo1 from "../../images/about/photo1.jpg";
import photo2 from "../../images/about/photo2.jpg";
import photo3 from "../../images/about/photo3.jpg";
import photo4 from "../../images/about/photo4.jpg";

const photos = [
  {
    img: photo1,
    className: "top-[220px] left-[220px] rotate-[-7deg] z-[2]",
  },
  {
    img: photo2,
    className: "top-[210px] left-[350px] rotate-[4deg] z-[4]",
  },
  {
    img: photo3,
    className: "top-[190px] left-[500px] rotate-[1deg] z-[5]",
  },
  {
    img: photo4,
    className: "top-[230px] left-[650px] rotate-[-4deg] z-[3]",
  },
];

export default function AboutCollage() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#ebe3d1]">
      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply">
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* top title */}
      <div className="absolute left-1/2 top-[70px] -translate-x-1/2">
        <h1 className="maniac text-[30px] uppercase tracking-[0.35em] text-[#23348b]">
          It&apos;s a pleasure to meet you!
        </h1>
      </div>

      {/* subtitle */}
      <div className="absolute left-1/2 top-[150px] -translate-x-[10%]">
        <div className="flex items-center gap-4">
          <p className="maniac text-[25px] uppercase tracking-[0.28em] text-[#23348b]">
            Daria, 1993, Latvia
          </p>

          <div className="h-[5px] w-[85px] rounded-full bg-[#23348b]" />
        </div>

        {/* arrow */}
        <svg
          className="absolute left-[120px] top-[30px]"
          width="42"
          height="60"
          viewBox="0 0 42 60"
          fill="none"
        >
          <path
            d="M10 8C10 8 22 24 22 48"
            stroke="#23348b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <path
            d="M15 41L22 49L29 41"
            stroke="#23348b"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* photos */}
      <div className="relative mx-auto h-full w-[1200px]">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`absolute h-[190px] w-[145px] bg-white/70 p-[9px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] backdrop-blur-[2px] transition-all duration-500 hover:scale-[1.03] ${photo.className} floating`}
          >
            <img
              src={photo.img}
              alt=""
              className="h-full w-full object-cover grayscale"
            />

            {/* paper clips */}
            {i === 0 && (
              <div className="absolute left-[-18px] top-[18px] h-[12px] w-[38px] rotate-[-16deg] rounded-full border-[4px] border-[#c52d2d]" />
            )}

            {i === 3 && (
              <div className="absolute left-[-14px] top-[16px] h-[12px] w-[38px] rotate-[18deg] rounded-full border-[4px] border-[#efbc2d]" />
            )}
          </div>
        ))}
      </div>

      {/* bottom text */}
      <div className="absolute bottom-[120px] left-[170px]">
        <p className="maniac mb-3 text-[22px] uppercase tracking-[0.25em] text-[#23348b]">
          Location:
        </p>

        <div className="flex items-center gap-4">
          <p className="maniac text-[22px] uppercase tracking-[0.22em] text-[#23348b]">
            United Kingdom, Latvia
          </p>

          <div className="h-[5px] w-[100px] rotate-[-2deg] rounded-full bg-[#23348b]" />
        </div>
      </div>

      {/* scribble right */}
      <div className="absolute right-[240px] top-[360px] rotate-[-15deg]">
        <div className="relative h-[45px] w-[45px] rounded-full border-2 border-[#23348b]">
          <div className="absolute inset-0 translate-x-[6px] translate-y-[-4px] rounded-full border-2 border-[#23348b]" />

          <div className="absolute inset-0 translate-x-[-5px] translate-y-[5px] rounded-full border-2 border-[#23348b]" />
        </div>
      </div>

      {/* molecule scribble */}
      <svg
        className="absolute bottom-[110px] right-[180px]"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
      >
        <path
          d="M10 50C10 50 18 28 35 28C52 28 52 55 70 55C83 55 80 30 80 30"
          stroke="#23348b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <circle cx="10" cy="50" r="5" stroke="#23348b" strokeWidth="2.5" />

        <circle cx="35" cy="28" r="5" stroke="#23348b" strokeWidth="2.5" />

        <circle cx="70" cy="55" r="5" stroke="#23348b" strokeWidth="2.5" />

        <circle cx="80" cy="30" r="5" stroke="#23348b" strokeWidth="2.5" />
      </svg>

      {/* left tiny scribble */}
      <svg
        className="absolute bottom-[180px] left-[220px] rotate-[-14deg]"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M10 22C12 10 25 10 27 20C29 30 12 30 10 22Z"
          stroke="#23348b"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        <path
          d="M8 12L20 24"
          stroke="#23348b"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
