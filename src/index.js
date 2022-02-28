import React from 'react';
import ReactDOM from 'react-dom';
import { JournalApp } from './JournalApp';
import { AppRouter } from './routers/AppRouter';
import './styles/styles.scss'


ReactDOM.render(
  <AppRouter>
     <JournalApp />
  </AppRouter>,
  document.getElementById('root')
);
