
const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top">
                <div className="d-flex align-items-center navbar-left">
                    <a href="#" className="menu-button d-none d-md-block">
                        <svg className="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
                            <rect x="0.48" y="0.5" width="7" height="1" />
                            <rect x="0.48" y="7.5" width="7" height="1" />
                            <rect x="0.48" y="15.5" width="7" height="1" />
                        </svg>
                        <svg className="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                            <rect x="1.56" y="0.5" width="16" height="1" />
                            <rect x="1.56" y="7.5" width="16" height="1" />
                            <rect x="1.56" y="15.5" width="16" height="1" />
                        </svg>
                    </a>

                    <a href="#" className="menu-button-mobile d-xs-block d-sm-block d-md-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
                            <rect x="0.5" y="0.5" width="25" height="1" />
                            <rect x="0.5" y="7.5" width="25" height="1" />
                            <rect x="0.5" y="15.5" width="25" height="1" />
                        </svg>
                    </a>

                    <div className="search" data-search-path="Pages.Search.html?q=">
                        <input placeholder="Search..."/>
                        <span className="search-icon">
                            <i className="simple-icon-magnifier"></i>
                        </span>
                    </div>
                </div>

                <div className="navbar-right">
                    <div className="header-icons d-inline-block align-middle">
                        <div className="d-none d-md-inline-block align-text-bottom mr-3">
                            <div className="custom-switch custom-switch-primary-inverse custom-switch-small pl-1" 
                                data-toggle="tooltip" data-placement="left" title="Dark Mode">
                                <input className="custom-switch-input" id="switchDark" type="checkbox" />
                                <label className="custom-switch-btn" htmlFor="switchDark"></label>
                            </div>
                        </div>

                        <div className="position-relative d-none d-sm-inline-block">
                            <button className="header-icon btn btn-empty" type="button" id="iconMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="simple-icon-grid"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right mt-3  position-absolute" id="iconMenuDropdown">
                                <a href="#" className="icon-menu-item">
                                    <i className="iconsminds-equalizer d-block"></i>
                                    <span>Settings</span>
                                </a>

                                <a href="#" className="icon-menu-item">
                                    <i className="iconsminds-male-female d-block"></i>
                                    <span>Users</span>
                                </a>

                                <a href="#" className="icon-menu-item">
                                    <i className="iconsminds-puzzle d-block"></i>
                                    <span>Components</span>
                                </a>

                                <a href="#" className="icon-menu-item">
                                    <i className="iconsminds-bar-chart-4 d-block"></i>
                                    <span>Profits</span>
                                </a>

                                <a href="#" className="icon-menu-item">
                                    <i className="iconsminds-file d-block"></i>
                                    <span>Surveys</span>
                                </a>

                                <a href="#" className="icon-menu-item">
                                    <i className="iconsminds-suitcase d-block"></i>
                                    <span>Tasks</span>
                                </a>

                            </div>
                        </div>

                        <div className="position-relative d-inline-block">
                            <button className="header-icon btn btn-empty" type="button" id="notificationButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="simple-icon-bell"></i>
                                <span className="count">3</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right mt-3 position-absolute" id="notificationDropdown">
                                <div className="scroll">
                                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                                        <a href="#">
                                            <img src="img/profiles/l-2.jpg" alt="Notification Image"
                                                className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                        </a>
                                        <div className="pl-3">
                                            <a href="#">
                                                <p className="font-weight-medium mb-1">Joisse Kaycee just sent a new comment!</p>
                                                <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                                        <a href="#">
                                            <img src="img/notifications/1.jpg" alt="Notification Image"
                                                className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                        </a>
                                        <div className="pl-3">
                                            <a href="#">
                                                <p className="font-weight-medium mb-1">1 item is out of stock!</p>
                                                <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                                        <a href="#">
                                            <img src="img/notifications/2.jpg" alt="Notification Image"
                                                className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                        </a>
                                        <div className="pl-3">
                                            <a href="#">
                                                <p className="font-weight-medium mb-1">New order received! It is total $147,20.</p>
                                                <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mb-3 pb-3 ">
                                        <a href="#">
                                            <img src="img/notifications/3.jpg" alt="Notification Image"
                                                className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                        </a>
                                        <div className="pl-3">
                                            <a href="#">
                                                <p className="font-weight-medium mb-1">3 items just added to wish list by a user!
                                                </p>
                                                <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="header-icon btn btn-empty d-none d-sm-inline-block" type="button" id="fullScreenButton">
                            <i className="simple-icon-size-fullscreen"></i>
                            <i className="simple-icon-size-actual"></i>
                        </button>

                    </div>

                    <div className="user d-inline-block">
                        <button className="btn btn-empty p-0" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <span className="name">Sarah Kortney</span>
                            <span>
                                <img alt="Profile Picture" src="img/profiles/l-1.jpg" />
                            </span>
                        </button>

                        <div className="dropdown-menu dropdown-menu-right mt-3">
                            <a className="dropdown-item" href="#">Account</a>
                            <a className="dropdown-item" href="#">Features</a>
                            <a className="dropdown-item" href="#">History</a>
                            <a className="dropdown-item" href="#">Support</a>
                            <a className="dropdown-item" href="#">Sign out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;