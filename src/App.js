import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Template from './components/common/Template';
import TodoListPage from './pages/TodoListPage';
import TodoPage from './pages/TodoPage';
import Header from './components/common/Header';
import AuthModalContainer from './containers/AuthModalContainer';

function App() {
  const [authModal, setAuthModal] = useState(false);

  const onShow = () => setAuthModal(true);
  const onHide = () => setAuthModal(false);

  return (
    <Template>
      <Header onShow={onShow} />
      {authModal && <AuthModalContainer onHide={onHide} />}
      <Route component={TodoListPage} path={['/', '/todo']} exact />
      <Route component={TodoPage} path="/todo/:action" />
    </Template>
  );
}

export default App;
