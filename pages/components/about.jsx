export default function About() {
    return (
        <div className="h-screen flex flex-col md:px-8 md:py-6 snap-center" id="about">
            <div className="flex h-full flex-col justify-center bg-customGreen py-6 px-8 gap-8 md:py-8 md:rounded-3xl ">
                <div className="flex h-1/2 flex-col gap-2">
                    <h1 className="text-white text-2xl font-bold text-center">Design and build to get  great room for your needs</h1>
                    <div className="bg-[url('../public/images/building-4.jpg')] bg-center bg-no-repeat bg-cover w-full h-full rounded-3xl transition ease-in-out delay-250 hover:rotate-1 origin-bottom-left duration-500" />
                </div>
                <div className="flex flex-wrap flex-row justify-center gap-0">
                    <div className="flex flex-col w-1/2 px-2 gap-4">
                        <div>
                            <h1 className="text-white font-semibold text-xl">Architecture</h1>
                            <p className="text-sm font-medium text-slate-300">We bring magic buildings with good foundations to fulfill your dreams</p>
                        </div>
                        <div className="w-3/4 bg-slate-400 h-px md:w-1/2 lg:w-1/4"></div>
                        <div>
                            <h1 className="text-white font-semibold text-xl">Design</h1>
                            <p className="text-sm font-medium text-slate-300">Creative design with digital products that help you promote your business</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 px-2 gap-4">
                        <div>
                            <h1 className="text-white font-semibold text-xl">Interior</h1>
                            <p className="text-sm font-medium text-slate-300">We bring magic in the interior to get you and your family comfortable</p>
                        </div>
                        <div className="w-3/4 bg-slate-400 h-px md:w-1/2 lg:w-1/4"></div>
                        <div>
                            <h1 className="text-white font-semibold text-xl">Product</h1>
                            <p className="text-sm font-medium text-slate-300">We make custom products and sell them. To those who need this product</p>
                        </div>
                        {/* hi */}
                    </div>
                </div>
            </div>
        </div>
    )
}