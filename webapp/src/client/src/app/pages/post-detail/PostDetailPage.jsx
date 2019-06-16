/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import MuseumDetail from '../../components/musea-detail';

class PostDetailPage extends Component {
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
        console.log(museum);
        return (
            <React.Fragment>
                <MuseumDetail data={museum} />
            </React.Fragment>
        )
    }
}

export default (PostDetailPage);