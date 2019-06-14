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


const tabs = [
  { id: 'List', link: '/admin/users' },
  { id: 'Create new blog', link: '/admin/users/create' },
];

class UsersOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Users Overview" tabs={tabs}>
        { children }
      </ContentLayout>
    )
  }
}

export default (UsersOverviewPage);