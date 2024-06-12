import { FC } from "react";
import PageSideMenu from "./page.sideMenu";
import PageMainMenu from "./page.mainMenu";

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper layout-content-navbar  ">
      <div className="layout-container">
        <PageSideMenu />
        <div className="layout-page">
          <PageMainMenu />
          {children}
        </div>
      </div>

      <div className="layout-overlay layout-menu-toggle"></div>

      <div className="drag-target"></div>
    </div>
  );
};

export default PageLayout;
