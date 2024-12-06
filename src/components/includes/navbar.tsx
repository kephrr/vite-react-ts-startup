function NavBar() {
    const LINKS = {
        twitter: '',
        github: '',
        linkedin: ''
    }
    const changelog = "Latest change, updates and enhancements added to the website"

    return <div className='z-10 fixed navbar bg-transparent justify-center'>
        <ul className="menu bg-base-100 menu-horizontal lg:max-w-screen-md sm:max-w-sm rounded-box">
            <li>
                <a href="/">Home</a>
            </li>
            <div className="tooltip tooltip-bottom" data-tip={changelog}>
                <li>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Changelog
                        <span className="badge badge-sm badge-warning">new</span>
                    </a>
                </li>
            </div>
            <li>
                <details>
                    <summary>Support Me</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                        <li><a href={LINKS.twitter}>Twitter</a></li>
                        <li><a href={LINKS.linkedin}>LinkedIn</a></li>
                        <li><a href={LINKS.github}>Git Hub</a></li>
                    </ul>
                </details>
            </li>
            <li>
            <a>Creator</a>
            </li>
            <li>
                <span className="bg-blue-500">
                    <a className="text-white font-semibold">
                        Sign Up
                    </a>
                </span>
            </li>
        </ul>
    </div>

}

export default NavBar;