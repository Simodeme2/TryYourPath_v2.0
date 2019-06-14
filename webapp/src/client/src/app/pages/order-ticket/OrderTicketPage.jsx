/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import PostsList from '../../components/posts-list';

class OrderTicketPage extends Component {


    goToPostDetailPage = (id) => {
        this.props.history.push(`/news/${id}`);
    }

    render() {
        // const { posts } = this.state;
        return (
            <React.Fragment>
                <h1 className="hidden">Bestel Tickets</h1>
            </React.Fragment>
        )
    }
}

export default (OrderTicketPage);