import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';

require('./styles.less');

const Application = React.createClass({
  render() {
    return (
      <div>
        <Grid>
          <Jumbotron>
          <h1>Hello World!</h1>
          </Jumbotron>
        </Grid>
      </div>
    );
  }
});

export default Application;
