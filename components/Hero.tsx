/* Typescript component to display a modern hero image with a title and subtitle */

export default function Hero() {
  return (
    <div id="hero" className="relative bg-[#f9fbfb]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/648/480?"
          alt=""
        />
        <div
          className="absolute inset-0 bg-[#f9fbfb]"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          <span className="block">From Our Family to Yours:</span>
          <span className="block text-[#f9fbfb]">Quality Dental Care</span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-white">
          Our Family is Committed to Helping Your Family Achieve Optimal Oral
          Health
        </p>
      </div>
    </div>
  );
}
