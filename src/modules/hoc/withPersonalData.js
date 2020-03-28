import React from 'react';
import axios from 'axios';

import { API_BASE_URL } from '../../../environnement';

const withPersonalData = id => WrappedComponent => {
  class withPersonalData extends React.Component {
    state = {
      user: {},
      hasError: false,
      loading: false,
    };

    componentDidMount() {
      this.setState({ loading: true });

      axios
        .get(`${API_BASE_URL}/users/${id}`)
        .then(response => {
          this.setState({
            user: response.data,
            loading: false,
            hasError: false,
          });
          return response;
        })
        .catch(error => {
          console.log(error);
          this.setState({
            hasError: true,
            loading: false,
          });
          return error;
        })
        .done();
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }

  return withPersonalData;
};

export default withPersonalData;
