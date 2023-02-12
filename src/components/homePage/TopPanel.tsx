/* eslint-disable @typescript-eslint/member-delimiter-style */
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SearchField from './SearchField';

const Panel = styled.div`
  width: 100%;
  height: 3em;
  background-color: #1776d2;
  margin: auto;
  display: flex;
  align-items: center;
  color: #fff;
  flex-direction: row;
`;

const LeftSide = styled.div`
  display: flex;
  gap: 15px;
  color: #fff;
  padding-left: 10px;
`;

const RightSide = styled.div`
  margin-left: auto;
  margin-right: 0;
  padding-right: 20px;
`;

const StyledIconButton = styled(IconButton)`
  color: #fff;
`;

const TopPanel = (): JSX.Element => {
  return (
    <>
      <Panel>
        <LeftSide>
          <StyledIconButton>
            <MenuIcon />
          </StyledIconButton>
          <p>Country</p>
        </LeftSide>
        <RightSide>
          <SearchField />
        </RightSide>
      </Panel>
    </>
  );
};

export default TopPanel;
