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
import MuseaTablePage from '../musea-table';
import PostFormPage from '../post-form';

const tabs = [
  { id: 'List', link: '/admin/musea' },
  { id: 'Create new post', link: '/admin/musea/create' },
];

class MuseaOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Musea Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/musea" component={ MuseaTablePage }></Route>
        <Route path="/admin/musea/create" component={ PostFormPage }></Route>
        <Route path="/admin/musea/:id/edit" component={ PostFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (MuseaOverviewPage);