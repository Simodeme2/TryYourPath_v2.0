/*
Import external libraries
*/
import React, { Component } from 'react';
import classNames from 'classnames';

/*
Styling
*/
import './MuseaList.scss'

class MuseaLists extends Component {
    readMoreHandler = (ev, id) => {
        ev.preventDefault();
        if (typeof this.props.onReadMore === 'function') {
            this.props.onReadMore(id);
        }
    }
    render() {
        const { musea } = this.props;

        return (
            <React.Fragment>
                {musea && musea.map( (museum, index) => (
                    <article key={ museum.id } className={classNames("museum--small")}>
                        <h1 className="museum__title">{ museum.name }</h1>
                        <div className="museum__synopsis">{ museum.location }</div>
                        <div className="museum__synopsis">{ museum.description }</div>
                        <button onClick={(ev) => this.readMoreHandler(ev, museum.id)}>More</button>
                    </article>
                ))}
            </React.Fragment>
        );
    }
}

export default (MuseaLists);