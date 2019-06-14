/*
Import external libraries
*/
import React, { Component } from 'react';
import Parser from 'html-react-parser';
import classNames from 'classnames';

/*
Styling
*/
import './MuseumDetail.scss'

class MuseumDetail extends Component {
    render() {
        const { data: museum } = this.props;

        return (
            <React.Fragment>
                {museum ? (
                    <article key={ museum.id } className={classNames("museum--large")}>
                        <h1 className="museum__title">{ museum.title }</h1>
                        <div className="museum__synopsis">{ museum.synopsis }</div>
                        <div className="museum__body">{Parser(museum.body)}</div>
                    </article>
                ) : '<p>LOADING</p>'}
            </React.Fragment>
        );
    }
}

export default (MuseumDetail);