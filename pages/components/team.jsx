export default function About() {
    return (
        <div className="h-screen flex flex-col md:px-8 md:py-6 snap-center gap-4 bg-customBlack" id="team">
            <div className="flex flex-col h-full gap-4 p-4 bg-customGreen md:justify-center md:rounded-3xl overflow-hidden md:h-full ">
                <h1 className="text-white text-2xl font-bold text-center md:text-3xl lg:text-5xl">Our Team</h1>
                {/* TEAM MEMBERS */}
                <div className="w-full h-full flex flex-wrap md:flex-nowrap md:h-2/3 lg:">
                    {/* single container of team member */}
                    <div className="h-1/2 w-1/2 p-4 pb-2 pr-2 md:py-0 md:px-2 md:h-full">
                        <div className="flex flex-col h-full w-full gap-2">
                            <div className="w-full h-1/2  rounded-3xl bg-[url('../public/images/person-1.jpg')] bg-top bg-no-repeat bg-cover lg:h-3/4" />
                            <div className="w-full h-1/2 flex flex-col items-center gap-2 lg:h-1/4">
                                <h1 className="w-10/12 text-left font-bold text-white">Dan M Pierce</h1>
                                <p className="w-11/12 text-sm text-slate-100">As an interior designer Gina creates elegant enviroments. </p>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/2 w-1/2  p-4 pb-2 pl-2 md:py-0 md:px-2 md:h-full">
                        <div className="flex flex-col h-full w-full gap-2">
                            <div className="w-full h-1/2  rounded-3xl bg-[url('../public/images/person-2.jpg')] bg-top bg-no-repeat bg-cover lg:h-3/4" />
                            <div className="w-full h-1/2 flex flex-col items-center gap-2 lg:h-1/4">
                                <h1 className="w-10/12 text-left font-bold text-white">Gina J Zapien</h1>
                                <p className="w-11/12 text-sm text-slate-100">As an interior designer Gina creates elegant enviroments. </p>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/2 w-1/2  p-4 pt-2 pr-2 md:py-0 md:px-2 md:h-full">
                        <div className="flex flex-col h-full w-full gap-2">
                            <div className="w-full h-1/2  rounded-3xl bg-[url('../public/images/person-3.jpg')] bg-top bg-no-repeat bg-cover lg:h-3/4" />
                            <div className="w-full h-1/2 flex flex-col items-center gap-2 lg:h-1/4">
                                <h1 className="w-10/12 text-left font-bold text-white">Robert C Russ</h1>
                                <p className="w-11/12 text-sm text-slate-100">As an interior designer Gina creates elegant enviroments. </p>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/2 w-1/2  p-4 pt-2 pl-2 md:py-0 md:px-2 md:h-full">
                        <div className="flex flex-col h-full w-full gap-2">
                            <div className="w-full h-1/2  rounded-3xl bg-[url('../public/images/person-4.jpg')] bg-top bg-no-repeat bg-cover lg:h-3/4" />
                            <div className="w-full h-1/2 flex flex-col items-center gap-2 lg:h-1/4">
                                <h1 className="w-10/12 text-left font-bold text-white">Anna R Kiser</h1>
                                <p className="w-11/12 text-sm text-slate-100">As an engineer, Anna will make your building modern and safe from all dangers. </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TEAM STATS */}
                <div className="hidden md:flex">
                    <div className="w-1/3 text-center ">
                        <h3 className="text-white text-2xl font-bold">TEAM MEMBERS</h3>
                        <p className="text-xs font-semibold text-slate-200">employees of RealEmpire*</p>
                        <p className="text-5xl font-bold text-white pt-2">32</p>
                    </div>
                    <div className="w-1/3 text-center ">
                        <h3 className="text-white text-2xl font-bold">PROJECTS</h3>
                        <p className="text-xs font-semibold text-slate-200">completed by RealEmpire*</p>
                        <p className="text-5xl font-bold text-white pt-2">200+</p>
                    </div>
                    <div className="w-1/3 text-center ">
                        <h3 className="text-white text-2xl font-bold">PORTOFOLIO</h3>
                        <p className="text-xs font-semibold text-slate-200">managed by RealEmpire*</p>
                        <p className="text-5xl font-bold text-white pt-2">$497+ M</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
