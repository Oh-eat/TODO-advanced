import React from 'react';
import AuthModal from '../components/auth/AuthModal';
import { useSelector, useDispatch } from 'react-redux';
import { initialize, changeField } from '../modules/auth';

const AuthModalContainer = ({ onHide }) => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);

  const onChangeField = ({ type, key, value }) =>
    dispatch(changeField({ type, key, value }));
  const onInitialize = type => dispatch(initialize(type));

  return (
    <AuthModal
      auth={auth}
      onHide={onHide}
      onChangeField={onChangeField}
      onInitialize={onInitialize}
    />
  );
};

export default AuthModalContainer;
