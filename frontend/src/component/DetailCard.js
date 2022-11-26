import React from "react";

class DetailCard extends React.Component {
    render() {
        return (
            <div className="card" style="width: 18rem; position: absolute; right: 0; top: 0;">
                <div className="card-body">
                    <h5 className="card-title">Park title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Park address</h6>
                    <p className="card-text">Park description</p>
                </div>
            </div>
        )
    }
}

export default DetailCard;