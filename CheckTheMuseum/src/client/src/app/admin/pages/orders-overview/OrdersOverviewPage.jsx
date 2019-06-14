/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

/*
Layout
*/
import { ContentLayout } from '../../layouts';

/*
Pages
*/
import OrdersTablePage from '../orders-table';
import OrderFormPage from '../order-form';

const tabs = [
  { id: 'List', link: '/admin/orders' },
  { id: 'Create new order', link: '/admin/orders/create' },
];

class OrdersOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Orders Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/orders" component={ OrdersTablePage }></Route>
        <Route path="/admin/orders/create" component={ OrderFormPage }></Route>
        <Route path="/admin/orders/:id/edit" component={ OrderFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (OrdersOverviewPage);