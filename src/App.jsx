import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import File from './page/file/File'
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <File />

      </Layout>
    </div>

  );
}

export default App;
