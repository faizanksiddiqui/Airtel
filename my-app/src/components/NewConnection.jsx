function NewConnection(){
    return(
        <div className="new-connection-container">
            <div className="new-connection-elements">
                <div className="new-connection-text">
                    <p><b>Buy a new connection</b></p>
                </div>
                <div className="new-connection-button">
                    <button><img src="./images/prepaid.svg" alt="brand"></img><p>Prepaid</p></button>
                    <button><img src="./images/postpaid.svg" alt="brand"></img><p>Postpaid</p></button>
                    <button><img src="./images/DTH.svg" alt="brand"></img><p>DTH</p></button>
                    <button><img src="./images/fiber.svg" alt="brand"></img><p>Fiber</p></button>
                    <button><img src="./images/airtel-black.svg" alt="brand"></img><p>Black</p></button>
                    <button><img src="./images/airtel-safe.svg" alt="brand"></img><p>X Safe</p></button>
                </div>
                <div className="new-connection-red-banner">
                    <div className="new-connection-red-banner-image">
                        <img src="./images/switch-to-airtel-web.png" alt="switch to airtel"></img>
                    </div> 
                    <div className="new-connection-red-banner-text">
                        <h4>Switch to airtel<br></br></h4>
                        <p>Select a plan & order SIM • Get SIM home-delivered</p>
                    </div>
                    <div className="new-connection-red-banner-button">
                    <button><b>GET STARTED</b></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewConnection;