// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import './SearchPage.css';
// import axios from 'axios';

// const SearchPage = ({ isOpen, closeSearch, items }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredItems, setFilteredItems] = useState([])  ;
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     axios
//       .get(`https://food-list.onrender.com/items?category=all`)
//       .then((response) => {
//         setFilteredItems(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again.');
//         setLoading(false);
//       });
//   }, [isOpen]);

//   const filterItems = (query) => {
//     const filtered = items.filter((item) => item.name.includes(query));
//     setFilteredItems(filtered);
//   };

//   return (
//     <>
//       {isOpen && (
//         <section className="search-section">
//           <div className="search-contant">
//             <input
//               type="search"
//               placeholder="ابحث ..."
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 filterItems(e.target.value);
//               }}
//             />

//             {/* Display filtered items */}
//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             {filteredItems.map((item) => (
//               <div key={item.id}>
//                 <h2>{item.name}</h2>
//                 <img src={item.img} alt={item.name} />
//                 {/* <div dangerouslySetInnerHTML={{ __html: item.bio }} /> */}
//               </div>
//             ))}

//             {/* Start btn Close ****************************** */}
//             <div className="close-sidbar close-search" onClick={closeSearch}>
//               <span className="circel-h"></span>
//               <span className="close-sidebar"></span>
//               <span>إغلاق</span>
//             </div>
//             {/* End btn Close ****************************** */}
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// SearchPage.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   closeSearch: PropTypes.func.isRequired,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       img: PropTypes.string.isRequired,
//       bio: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default SearchPage;
/***************************************************************** */

import './SearchPage.css';
import PropTypes from 'prop-types';


const SearchPage = ({ isOpen, closeSearch }) => {


  return (
    <>
      {isOpen && (
        <section className="search-section">
          <div className="search-contant">
          <input
              type="search"
              placeholder="ابحث ..."
            />
            
            {/* Display filtered items */}
            

            {/* Start btn Close ****************************** */}
            <div className="close-sidbar close-search" onClick={closeSearch}>
              <span className="circel-h"></span>
              <span className="close-sidebar"></span>
              <span>إغلاق</span>
            </div>
            {/* End btn Close ****************************** */}
          </div>
        </section>
      )}
    </>
  );
};

SearchPage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired,
};
export default SearchPage;