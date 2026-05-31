import { NavLink } from 'react-router-dom';
import { FiCreditCard, FiHome, FiList, FiPlusCircle } from 'react-icons/fi';
import ThemePicker from './ThemePicker';

const navLinks = [
  { to: '/', label: 'Dashboard', icon: FiHome, end: true },
  { to: '/expenses', label: 'Expenses', icon: FiList },
  { to: '/add', label: 'Add Expense', icon: FiPlusCircle },
];

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        <FiCreditCard className="navbar__brand-icon" />
        <span>Expense Tracker</span>
      </NavLink>

      <div className="navbar__links">
        {navLinks.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            <Icon />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>

      <ThemePicker />
    </nav>
  );
}

export default Navbar;
