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
import UsersForm from '../../components/users-form';

class UsersFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <UsersForm postId={id} />
              ) : (
              <UsersForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (UsersFormPage);