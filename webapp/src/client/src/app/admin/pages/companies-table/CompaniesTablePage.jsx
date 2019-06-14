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
import CompaniesTable from '../../components/companies-table';

class CompaniesTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <CompaniesTable />
          </Grid>
      </Grid>
    )
  }
}

export default (CompaniesTablePage);