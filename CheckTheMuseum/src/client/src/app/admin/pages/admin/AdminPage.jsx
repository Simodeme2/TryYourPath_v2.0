/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/*
Pages
*/
import CompaniesOverviewPage from '../companies-overview';
import CategoriesOverviewPage from '../categories-overview';
import PostsOverviewPage from '../posts-overview';
import UsersOverviewPage from '../users-overview';
import OrdersOverviewPage from '../orders-overview';
import MuseaOverviewPage from '../musea-overview';

class AdminPage extends Component {
  render() {
    return (
      <div className="Admin">
        <Route path="/admin/companies" component={ CompaniesOverviewPage }></Route>
        <Route path="/admin/categories" component={ CategoriesOverviewPage }></Route>
        <Route path="/admin/posts" component={ PostsOverviewPage }></Route>
        <Route path="/admin/users" component={ UsersOverviewPage }></Route>
        <Route path="/admin/orders" component={ OrdersOverviewPage }></Route>
        <Route path="/admin/musea" component={ MuseaOverviewPage }></Route>
      </div>
    )
  }
}

export default (AdminPage);