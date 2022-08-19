const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Project Management</a>
            </div>
            <div className="flex-none gap-2">
                <a className="btn btn-ghost normal-case text-xl">Projects</a>
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/favicon.ico" />
                        </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a>
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar