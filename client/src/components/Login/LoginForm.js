import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/*import { Card, CardText } from 'material-ui/Card';
*/
import {Input, Button, Card } from 'react-materialize';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
<div className="center-align">
  <Card className="container">
    <form className="center-align" action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <Input
          floatingLabelText="username"
          name="username"
          errorText={errors.username}
          onChange={onChange}
          value={user.username}
        />
      </div>

      <div className="field-line">
        <Input
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <Button type="submit" label="Log in" primary>Log in</Button>
      </div>

      <p>Don't have an account? <Link to={'/createuser'}>Create one</Link>.</p>
    </form>
  </Card>
</div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
