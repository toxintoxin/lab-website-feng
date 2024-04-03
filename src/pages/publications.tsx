import React from 'react';
import Layout from '@theme/Layout';

export default function Publications() {
  return (
    <Layout title="Publications" description="Publications Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          paper 1<br></br>
          paper 2
        </p>
      </div>
    </Layout>
  );
}