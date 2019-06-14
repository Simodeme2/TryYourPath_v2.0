/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Material UI
*/
import Grid from '@material-ui/core/Grid';

/*
Components
*/
import CompanyForm from '../../components/company-form';

class CompanyFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <CompanyForm companyId={id} />
              ) : (
              <CompanyForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (CompanyFormPage);