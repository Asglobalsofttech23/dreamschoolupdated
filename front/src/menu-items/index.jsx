// project import
import dashboard from './dashboard';
import pages from './page';
import utilities from './utilities';
import studentdomains from './students';
import teacherdomains from './teacherdomai';
// import support from './support';
import department from './department';
import FeesDomain from './FeesDomai';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard,studentdomains,teacherdomains,FeesDomain, utilities,pages]
};

export default menuItems;
