import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / width;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className=",t-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            This year, 2024
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            I've gained many skills and knowledge, and I've come to understand
            myself better. I tried new things, met many new faces, and joined
            various school organizations. I truly enjoyed this year, filled with
            countless moments of laughter and tears.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/wcbf.mp4"
            title={<>we can't be friends</>}
            description="It’s better to have loved and lost than never to have loved at all."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/eeaao.mp4"
              title={
                <>
                  Everything Everywhere <b>a</b>ll at Once
                </>
              }
              description="When I choose to see the good side of things, I'm not being naive. It is strategic and necessary. It's how I've learned to survive through everything."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>Birds of the Feather</>}
              description="Unwavering love, even in the face of death. "
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/cmbyn.mp4"
              title={<>Call me by your name</>}
              description="Is it better to pour your heart out and confess true feelings at the risk of rejection, or would “dying” be easier and much less painful?"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-[#AFD198] p-5">
              <h1 className="bento-title special-font max-w-64">
                TESTING 2024...
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                deserunt aspernatur eaque est quam quas labore non rem
                doloribus. Hic eum repudiandae necessitatibus minus labore
                voluptatibus architecto minima repellendus ad?
              </p>
              {/* <TiLocationArrow className="m-5 scale-[5] self-end" /> */}
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
