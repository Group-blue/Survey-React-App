import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest, setToken } from '../api/ApiCalls';
import { userLoggedIn } from '../redux/actions/TemplateActions';
import { useHistory  } from "react-router-dom";

const LoginPage = () => {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[apiProgress, setApiProgress] = useState(false);

    const dispatch = useDispatch();

    let history = useHistory();

    const onClickLogin = async (event) => {
        event.preventDefault();
        setApiProgress(true);

        let body = {
            email,
            password
        }
        try{
            const response = await loginRequest(body);
            if(response.data.status === 200){
                const token = response.data.token;
                setToken(token);
                dispatch(userLoggedIn(token));
                history.push("/");
            } else{
                setApiProgress(false);
            }
        } catch(apiError) {
            console.log(apiError);
            setApiProgress(false);
        } 
    }

    return (
        <div className="background no-footer">
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
                                                <input className="form-control" type="email" onChange={(event)=>setEmail(event.target.value)}/>
                                                <span>E-mail</span>
                                            </label>

                                            <label className="form-group has-float-label mb-4">
                                                <input className="form-control" type="password" placeholder="" onChange={(event)=>setPassword(event.target.value)} />
                                                <span>Password</span>
                                            </label>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <a style={{cursor: "pointer"}}>Forget password?</a>
                                                <button disabled={apiProgress} className="btn btn-primary btn-lg btn-shadow" type="submit" onClick={onClickLogin}>
                                                    <div hidden={!apiProgress} className="spinner-border spinner-border-sm"></div> LOGIN
                                                </button>
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