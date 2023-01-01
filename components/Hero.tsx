/* Typescript component to display a modern hero image with a title and subtitle */

export default function Hero() {
    return (
        <div className="relative bg-[#f9fbfb]">
        <div className="absolute inset-0">
            <img
            className="w-full h-full object-cover"
            src="gerlach_family.jpg"
            alt=""
            />
            <div
            className="absolute inset-0 bg-[#f9fbfb]"
            style={{ mixBlendMode: "multiply" }}
            />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Lorem ipsum dolor sit amet.</span>
            <span className="block text-[#f9fbfb]">
                Consectetur adipiscing elit.
            </span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper, dui sed tincidunt ultricies, orci sem lacinia tortor, in
            aliquam nunc sem id massa. Aliquam erat volutpat. Nulla facilisi.
            </p>
        </div>
        </div>
    );
    }
