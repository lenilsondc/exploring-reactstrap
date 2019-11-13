import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100%;
`;

export const Logo = styled.div`
  padding: 0.5rem 1rem;
  font-size: 24px;
  color: #fafafa;
  text-align: center;
  margin-bottom: 30px;
`;

export const Sidebar = styled.div.attrs(_ => ({
  className: "text-light bg-dark"
}))`
  width: 250px;

  .nav-link {
    color: #f0f0f0;
  }

  .nav-link:hover {
    color: #fafafa;
  }

  .nav-link .react-icon {
    margin-right: 10px;
    margin-bottom: 4px;
  }
`;

export const Main = styled.div`
  flex: 1;

  .dropdown-item .react-icon {
    margin-right: 5px;
  }
`;

export const MainContent = styled.div.attrs(_ => ({
  className: "py-4 pl-5 pr-4"
}))`
  flex: 1;
`;
