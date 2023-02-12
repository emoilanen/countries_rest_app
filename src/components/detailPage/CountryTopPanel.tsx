/* eslint-disable @typescript-eslint/member-delimiter-style */
import styled from '@emotion/styled';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

const Circle = styled.div`
  height: 45px;
  width: 45px;
  background-color: #f24133;
  border-radius: 50%;
  display: flex;
  color: white;
  font-size: 25px;
  align-content: center;
  justify-content: center;
  line-height: 40px;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-bottom: 50px;
`;

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountryName = styled.p`
  line-height: 0px;
  font-weight: bold;
  font-size: 1.2em;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const CapitalName = styled.p`
  line-height: 0px;
  font-size: 0.9em;
`;

const StyledIconButton = styled(IconButton)`
  justify-self: flex-end;
  margin-left: auto;
  margin-right: 0;
`;

export interface CountryTopPanelProps {
  country: string;
  capital: string;
}

const CountryTopPanel = ({ capital, country }: CountryTopPanelProps): JSX.Element => {
  return (
    <FlexRowContainer>
      <Circle>{country.slice(0, 1)}</Circle>
      <FlexColumnContainer>
        <CountryName>{country}</CountryName>
        <CapitalName>{capital}</CapitalName>
      </FlexColumnContainer>
      <StyledIconButton>
        <MoreVertIcon />
      </StyledIconButton>
    </FlexRowContainer>
  );
};

export default CountryTopPanel;
