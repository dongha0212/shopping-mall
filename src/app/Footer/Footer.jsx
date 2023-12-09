'use client'

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white ">
                <div className="container px-2 py-2 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <img src='/images/god.png' alt='Myth Logo' className="w-20 h-20 text-white p-2" />
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            <span className="ml-3 text-xl">MYTH</span>
                        </a>
                        <p className="mt-2 text-sm text-white">Jonngbu University - Web Programming 2</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">KIM GEUN SOO</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-800">92014978</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">FRONT-END</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800" href="https://github.com/rrvv01" target="_blank" rel="noopener noreferrer">Git</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">LEE DONG HA</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-800">92015312</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">FRONT-END</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800" href="https://github.com/dongha0212" target="_blank" rel="noopener noreferrer">Git</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">LEE GYEONG JAE</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-800">92015295</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">BACK-END</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800" href="https://github.com/gongjae" target="_blank" rel="noopener noreferrer">Git</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">KANG MIN HYUK</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-800">92014942</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">BACK-END</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800" href="https://github.com/rkdalsgur" target="_blank" rel="noopener noreferrer">Git</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}