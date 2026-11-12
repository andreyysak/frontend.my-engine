import './index.scss'
import logo from '@/shared/assets/img/logo.png'
import {
  FuelIcon,
  MaintenanceIcon,
  GarageIcon,
  SearchIcon,
  SettingsIcon,
} from '@shared/components/ui/icons.tsx'

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
        <a href="#">
          <FuelIcon />
          Fuel
        </a>
        <a href="#">
          <MaintenanceIcon />
          Maintenance
        </a>
        <a href="#">
          <GarageIcon />
          Maintenance
        </a>
      </nav>

      <div className="header__actions">
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search in system" />
        </div>
        <a href="#" className="header__link">
          <SettingsIcon />
        </a>
        <a href="#" className="header__profile">
          AS
        </a>
      </div>
    </header>
  )
}
