import React from 'react';
import { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, 
    DropdownToggle } from 'reactstrap';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(null);
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const resetTheme = () => {
        setTheme(null);
    };

    const themeClass = theme ? theme.toLowerCase() : 'secondary';

    return (
        <div className='mb-2'>
            <div className={`text-capitalize hi mb-4 w-100 text-center text-${theme ? theme.toLowerCase() : 'secondary'}`}>
                {`${theme || 'Default'} Theme`}
            </div>
           <div className='d-flex justify-content-center p-5'>
            <Dropdown isOpen={dropdownOpen} toggle={() => setdropdownOpen(!dropdownOpen)}>
                <DropdownToggle color={theme} caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => setTheme('primary')}>Primary Theme</DropdownItem>
                    <DropdownItem onClick={() => setTheme('danger')}>Danger Theme</DropdownItem>
                    <DropdownItem onClick={() => setTheme('success')}>Success Theme</DropdownItem>
                    <DropdownItem onClick={() => setTheme('crdr')}>crdr Theme</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={resetTheme}>Default Theme</DropdownItem>
                </DropdownMenu>
            </Dropdown>
           </div>
        </div>
    );
};

export default ThemeSwitcher;