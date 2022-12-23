export default function Project() {
    return (
        <div className="h-screen flex flex-col snap-center" id="about">
            <div className="flex h-full flex-col justify-center bg-customBlack py-6 px-8 gap-8 md:py-8 ">
                {/* container for text */}
                <div className="flex flex-row w-full">
                    <h1 className="text-white text-2xl font-bold text-center md:text-left md:w-5/12">We bring better changes to every building</h1>
                    {/* <div className="bg-[url('../public/images/building-4.jpg')] bg-center bg-no-repeat bg-cover w-full h-full rounded-3xl transition ease-in-out delay-250 hover:rotate-1 origin-bottom-left duration-500" /> */}
                    <p className="hidden w-7/12 text-sm md:flex text-slate-300 items-center">Anim voluptate est fugiat cillum Lorem sunt eiusmod Lorem magna ex officia reprehenderit proident fugiat do do sit sint sint aliqua.</p>
                    {/* container for projects */}
                </div>
                {/* container for projects */}
                <div className="flex flex-col h-4/5 gap-4 md:flex-row md:flex-wrap md:justify-center">
                    <div className="bg-[url('../public/images/building-1.jpg')] bg-bottom bg-no-repeat bg-cover h-1/2 w-full rounded-3xl flex flex-col justify-end overflow-hidden md:w-4/12       transition ease-in-out delay-250 hover:rotate-1 origin-top-left duration-500">
                        <div className="h-1/5 w-full bg-customGreen flex px-4">
                            <h2 className="w-1/5 flex items-center font-bold text-3xl text-white">01</h2>
                            <div className="w-4/5 flex flex-col justify-center items-left">
                                <h3 className="font-bold text-white">Assembly in Texas</h3>
                                <p className="font-medium text-sm text-slate-300">Interior and Exterior</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('../public/images/building-2.jpg')] bg-bottom bg-no-repeat bg-cover h-1/2 w-full rounded-3xl flex flex-col justify-end overflow-hidden md:w-7/12       transition ease-in-out delay-250 hover:rotate-2 origin-bottom-right duration-500">
                        <div className="h-1/5 w-full bg-customGreen flex px-4">
                            <h2 className="w-1/5 flex items-center font-bold text-3xl text-white">02</h2>
                            <div className="w-4/5 flex flex-col justify-center items-left">
                                <h3 className="font-bold text-white">Cube tricolor building</h3>
                                <p className="font-medium text-sm text-slate-300">Interior and Exterior</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex bg-[url('../public/images/building-3.jpg')] bg-bottom bg-no-repeat bg-cover h-1/2 w-full rounded-3xl flex-col justify-end overflow-hidden md:w-7/12       transition ease-in-out delay-250 hover:rotate-1 origin-top-left duration-500">
                        <div className="h-1/5 w-full bg-customGreen flex px-4">
                            <h2 className="w-1/5 flex items-center font-bold text-3xl text-white">03</h2>
                            <div className="w-4/5 flex flex-col justify-center items-left">
                                <h3 className="font-bold text-white">Bayview Residential</h3>
                                <p className="font-medium text-sm text-slate-300">Interior and Exterior</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex bg-[url('../public/images/building-4.jpg')] bg-bottom bg-no-repeat bg-cover h-1/2 w-full rounded-3xl flex-col justify-end overflow-hidden md:w-4/12       transition ease-in-out delay-250 hover:rotate-1 origin-top-left duration-500">
                        <div className="h-1/5 w-full bg-customGreen flex px-4">
                            <h2 className="w-1/5 flex items-center font-bold text-3xl text-white">04</h2>
                            <div className="w-4/5 flex flex-col justify-center items-left">
                                <h3 className="font-bold text-white">Walmart Offices</h3>
                                <p className="font-medium text-sm text-slate-300">Interior and Exterior</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

