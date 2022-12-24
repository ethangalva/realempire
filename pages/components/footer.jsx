export default function Footer() {
    return (
        <div className="h-screen flex flex-col p-4 md:px-8 md:py-6 snap-center justify-between bg-customBlack" id="footer">
            {/* CREDITS/GO BACK UP  */}
            <div className="w-full flex flex-row">
                <div className="text-white w-1/2 font-bold">REALEMPIRE</div>
                <div className="text-white hidden md:flex">
                    BASED IN USA<br />
                    WORKING WORLDWIDE
                </div>
                <div className="w-1/2 items-center flex justify-end gap-2 text-white font-bold">
                    <a href="#home">BACK TO TOP</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>    
                </div>
            </div>
            {/* CALL TO ACTION */}
            <div className="w-full text-center font-bold text-5xl text-white hover:underline">
                <a href="mailto:ethangalva@gmail.com">GET IN TOUCH</a>
            </div>
            {/* PROJECT LINKS */}
            <div className="flex flex-row w-full">
                <div className="text-white w-1/2 font-bold flex items-center gap-2">
                    <a href="https://dribbble.com/shots/19884830-INDThecture-landing-page-Architecture-Sunnyday-Sunnyday" target="_blank" rel="noreferrer">INSPIRATION</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                    </svg>
                </div>
                <div className="text-white hidden md:flex">
                    BASED IN USA<br />
                    WORKING WORLDWIDE
                </div>
                <div className="w-1/2 items-center flex justify-end gap-2 text-white font-bold">
                    <a href="https://github.com/ethangalva" target="_blank" rel="noreferrer">by @ethangalva</a>
                </div>
            </div>
        </div>
    )
}