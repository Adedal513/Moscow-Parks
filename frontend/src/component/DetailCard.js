import React from "react";

class DetailCard extends React.Component {
    render() {
        console.log(this.props.detailsData)
        return (
            <div id='park-card' class="card">
                <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.detailsData.title}</h5>
                    <p class="card-text">{this.props.detailsData.description}</p>
                    <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                </div>
            </div>
        )
    }
}

export default DetailCard;