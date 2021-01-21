import React from 'react'
import "./page15.css"
class Billing extends React.Component {
    render() {
        return (
            <div>
                <div className="box">
                    <div className="bill">
                        <p>Add A Billing Method</p>
                    </div>
                    <div className="paym">
                        <div className="ard">
                            <input type="radio" name="paymentmethod" id="card" value="Payment card" />
                            <label for="card">Payment Card</label><br /><br />
                            <input type="radio" name="paymentmethod" id="paypal" value="paypal" />
                            <label for="paypal">PayPal</label><br />
                            <input type="submit" value="Pay With Paypall" id="pall" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Billing;