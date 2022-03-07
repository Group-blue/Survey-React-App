
const AppMenu = () => {
    return (
        <div>
            <div className="app-menu">
                <div className="p-4 h-100">
                    <div className="scroll">
                        <p className="text-muted text-small">Status</p>
                        <ul className="list-unstyled mb-5">
                            <li className="active">
                                <a href="#">
                                    <i className="simple-icon-refresh"></i>
                                    Active Surveys
                                    <span className="float-right">12</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="simple-icon-check"></i>
                                    Completed Surveys
                                    <span className="float-right">24</span>

                                </a>
                            </li>
                        </ul>

                        <p className="text-muted text-small">Categories</p>
                        <ul className="list-unstyled mb-5">
                            <li>
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="category1"/>
                                    <label className="custom-control-label" htmlFor="category1">Development</label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="category2"/>
                                    <label className="custom-control-label" htmlFor="category2">Workplace</label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox ">
                                    <input type="checkbox" className="custom-control-input" id="category3"/>
                                    <label className="custom-control-label" htmlFor="category3">Hardware</label>
                                </div>
                            </li>
                        </ul>

                        <p className="text-muted text-small">Labels</p>
                        <div>
                            <p className="d-sm-inline-block mb-1">
                                <a href="#">
                                    <span className="badge badge-pill badge-outline-primary mb-1">NEW FRAMEWORK</span>
                                </a>
                            </p>

                            <p className="d-sm-inline-block mb-1">
                                <a href="#">
                                    <span className="badge badge-pill badge-outline-theme-3 mb-1">EDUCATION</span>
                                </a>
                            </p>
                            <p className="d-sm-inline-block  mb-1">
                                <a href="#">
                                    <span className="badge badge-pill badge-outline-secondary mb-1">PERSONAL</span>
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
                <a className="app-menu-button d-inline-block d-xl-none" href="#">
                    <i className="simple-icon-options"></i>
                </a>
            </div>
        </div>
    );
};

export default AppMenu;