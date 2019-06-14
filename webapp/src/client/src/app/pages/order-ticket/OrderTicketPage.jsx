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
                <h1 className="hidden">Bestel Ticket</h1>
                <form class="form">
                    <label>Museum</label>
                    <select>
                        <option>Museum</option>
                        <option>Museum</option>
                        <option>Museum</option>
                        <option>Museum</option>
                    </select>

                    <label>Company</label>
                    <input type="text" placeholder="naam van company"></input>

                    <label>Soort route museum</label>
                    <select>
                        <option>Voorgeselecteerde route</option>
                        <option>Eigen selectie route</option>
                    </select>

                    <button type="submit">Bestel ticket</button>
                </form>
            </React.Fragment>
        )
    }
}

export default (OrderTicketPage);