import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

function Layout() {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/administrator'
    }
    return (
        <div className="w-full mx-auto flex  h-screen">
            <div id='sidebar'>

                <aside class="fixed w-72 top-0 bottom-0 left-0 z-40 flex flex-col transition-transform -translate-x-full bg-mainBlue border-r sm:translate-x-0 border-r-slate-800">
                    <div class="flex flex-col items-center gap-4 p-6 border-b border-blue-950">
                        <div class="shrink-0">
                            <Link to='/'><img src={logo} class="max-w-full rounded-full" /></Link>
                        </div>
                    </div>
                    <nav class="flex-1 overflow-auto divide-y divide-slate-100">
                        <div>
                            <ul class="flex flex-col flex-1 gap-1 py-3">
                                <li class="px-3">
                                    <Link to='/dashboard' class="flex items-center gap-3 p-6 transition-colors rounded text-slate-200 hover:text-blue-500 hover:bg-emerald-50 ">
                                        <div class="flex items-center self-center w-6">
                                            <i class="fa-duotone fa-light fa-house"></i>
                                        </div>
                                        <div class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm font-medium truncate">
                                            Dashboard
                                        </div>
                                    </Link>
                                </li>

                                <li class="px-3">
                                    <Link to="insights" class="flex items-center gap-3 p-6 transition-colors rounded text-slate-200 hover:text-blue-500 hover:bg-emerald-50 ">
                                        <div class="flex items-center self-center w-6">
                                            <i class="fa-duotone fa-thin fa-newspaper"></i>
                                        </div>
                                        <div class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm font-medium truncate">
                                            Insights & News
                                        </div>
                                    </Link>
                                </li>

                                <li class="px-3">
                                    <Link to="testimonial" class="flex items-center gap-3 p-6 transition-colors rounded text-slate-200 hover:text-blue-500 hover:bg-emerald-50 ">
                                        <div class="flex items-center self-center w-6">
                                            <i class="fa-duotone fa-thin fa-users"></i>
                                        </div>
                                        <div class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm font-medium truncate">
                                            Testimonials
                                        </div>
                                    </Link>
                                </li>

                                <li class="px-3">
                                    <Link to="pslinks" class="flex items-center gap-3 p-6 transition-colors rounded text-slate-200 hover:text-blue-500 hover:bg-emerald-50 ">
                                        <div class="flex items-center self-center w-6">
                                            <i class="fa-duotone fa-light fa-list-dropdown"></i>
                                        </div>
                                        <div class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm font-medium truncate">
                                            Products & Services
                                        </div>
                                    </Link>
                                </li>

                            </ul>
                        </div>

                    </nav>

                    <footer class="p-3 border-t border-blue-950">
                        <a href="#" class="flex items-center gap-3 p-3 transition-colors rounded text-slate-200 hover:text-blue-200 ">
                            <div class="flex items-center self-center ">
                                <i class="fa-duotone fa-light fa-arrow-up-left-from-circle"></i>
                            </div>
                            <button onClick={logout} class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm font-medium truncate">
                                Logout
                            </button>
                        </a>
                    </footer>
                </aside>
            </div>

            <div className="ml-72 w-full mx-auto">
                <div className=' m-8 border border-slate-200 bg-slate-100'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
