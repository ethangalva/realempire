import Header from "./header"

export default function Landing() {
    return (
        <div className="h-screen flex flex-col justify-between px-8  py-4 gap-8 snap-center" id="home">
            <Header />
            {/* GRID OF IMAGES */}
            <div className="flex flex-wrap flex-row justify-center gap-2">
                <div className="h-24 w-2/4 rounded-full bg-[url('../public/images/building-1.jpg')] bg-center bg-no-repeat bg-cover transition ease-in-out delay-250 hover:rotate-2 origin-top-right  duration-500" />
                <div className="h-24 w-1/4 rounded-full bg-[url('../public/images/building-2.jpg')] bg-center bg-no-repeat bg-cover transition ease-in-out delay-250 hover:rotate-6 origin-bottom-right duration-500" />
                <div className="h-24 w-1/4 rounded-full bg-[url('../public/images/building-3.jpg')] bg-center bg-no-repeat bg-cover transition ease-in-out delay-250 hover:rotate-6 origin-top-left duration-500" />
                <div className="h-24 w-2/4 rounded-full bg-[url('../public/images/building-4.jpg')] bg-center bg-no-repeat bg-cover transition ease-in-out delay-250 hover:rotate-2 origin-top-left duration-500 " />
            </div>
            {/* H1 / SMALL MESSAGE OF BRAND */}
            <div className="flex flex-col gap-4 justify-center">
                <p className="text-customGreen font-bold text-center">The Architecture</p>
                <h1 className="text-2xl font-semibold w-full text-center md:text-8xl lg:w-3/5 xl:w-2/5">Build with Technology</h1>
                <p className="text-center ">We build with technology to produce the best buildings and designs so we can make everyone&lsquo;s dream building a reality</p>
            </div>
            {/* STATS */}
            <div className="bg-customGreen h-56 rounded-3xl flex flex-wrap p-4">
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <div className="text-white text-3xl font-semibold">14+</div>
                    <div className="text-slate-300 flex flex-nowrap">Y/O experience</div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <div className="text-white text-3xl font-semibold">387</div>
                    <div className="text-slate-300 flex flex-nowrap">Projects Done</div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <div className="text-white text-3xl font-semibold">130</div>
                    <div className="text-slate-300 flex flex-nowrap">Professional</div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <div className="text-white text-3xl font-semibold">24</div>
                    <div className="text-slate-300 flex flex-nowrap">Awards gained</div>
                </div>
            </div>
        </div>
    )
}
