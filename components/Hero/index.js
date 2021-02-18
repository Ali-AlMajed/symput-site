import Link from 'next/link';
import Image from 'next/image';

const Hero = ({ title, subtitle, buttonText }) => (
  <section className="min-h-1.1v relative pt-16 pb-32 flex content-center items-center justify-center">
    <div className="absolute h-full w-full top-0">
      <Image
        alt="Hero image"
        src="/heroImage.jpg"
        layout="fill"
        objectFit="cover"
        priority
      />
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-75 bg-black"
      ></span>
    </div>
    <div className="container relative items-center flex flex-wrap px-4">
      <div className="mx-auto text-center">
        <h1 className="text-white font-semibold text-5xl">{title}</h1>
        <h2 className="mt-10 text-xl text-white">{subtitle}</h2>
        <Link href="/aims">
          <button className="btn btn-yellow-inverted mt-10">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  </section>
);
export default Hero;