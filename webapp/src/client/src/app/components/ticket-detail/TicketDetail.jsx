/*
Import external libraries
*/
import React, { Component } from 'react';
import Parser from 'html-react-parser';
import classNames from 'classnames';

/*
Styling
*/
import './TicketDetail.scss'

class TicketDetail extends Component {
    render() {
        const { data: museum } = this.props;

        return (
            <React.Fragment>
                {museum ? (
                    <article key={ museum.id } className={classNames("museum--large")}>
                        <h1 className="museum__title">Bestel Tickets voor : { museum.name }</h1>
                        <p className="museum__location">Bevind zicht: { museum.location }</p>
                        <form class="form">
                            <label>Company</label>
                            <input type="text" placeholder="naam van company"></input>

                            <label>Soort route museum</label>
                            <select>
                                <option>Voorgeselecteerde route</option>
                                <option>Eigen selectie route</option>
                            </select>

                            <label>Aantal tickets</label>
                            <input type="number"></input>

                            <button type="submit">Bestel ticket</button>
                        </form>
                    </article>
                ) : '<p>LOADING</p>'}
            </React.Fragment>
        );
    }
}

export default (TicketDetail);