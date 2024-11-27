import { Button } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

const Search = (props) => {
    return(
        <div className="search d-flex align-items-center">
            <input type="text" placeholder="Search" className="input"/>
            <Button><IoIosSearch/></Button>
        </div>
    )
}

export default Search;