/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import PostsList from '../../components/posts-list';
import './Page.scss';

class HomePage extends Component {
    // state = {
    //     posts: [],
    // };

    // componentWillMount() {
    //     this.loadPosts();
    // }

    // loadPosts = () => {
    //     Api.findAllPosts()
    //         .then((data) => {
    //             this.setState(prevState => ({
    //                 ...prevState,
    //                 posts: data
    //             }));
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    // goToPostDetailPage = (id) => {
    //     this.props.history.push(`/news/${id}`);
    // }
    render = () => {
        return(
            <React.Fragment>
                <h1>Test</h1>
            </React.Fragment>
        )
    }
}

export default (HomePage);