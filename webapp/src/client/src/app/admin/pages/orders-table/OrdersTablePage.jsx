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
import OrdersTable from '../../components/orders-table';

class OrdersTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <OrdersTable />
          </Grid>
      </Grid>
    )
  }
}

export default (OrdersTablePage);