// import React, { useState } from 'react';
// import ModalLogin from './authorized/ModalLogin';
// import ModalRegistration from './authorized/ModalRegistration';
// import { Link, NavBlock } from './Nav.styled';

// export const Nav = () => {
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showRegistrationModal, setShowRegistrationModal] = useState(false);

//   const handleLoginClick = () => {
//     setShowLoginModal(true);
//   };

//   const handleRegistrationClick = () => {
//     setShowRegistrationModal(true);
//   };

//   return (
//     <nav>
//       {console.log("NavBlock - 1")}
//       <NavBlock>
//         <li>
//           <Link to="/" activeClassName="active">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/catalog" activeClassName="active">
//             Nannies
//           </Link>
//         </li>
//       </NavBlock>
//       {showLoginModal && (
//         <ModalLogin handleClose={() => setShowLoginModal(false)} />
//       )}
//       {showRegistrationModal && (
//         <ModalRegistration
//           handleClose={() => setShowRegistrationModal(false)}
//         />
//       )}
//     </nav>
//   );
// };

// export default Nav;


import React from 'react';

import { Link, NavBlock } from './Nav.styled';

export const Nav = () => {
  

  return (
    <nav>
      {console.log("NavBlock - 1")}
      <NavBlock>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/catalog" activeClassName="active">
            Nannies
          </Link>
        </li>
      </NavBlock>
      
    </nav>
  );
};

export default Nav;