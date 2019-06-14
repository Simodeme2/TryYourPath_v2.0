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
import MuseaTable from '../../components/musea-table';

class MuseaTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <MuseaTable />
          </Grid>
      </Grid>
    )
  }
}

export default (MuseaTablePage);