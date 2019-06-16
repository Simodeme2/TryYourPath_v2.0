/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import TicketDetail from '../../components/ticket-detail';

class OrderTicketDetailPage extends Component {
    state = {
        museum: null,
    };

    componentWillMount() {
        this.loadPost(this.props.match.params.id);
    }

    loadPost = (id) => {
        Api.findOnePost(id)
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    museum: data
                }));
            })
            .catch((error) => {

            });
    }
    render() {
        const { museum } = this.state;

        return (
            <React.Fragment>
                <TicketDetail data={museum} />
            </React.Fragment>
        )
    }
}

export default (OrderTicketDetailPage);