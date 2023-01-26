export default function About() {
    return (
        <div className="h-screen flex flex-col md:px-8 md:py-6 snap-center" id="about">
            <div className="flex h-full flex-col justify-center bg-customGreen py-6 px-8 gap-8 md:py-8 md:rounded-3xl lg:flex-wrap lg:flex-row lg:gap-0">
                <div className="flex h-1/2 flex-col gap-2 w-full lg:w-2/3 lg:h-full">
                    <h1 className="text-white text-2xl font-bold text-center lg:text-5xl lg:pb-4">Design and build to get  great room for your needs</h1>
                    <div className="bg-[url('../public/images/building-4.jpg')] bg-center bg-no-repeat bg-cover w-full h-full rounded-3xl transition ease-in-out delay-250 hover:rotate-1 origin-bottom-left duration-500" />
                </div>
                <div className="flex flex-wrap flex-row justify-center gap-0 w-full lg:w-1/3 lg:h-full lg:px-4 lg:flex-col lg:gap-4"> 
                    <div className="flex flex-col w-1/2 px-2 gap-4 lg:justify-center lg:w-full">
                        <div>
                            <h1 className="text-white font-semibold text-xl lg:text-4xl">Architecture</h1>
                            <p className="text-sm font-medium text-slate-300 lg:text-lg">We bring magic buildings with good foundations to fulfill your dreams</p>
                        </div>
                        <div className="w-3/4 bg-slate-400 h-px md:w-1/2 lg:w-full"></div>
                        <div>
                            <h1 className="text-white font-semibold text-xl lg:text-4xl">Design</h1>
                            <p className="text-sm font-medium text-slate-300 lg:text-lg">Creative design with digital products that help you promote your business</p>
                        </div>
                        <div className="w-3/4 bg-slate-400 h-px md:w-1/2 lg:w-full lg:block hidden"></div>
                    </div>
                    <div className="flex flex-col w-1/2 px-2 gap-4 lg:justify-center lg:w-full">
                        <div>
                            <h1 className="text-white font-semibold text-xl lg:text-4xl">Interior</h1>
                            <p className="text-sm font-medium text-slate-300 lg:text-lg">We bring magic in the interior to get you and your family comfortable</p>
                        </div>
                        <div className="w-3/4 bg-slate-400 h-px md:w-1/2 lg:w-full"></div>
                        <div> 
                            <h1 className="text-white font-semibold text-xl lg:text-4xl">Product</h1>
                            <p className="text-sm font-medium text-slate-300 lg:text-lg">We make custom products and sell them. To those who need this product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
