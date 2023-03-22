import React from 'react';
import { HeadFC, navigate } from 'gatsby';
import Layout from '../Components/Layout';
import { getTextAsBig } from '../Utility/getTextAsBig';
import * as terminalStyles from '../styles/asciitext.module.css';
import * as notFoundStyles from '../styles/notfound.module.css';

const NotFoundPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          paddingTop: '5rem',
          flexDirection: 'column',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <pre className={terminalStyles.ascii}>{getTextAsBig('PAGE')}</pre>
        <pre
          className={terminalStyles.ascii}
          style={{ animationDelay: '0.5s' }}
        >
          {getTextAsBig('NOT')}
        </pre>
        <pre className={terminalStyles.ascii} style={{ animationDelay: '1s' }}>
          {getTextAsBig('FOUND')}
        </pre>
        <div>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className={notFoundStyles.buttonStyle}
          >
            {' '}
            <pre
              className={terminalStyles.ascii}
              style={{
                animationDelay: '2s',
                color: 'green',
                textDecoration: 'none',
              }}
            >
              {getTextAsBig('Go Back')}
            </pre>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
