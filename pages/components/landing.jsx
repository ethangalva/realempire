import Header from "./header"

export default function Landing() {
    return (
        <div className="h-screen flex flex-col justify-between px-8  py-4 gap-8 snap-center xl:flex-wrap xl:flex-row xl:content-between  xl:gap-0" id="home">
            <Header />
            {/* GRID OF IMAGES */}
            <div className="flex flex-wrap flex-row justify-center gap-2 order-2 xl:order-3 xl:w-1/2">
                <div className="h-24 w-2/4 rounded-full bg-[url('../public/images/building-1.jpg')] bg-center bg-no-repeat bg-cover transition ease-in-out delay-250 hover:rotate-2 origin-top-right  duration-500" />
                <div className="h-24 w-1/4 rounded-full bg-[url('../public/images/building-2.jpg')] bg-center bg-no-repeat bg-cover transition ease-in-out delay-250 hover:rotate-6 origin-bottom-right duration-500" />
                <div className="h-24 w-1/4 rounded-full bg-[url('../public/images/building-3.jpg')] bg-center bg-no-repeat bg-cover transition ease-in-out delay-250 hover:rotate-6 origin-top-left duration-500" />
                <div className="h-24 w-2/4 rounded-full bg-[url('../public/images/building-4.jpg')] bg-center bg-no-repeat bg-cover transition ease-in-out delay-250 hover:rotate-2 origin-top-left duration-500 " />
            </div>
            {/* H1 / SMALL MESSAGE OF BRAND */}
            <div className="flex flex-col gap-4 justify-center order-3 xl:order-2 xl:w-1/2">
                <p className="text-customGreen font-bold text-center">The Architecture</p>
                <h1 className="text-2xl font-semibold w-full text-center md:text-6xl lg:w-full">Build with Technology</h1>
                <p className="text-center lg:text-xl">We build with technology to produce the best buildings and designs so we can make everyone&lsquo;s dream building a reality</p>
            </div>
            {/* STATS */}
            <div className="bg-customGreen h-min py-10 rounded-3xl flex flex-wrap p-4 order-4 w-full">
                <div className="w-1/2 flex flex-col justify-center items-center lg:w-1/4">
                    <div className="text-white text-3xl font-semibold lg:text-5xl lg:font-bold ">14+</div>
                    <div className="text-slate-300 flex flex-nowrap lg:text-xl">Y/o experience</div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center  lg:w-1/4">
                    <div className="text-white text-3xl font-semibold lg:text-5xl lg:font-bold ">387</div>
                    <div className="text-slate-300 flex flex-nowrap lg:text-xl">Projects Done</div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center  lg:w-1/4">
                    <div className="text-white text-3xl font-semibold lg:text-5xl lg:font-bold ">130</div>
                    <div className="text-slate-300 flex flex-nowrap lg:text-xl">Professional</div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center  lg:w-1/4">
                    <div className="text-white text-3xl font-semibold lg:text-5xl lg:font-bold ">24</div>
                    <div className="text-slate-300 flex flex-nowrap lg:text-xl">Awards gained</div>
                </div>
            </div>
        </div>
    )
}
