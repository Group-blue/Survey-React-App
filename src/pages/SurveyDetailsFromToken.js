import React, { useEffect, useState } from 'react';
import Footer from '../components/shared/Footer';
import { getSurveyByToken } from '../api/ApiCalls';

const SurveyDetailsFromToken = (props) => {
    const query = new URLSearchParams(props.location.search);
    const [responseData, setResponseData] = useState();

    const token = query.get('token');

    useEffect(()=>{getSurveyFromApi()},[]);

    const getSurveyFromApi = async () => {
        try{
            const response = await getSurveyByToken(token);
            setResponseData(response.data);
        } catch (apiError) {
            console.log(apiError);
        }
    }
    
    return (
        <div>
            <main>
                <nav className="navbar fixed-top">
                    <div className="d-flex">
                        <a className="navbar-logo" style={{cursor: "pointer"}} >
                            <span className="logo d-none d-xs-block"></span>
                            <span className="logo-mobile d-block d-xs-none"></span>
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
                <div>
                    <textarea rows={10} cols={150} value={JSON.stringify(responseData)} />
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default SurveyDetailsFromToken;