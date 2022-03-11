import React from 'react';

const LoginPage = () => {
    return (
        <div className="background show-spinner no-footer">
            <div className="fixed-background">
                <main>
                    <div className="container">
                        <div className="row h-100">
                            <div className="col-12 col-md-10 mx-auto my-auto">
                                <div className="card auth-card">
                                    <div className="position-relative image-side ">

                                        <p className=" text-white h2">WELCOME TO SURVEY APP</p>

                                        <p className="white mb-0">
                                            Please use your credentials to login.
                                            <br/>If you are not a member, please contact your manager.
                                        </p>
                                    </div>
                                    <div className="form-side">
                                        <a href="Dashboard.Default.html">
                                            <span className="logo-single"></span>
                                        </a>
                                        <h6 className="mb-4">Login</h6>
                                        <form>
                                            <label className="form-group has-float-label mb-4">
                                                <input className="form-control" />
                                                <span>E-mail</span>
                                            </label>

                                            <label className="form-group has-float-label mb-4">
                                                <input className="form-control" type="password" placeholder="" />
                                                <span>Password</span>
                                            </label>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <a style={{cursor: "pointer"}}>Forget password?</a>
                                                <button className="btn btn-primary btn-lg btn-shadow" type="submit">LOGIN</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        
    );
};

export default LoginPage;