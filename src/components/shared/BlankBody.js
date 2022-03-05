
const BlankBody = () => {
    return (
        <div>
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>Blank Page</h1>
                            <nav className="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                                <ol className="breadcrumb pt-0">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#">Library</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                            <div className="separator mb-5"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BlankBody;