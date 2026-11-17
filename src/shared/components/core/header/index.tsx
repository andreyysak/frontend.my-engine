import './index.scss'
import logo from '@/shared/assets/img/logo.png'
import {
  FuelIcon,
  MaintenanceIcon,
  GarageIcon,
  SearchIcon,
  SettingsIcon,
} from '@shared/components/ui/icons.tsx'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-img" src={logo} alt="My Engine logo" />
        <span className="header__logo-title">
          My <span className="header__logo-accent">Engine</span>
        </span>
      </div>

      <nav className="header__navigation">
        <NavLink to="/fuel">
          <FuelIcon />
          Fuel
        </NavLink>
        <NavLink to="/maintenance">
          <MaintenanceIcon />
          Maintenance
        </NavLink>
        <NavLink to="/garage">
          <GarageIcon />
          Garage
        </NavLink>
      </nav>

      <div className="header__actions">
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search in system" />
        </div>
        <NavLink to="/settings" className="header__link">
          <SettingsIcon />
        </NavLink>
        <a href="#" className="header__profile">
          AS
        </a>
      </div>
    </header>
  )
}
