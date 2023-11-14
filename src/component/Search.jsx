import { InputBase, Box, styled} from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchContainer = styled(Box)`
  background: #f5f5f5;
  width: 35%;
  border-radius: px;
  margin-Right: 10px;
  display: flex;
  
`;

const InputContainer = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <Search style={{color:"grey"}}/>
      </SearchIconWrapper>
      <InputContainer placeholder="Search for products and more" />
    </SearchContainer>
  );
};

export default SearchBar;
