import { categories } from "@/utils/contents";
import './style.css';
import Button from '@mui/material/Button';

const Sidebar = () => {
    return (
        <div className="sidebar">
            {
                categories?.map((category, index) => {
                    return (
                        <Button key={index}>
                            <span className="icon">{category.icon}</span>
                            {category.name}
                        </Button>
                    )
                })
            }
        </div>
    )
}

export default Sidebar;