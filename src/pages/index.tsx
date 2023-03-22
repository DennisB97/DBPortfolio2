import React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../Components/Layout';
import TerminalLayout from '../Components/2D/TerminalLayout';
import PromptBox from '../Components/PromtBox';
import { navigate } from 'gatsby';

const IndexPage = () => {
  function changePage(buttonID: number): void {
    let toPage: string = buttonID === 0 ? `/2DHome/` : `/3DHome/`;
    navigate(toPage);
  }

  return (
    <Layout>
      <TerminalLayout
        asciiPreText={`Booting`}
        asciiPreTextDetail={`. . .`}
        bAsciiClock={true}
      />
      <PromptBox
        descriptionText={'Choose the site version you want to visit.'}
        buttonOneText={'Normal'}
        buttonTwoText={`3D \n (in development)`}
        buttonTwoTextStyling={{ opacity: '0.6', cursor: 'not-allowed' }}
        buttonOneClickFunction={changePage}
        // buttonTwoClickFunction={this.changePage}
      ></PromptBox>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Site Type Selector</title>;
