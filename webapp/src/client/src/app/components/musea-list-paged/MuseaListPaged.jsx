/*
Import external libraries
*/
import React, { Component } from 'react';
import classNames from 'classnames';

/*
Styling
*/
import './MuseaListPaged.scss'

class MuseaListsPaged extends Component {
    readTicketsHandler = (ev, id) => {
        ev.preventDefault();
        if (typeof this.props.onReadTickets === 'function') {
            this.props.onReadTickets(id);
        }
    }
    readMoreHandler = (ev, id) => {
        ev.preventDefault();
        if (typeof this.props.onReadMore === 'function') {
            this.props.onReadMore(id);
        }
    }
    loadMoreHandler = (ev, pageIndex) => {
        ev.preventDefault();
        if (typeof this.props.onLoadMore === 'function') {
            this.props.onLoadMore(pageIndex);
        }
    }
    render() {
        const { musea, pagination } = this.props;

        return (
            <React.Fragment>
                {musea && musea.map( (museum, index) => (
                    <article key={ museum.id } className={classNames("museum--small")}>           
                                <div className="card">
                                    <div className="card__header">
                                        <img src="https://picsum.photos/400/200" alt="image" className="card__image"/>
                                    </div>
                                    <div className="card__content">
                                        <h2 className="card__title">{ museum.name }</h2>
                                        <p className="card__location">{ museum.location }</p>
                                        <p className="card__description">{ museum.description }
                                        </p>
                                        <div className="card__btn">
                                            <button className="order-btn" onClick={(ev) => this.readTicketsHandler(ev, museum.id)}>Bestel Tickets</button>
                                        </div>
                                        <button onClick={(ev) => this.readMoreHandler(ev, museum.id)}>More</button>
                                    </div>
                                </div>
                    </article>
                ))}
                {musea && pagination.page < pagination.pages ? <button onClick={(ev) => this.loadMoreHandler(ev, pagination.page + 1)}>Meer laden</button>: ''}
            </React.Fragment>
        );
    }
}

export default (MuseaListsPaged);