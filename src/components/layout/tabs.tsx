import { Tab, TabList, TabPanel, Tabs as ReactTabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';

export const Tabs = styled(({ children, ...props }) => (
  <ReactTabs {...props}>{children}</ReactTabs>
))`
  .react-tabs__tab {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ffffff1c;
    border-radius: 0;
    color: white;
    padding: 16px;
  }

  .react-tabs__tab--selected {
  }

  .react-tabs__tab--selected:after {
    content: '';
    position: absolute;
    height: 5px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #fff;
  }

  .react-tabs__tab-panel {
    padding: 20px 0px;
  }

  .react-tabs__tab-list {
    border: none;
  }
`;

export { Tab, TabList, TabPanel };
