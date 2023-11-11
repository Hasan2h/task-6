import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

const NavBarSelect = () => {
    const [selected, setSelected] = useState("");
    return (
        <>
            <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                placeholder={<FontAwesomeIcon icon={faEarthAmericas} />}
                className="menu-flags"
            />
        </>
    )
}

export default NavBarSelect