/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import MuseaListPaged from '../../components/musea-list-paged';

class NewsPage extends Component {
    state = {
        musea: [],
        pagination: {
            limit: 5,
            page: 1,
            pages: 1,
            total: 1,
        },
    };

    componentWillMount() {
        this.loadMusea(1);
    }

    loadMusea = (pageIndex) => {
        console.log(pageIndex);
        Api.findAllMusea({ limit: 6, skip: pageIndex })
            .then((data) => {
                const prevMusea = this.state.musea;
                const newMusea = [...prevMusea, ...data.docs];
                this.setState(prevState => ({
                    ...prevState,
                    musea: newMusea,
                    pagination: {
                        limit: data.limit,
                        page: data.page,
                        pages: data.pages,
                        total: data.total
                    },
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    goToMuseumDetailPage = (id) => {
        this.props.history.push(`/musea/${id}`);
    }

    goToTicketsPage = (id) => {
        this.props.history.push(`/order-ticket/${id}`)
    }



    render() {
        const { pagination, musea } = this.state;
        return (
            <React.Fragment>
                <h1 className="hidden">Musea</h1>
                <section className="section section--overview">
                    <div className="section__content">    
                        <MuseaListPaged musea={musea} pagination={pagination} onReadMore={this.goToMuseumDetailPage} onLoadMore={this.loadMusea} onReadTickets={this.goToTicketsPage}/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default (NewsPage);