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
    createTable = () => {
        let table = []
    
        // Outer loop to create parent
        for (let i = 0; i < 8; i++) {
            table.push(
                <div className="card">
                    <div className="card__header">
                        <img src="https://picsum.photos/400/200" alt="image" className="card__image"/>
                    </div>
                    <div className="card__content">
                        <h2 className="card__title">Museum SCI-FI</h2>
                        <p className="card__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in magna sem. Curabitur non mauris sit amet risus interdum rutrum a quis justo.
                        </p>
                        <div className="card__list">
                            <ul>
                                <li>Sci-Fi</li>
                                <li>Space</li>
                                <li>Robots</li>
                                <li>Computers</li>
                            </ul>
                        </div>
                        <div className="card__btn">
                            <a href='/order-ticket' className="order-btn">Bestel Tickets</a>
                        </div>
                    </div>
                </div>
            )
        }
        return table
      }

    render() {
        // const { posts } = this.state;
        return (
            <React.Fragment>
                <h1 className="title">Overzicht Musea</h1>
                {/* <section className="section section--articles">
                    <header className="section__header">
                        <h2 className="section__title">Nieuws</h2>
                    </header>
                    <div className="section__content section__content--articles">
                        <PostsList posts={posts} onReadMore={this.goToPostDetailPage} />
                    </div>
                    <footer className="section__footer">
                        READ MORE
                    </footer>
                </section> */}

                 <section className="section section--overview">
                    <div className="section__content">
                    {this.createTable()}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default (HomePage);