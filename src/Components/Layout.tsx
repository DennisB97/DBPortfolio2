import * as React from "react";
import {ReactNode} from "react";
import * as styles from "../styles/layout.module.css";
import {createGlobalStyle} from "styled-components";
import styled from "styled-components"


const Global = createGlobalStyle`
html,
body,
#___gatsby,
#gatsby-focus-wrapper{
    margin: 0;
    padding: 0;
    height: 100%;
    overflow:hidden;
    font-family: 'Roboto Slab'
    box-sizing: border-box;
}
`
const RootDiv = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

interface LayoutProps {
    children: ReactNode
  }

const LayoutPage  = ({children} : LayoutProps) =>{

return(
  <RootDiv>
<Global/>
<div className={styles.mainBorder}>
<div className={styles.mainBorderDetail}/>
</div>
<div className={styles.glassLayer}/>
<div className={styles.outerBody}>
<div className={styles.innerBody}>
{children}
</div>
</div>
</RootDiv>
)
}

export default LayoutPage