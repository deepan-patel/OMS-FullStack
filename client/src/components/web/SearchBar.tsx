import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <InputGroup className="max-w-xs" >
            <InputGroupInput id="search" placeholder="Search..." />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
        </InputGroup>
    )
}