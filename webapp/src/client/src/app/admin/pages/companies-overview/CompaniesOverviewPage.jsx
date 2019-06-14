/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Api from '../../../services';

/*
Layout
*/
import { ContentLayout } from '../../layouts';

/*
Pages
*/


const tabs = [
  { id: 'List', link: '/admin/companies' },
  { id: 'Create new Company', link: '/admin/companies/create' },
];

class CompaniesOverviewPage extends Component {

  state = {
      musea: [],
  };

  componentWillMount() {
      this.loadMusea();
  }

  loadMusea = () => {
      Api.museaLocations()
          .then((data) => {
              this.setState(prevState => ({
                  ...prevState,
                  musea: data
              }));
              console.log(this.state.musea);
          })
          .catch((error) => {
              console.log(error);
          });
  }

  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Companies Overview" tabs={tabs}>
        { children }
      </ContentLayout>
    )
  }
}

export default (CompaniesOverviewPage);