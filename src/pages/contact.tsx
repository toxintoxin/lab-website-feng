import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="Contact" description="Contact Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          地址：上海市徐汇区岳阳路320号生命科学实验楼(近肇嘉浜路)　邮编：200031
        </p>
      </div>
    </Layout>
  );
}