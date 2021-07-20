import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-radius: 5px;
    --main-padding: 16px;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.text};
    font-family: 'Manrope', sans-serif;
    transition: all 0.50s linear;
    height: 100vh;
  }
  //SIDEBAR
  .pro-sidebar {
    height: 92vh;
  }
  
  .pro-sidebar > .pro-sidebar-inner {
    background: ${({ theme }: any) => theme.background} !important;
    color: ${({ theme }: any) => theme.text};
    transition: all 0.50s linear;
  }

  .pro-sidebar .pro-menu .pro-menu-item.active {
    border-radius: 4px;
    background: ${({ theme }: any) => theme.hoverColor} !important;
    .pro-item-content {
      color: ${({ theme }: any) => theme.text} !important;
    }
    /* padding: 12px; */
  }

  .pro-sidebar .pro-menu {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .menu-content {
    padding: 0 24px;
    display: flex !important;
    height: 60%;
    flex-direction: column;
    justify-content: space-between;
    span {
      color: ${({ theme }: any) => theme.primaryColor};
    }
    p {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 12px;
      color: ${({ theme }: any) => theme.greyText} !important;    
    }
    .download > p {
      margin-left: 12px !important;
      margin-bottom: 0px;
      color: ${({ theme }: any) => theme.text} !important;
    }
  }

  .crypto {
    flex-direction: row;
    display: flex;
    margin-top: 24px;
    margin-bottom: 16px;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      img {
        margin-right: 5px;
      }
    }
  }
  
  .slash {
    width: 12px;
    height: 18px;
  }

  .download {
    background: ${({ theme }: any) => theme.background} !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #EBEAED;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 12px 16px;
    border: 1px solid #EBEAED;
    margin: 16px 0;
  }

  h3 {
    margin-bottom: 12px;
  }
  .mobile-header {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin: 16px;
  }

  .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout .pro-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    border-bottom: 0px;
    margin-bottom: 32px;
  }
  .pro-sidebar-inner {
    padding: 0px 12px;
  }
  .container {
    display: grid;
    height: 100vh;
    grid-template-columns: 0.4fr 1.3fr 1.3fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 3fr;
    grid-template-areas:
        "nav nav nav"
        "sidebar main main"
        "sidebar content1 content2"
        "sidebar content3 content4";
    grid-gap: 16px;
    width: 100vw;
    padding-right: 32px;
    padding-top: 16px;
  }

  #main {
    grid-area: main;
  }

  #nav {
    grid-area: nav;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    .logo {
      width: 160px;
      height: 36px;
    }
    .notification {
      width: 28px;
      height: 28px;
    }
  }

  #sidebar {
    grid-area: sidebar;
    border-radius: var(--main-radius);
  }

  #content1 {
    grid-area: content1;
    padding: 16px;
    width: 100%;
    height: 100%;
    border-radius: var(--main-radius);
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12));
    box-shadow: 0px 1px 3px 0px #0000001F;
  }

  #content2 {
    padding: 16px;
    grid-area: content2;
    border-radius: var(--main-radius);
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12));
    box-shadow: 0px 1px 3px 0px #0000001F;
  }

  #content3 {
    grid-area: content3;
    padding: 16px;
    border-radius: var(--main-radius);
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12));
    box-shadow: 0px 1px 3px 0px #0000001F;
    max-height: 300px;
  }

  #content4 {
    padding: 16px;
    grid-area: content4;
    border-radius: var(--main-radius);
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12));
    box-shadow: 0px 1px 3px 0px #0000001F;
    max-height: 300px;
  } 

  .screen-title {
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    margin-bottom: 20px;
  }

  .info-card {
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12));
    box-shadow: 0px 1px 3px 0px #0000001F;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    div {
      padding: 31px 68px 16px 31px;
      .title {
        font-weight: 500;
        font-size: 14px;
        color: ${({ theme }: any) => theme.greyText} !important;    
        line-height: 20px;
      }
      .sub-title {
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }

  table {
    td:first-child {
      color: ${({ theme }: any) => theme.primaryColor} !important;    
    }
    width: 100%;
    border-collapse: separate;
    border-spacing: 16px; 
    color: ${({ theme }: any) => theme.greyText} !important;    
    thead {
      text-align: left;
      padding: 7px 0;
      tr {
        border-top: 1pt solid #EBEAED;
        border-bottom: 1pt solid #EBEAED;
      }
    }
    tbody {
      vertical-align: top;
    }
  }



  @media only screen and (max-width: 550px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-areas:
      "nav"
      "main"
      "content1"
      "content2"
      "content3"
      "content4";
      padding: 16px;
    }
    #nav {
    padding: 0;
  }
  .info-card {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    div {
      width: 100%;
      border-bottom: 1px solid  #EBEAED;
    }
  }
  }

 
  `;
