// // Dashboard.jsx
// import  { useState } from 'react';
// import LoginForm from './LoginForm'; // Import the LoginForm component

// function Dashboard() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleLogin = (enteredUsername, enteredPassword) => {
//         // Replace this with actual JSON file data
//         const loginData = [
//         {
//             username: 'Ahmed',
//             password: 123456,
//         },
//         // Add more user data if needed
//         ];

//         // Check if the entered credentials match any user's data
//         const user = loginData.find(user => user.username === enteredUsername && user.password == enteredPassword);

//         if (user) {
//         setIsLoggedIn(true);
//         } else {
//         setIsLoggedIn(false);
//         console.log('Invalid credentials');
//         }
//     };

//     return (
//         <div>
//         {isLoggedIn ? (
//             <>
//             <h1>Welcome to the Dashboard, Admin</h1>
//             {/* Display your dashboard content here */}
//             </>
//         ) : (
//             <LoginForm onLogin={handleLogin} />
//         )}
//         </div>
//     );
// }

// export default Dashboard;

// const Dashboard = () => {
//     // Implement your add, edit, and remove logic here

//     return (
//         <div>
//             <h1>Admin Dashboard</h1>
//             <h1>IM Dashboard Man</h1>
//             {/* Render your dashboard components */}
//         </div>
//     );
// };

// export default Dashboard;

// import  { useState, useEffect } from 'react';

// const Dashboard = () => {
//     const [items, setItems] = useState([]);
//     const [newItem, setNewItem] = useState({});

//     useEffect(() => {
//         // Fetch the items from your JSON server when the component mounts
//         fetch('http://localhost:3005/items')
//         .then((response) => response.json())
//         .then((data) => setItems(data.items))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);

//     // Function to add a new item
//     const addItem = () => {
//         // Send a POST request to your JSON server with the new item
//         fetch('http://localhost:3005/items', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             setItems([...items, data]);
//             setNewItem({});
//         })
//         .catch((error) => console.error('Error adding item:', error));
//     };

//     // Function to remove an item
//     const removeItem = (id) => {
//         // Send a DELETE request to your JSON server to remove the item
//         fetch(`http://localhost:3005/items/${id}`, {
//         method: 'DELETE',
//         })
//         .then(() => setItems(items.filter((item) => item.id !== id)))
//         .catch((error) => console.error('Error removing item:', error));
//     };

//     // Function to edit an item
//     const editItem = (id, updatedItem) => {
//         // Send a PUT request to your JSON server to update the item
//         fetch(`http://localhost:3005/items/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedItem),
//         })
//         .then(() => {
//             // Update the edited item in the local state
//             setItems(items.map((item) => (item.id === id ? updatedItem : item)));
//             setEditedItem(null); // Reset the edited item state
//         })
//         .catch((error) => console.error('Error editing item:', error));
//     };

//     // Function to initiate item editing
//     const startEditingItem = (id) => {
//         // Find the item to edit by ID
//         const itemToEdit = items.find((item) => item.id === id);
//         if (itemToEdit) {
//         setEditedItem(itemToEdit);
//         }
//     };

//     // Function to cancel item editing
//     const cancelEditingItem = () => {
//         setEditedItem(null); // Reset the edited item state
//     };

//     return (
//         <div>
//         <h1>Dashboard</h1>
//         <div>
//             <h2>Add New Item</h2>
//             <input
//             type="text"
//             placeholder="Name"
//             value={newItem.name || ''}
//             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//             />
//             {/* Add more input fields for other item properties */}
//             <button onClick={addItem}>Add</button>
//         </div>
//         <div>
//             <h2>Items List</h2>
//             <ul>
//             {items.map((item) => (
//                 <li key={item.id}>
//                 {item.name} - {item.price}
//                 <button onClick={() => removeItem(item.id)}>Remove</button>
//                 {/* Implement editing controls here */}
//                 </li>
//             ))}
//             </ul>
//         </div>
//         </div>
//     );
// };

// export default Dashboard;


// import  { useState, useEffect } from 'react';

// const Dashboard = () => {
//     const [items, setItems] = useState([]);
//     const [newItem, setNewItem] = useState({});
//     const [editedItem, setEditedItem] = useState(null); // Store the currently edited item

//     useEffect(() => {
//         // Fetch the items from your JSON server when the component mounts
//         fetch('http://localhost:3005/items')
//         .then((response) => response.json())
//         .then((data) => setItems(data.items))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);

//     // Function to add a new item
//     const addItem = () => {
//         // Send a POST request to your JSON server with the new item
//         fetch('http://localhost:3005/items', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             setItems([...items, data]);
//             setNewItem({});
//         })
//         .catch((error) => console.error('Error adding item:', error));
//     };

//     // Function to remove an item
//     const removeItem = (id) => {
//         // Send a DELETE request to your JSON server to remove the item
//         fetch(`http://localhost:3005/items/${id}`, {
//         method: 'DELETE',
//         })
//         .then(() => setItems(items.filter((item) => item.id !== id)))
//         .catch((error) => console.error('Error removing item:', error));
//     };

//     // Function to edit an item
//     const editItem = (id, updatedItem) => {
//         // Send a PUT request to your JSON server to update the item
//         fetch(`http://localhost:3005/items/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedItem),
//         })
//         .then(() => {
//             // Update the edited item in the local state
//             setItems(items.map((item) => (item.id === id ? updatedItem : item)));
//             setEditedItem(null); // Reset the edited item state
//         })
//         .catch((error) => console.error('Error editing item:', error));
//     };

//     // Function to initiate item editing
//     const startEditingItem = (id) => {
//         // Find the item to edit by ID
//         const itemToEdit = items.find((item) => item.id === id);
//         if (itemToEdit) {
//         setEditedItem(itemToEdit);
//         }
//     };

//     // Function to cancel item editing
//     const cancelEditingItem = () => {
//         setEditedItem(null); // Reset the edited item state
//     };

//     return (
//         <div>
//         {/* ... (add and display items, similar to previous code) */}
//         <div>
//             <h2>Items List</h2>
//             <ul>
//             {items.map((item) => (
//                 <li key={item.id}>
//                 {item === editedItem ? (
//                     <div>
//                     {/* Render editing controls when editing */}
//                     {/* Update input fields and handle changes */}
//                     <input
//                         type="text"
//                         value={editedItem.name}
//                         onChange={(e) =>
//                         setEditedItem({
//                             ...editedItem,
//                             name: e.target.value,
//                         })
//                         }
//                     />
//                     {/* Add more input fields for other item properties */}
//                     <button onClick={() => editItem(editedItem.id, editedItem)}>
//                         Save
//                     </button>
//                     <button onClick={cancelEditingItem}>Cancel</button>
//                     </div>
//                 ) : (
//                     <div>
//                     {/* Display item details when not editing */}
//                     {item.name} - {item.price}
//                     <button onClick={() => removeItem(item.id)}>Remove</button>
//                     <button onClick={() => startEditingItem(item.id)}>Edit</button>
//                     </div>
//                 )}
//                 </li>
//             ))}
//             </ul>
//         </div>
//         </div>
//     );
// };

// export default Dashboard;




// import  { useState, useEffect } from 'react';

// const Dashboard = () => {
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState({});
//   const [editedItem, setEditedItem] = useState(null); // Store the currently edited item

//   useEffect(() => {
//     // Fetch the items from your JSON server when the component mounts
//     fetch('http://localhost:3005/items')
//       .then((response) => response.json())
//       .then((data) => setItems(data.items))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   // Function to add a new item
// const addItem = () => {
//     // Ensure newItem is defined and not empty
//     if (!newItem || Object.keys(newItem).length === 0) {
//       console.error('New item is empty or undefined.');
//       return;
//     }
  
//     // Send a POST request to your JSON server with the new item
//     fetch('http://localhost:3005/items', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newItem),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setItems([...items, data]);
//         setNewItem({}); // Clear newItem after adding
//       })
//       .catch((error) => console.error('Error adding item:', error));
//   };
//   // Function to remove an item
//   const removeItem = (id) => {
//     // Send a DELETE request to your JSON server to remove the item
//     fetch(`http://your-json-server-url/items/${id}`, {
//       method: 'DELETE',
//     })
//       .then(() => setItems(items.filter((item) => item.id !== id)))
//       .catch((error) => console.error('Error removing item:', error));
//   };

//   // Function to edit an item
//   const editItem = (id, updatedItem) => {
//     // Send a PUT request to your JSON server to update the item
//     fetch(`http://your-json-server-url/items/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedItem),
//     })
//       .then(() => {
//         // Update the edited item in the local state
//         setItems(items.map((item) => (item.id === id ? updatedItem : item)));
//         setEditedItem(null); // Reset the edited item state
//       })
//       .catch((error) => console.error('Error editing item:', error));
//   };

//   // Function to initiate item editing
//   const startEditingItem = (id) => {
//     // Find the item to edit by ID
//     const itemToEdit = items.find((item) => item.id === id);
//     if (itemToEdit) {
//       setEditedItem(itemToEdit);
//     }
//   };

//   // Function to cancel item editing
//   const cancelEditingItem = () => {
//     setEditedItem(null); // Reset the edited item state
//   };

//   return (
//     <div>
//       {/* ... (add and display items, similar to previous code) */}
//       <div>
//         <h2>Items List</h2>
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>
//               {item === editedItem ? (
//                 <div>
//                   {/* Render editing controls when editing */}
//                   {/* Update input fields and handle changes */}
//                   <input
//                     type="text"
//                     value={editedItem.name}
//                     onChange={(e) =>
//                       setEditedItem({
//                         ...editedItem,
//                         name: e.target.value,
//                       })
//                     }
//                   />
//                   {/* Add more input fields for other item properties */}
//                   <button onClick={() => editItem(editedItem.id, editedItem)}>
//                     Save
//                   </button>
//                   <button onClick={cancelEditingItem}>Cancel</button>
//                 </div>
//               ) : (
//                 <div>
//                   {/* Display item details when not editing */}
//                   {item.name} - {item.price}
//                   <button onClick={() => removeItem(item.id)}>Remove</button>
//                   <button onClick={() => startEditingItem(item.id)}>Edit</button>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import  { useState, useEffect } from 'react';

// const Dashboard = () => {
//     const [items, setItems] = useState([]);
//     const [newItem, setNewItem] = useState({
//         // Initialize newItem with default values
//         category: '',
//         name: '',
//         img: '',
//         price: '',
//         bio: '',
//     });
//     // const [editedItem, setEditedItem] = useState(null); // Store the currently edited item

//     useEffect(() => {
//         // Fetch the items from your JSON server when the component mounts
//         fetch('http://localhost:3005/items')
//         .then((response) => response.json())
//         .then((data) => setItems(data.items))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);

//     // Function to add a new item
//     const addItem = () => {
//         // Ensure newItem is defined and not empty
//         if (!newItem || Object.keys(newItem).length === 0) {
//         console.error('New item is empty or undefined.');
//         return;
//         }

//         // Send a POST request to your JSON server with the new item
//         fetch('http://localhost:3005/items', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             setItems([...items, data]);
//             setNewItem({
//             // Reset newItem to its initial state after adding
//             category: '',
//             name: '',
//             img: '',
//             price: '',
//             bio: '',
//             });
//         })
//         .catch((error) => console.error('Error adding item:', error));
//     };

//     // ... rest of your code

// //     // Function to remove an item
// //   const removeItem = (id) => {
// //     // Send a DELETE request to your JSON server to remove the item
// //     fetch(`http://localhost:3005/items/${id}`, {
// //       method: 'DELETE',
// //     })
// //       .then(() => setItems(items.filter((item) => item.id !== id)))
// //       .catch((error) => console.error('Error removing item:', error));
// //   };

// //   // Function to edit an item
// //   const editItem = (id, updatedItem) => {
// //     // Send a PUT request to your JSON server to update the item
// //     fetch(`http://localhost:3005/items/${id}`, {
// //       method: 'PUT',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(updatedItem),
// //     })
// //       .then(() => {
// //         // Update the edited item in the local state
// //         setItems(items.map((item) => (item.id === id ? updatedItem : item)));
// //         setEditedItem(null); // Reset the edited item state
// //       })
// //       .catch((error) => console.error('Error editing item:', error));
// //   };

// //   // Function to initiate item editing
// //   const startEditingItem = (id) => {
// //     // Find the item to edit by ID
// //     const itemToEdit = items.find((item) => item.id === id);
// //     if (itemToEdit) {
// //       setEditedItem(itemToEdit);
// //     }
// //   };

// //   // Function to cancel item editing
// //   const cancelEditingItem = () => {
// //     setEditedItem(null); // Reset the edited item state
// //   };
// /************************************************ */
// // const editItem = (id, updatedItem) => {
// //     // Send a PUT request to update the item on the server
// //     fetch(`http://localhost:3005/items/${id}`, {
// //       method: 'PUT',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(updatedItem),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         // Update the item in the local state
// //         const updatedItems = items.map((item) =>
// //           item.id === data.id ? data : item
// //         );
// //         setItems(updatedItems);
// //         setEditedItem(null); // Clear editing state
// //       })
// //       .catch((error) => console.error('Error updating item:', error));
// //   };

// //   const removeItem = (id) => {
// //     // Send a DELETE request to remove the item from the server
// //     fetch(`http://localhost:3005/items/${id}`, {
// //       method: 'DELETE',
// //     })
// //       .then(() => {
// //         // Remove the item from the local state
// //         const updatedItems = items.filter((item) => item.id !== id);
// //         setItems(updatedItems);
// //       })
// //       .catch((error) => console.error('Error deleting item:', error));
// //   };

//     return (
//         <div>
//         {/* ... (add and display items, similar to previous code) */}
//         <div>
//             <h2>Add New Item</h2>
//             {/* Input fields for adding items */}
//             <input
//             type="text"
//             placeholder="Category"
//             value={newItem.category}
//             onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
//             />
//             <input
//             type="text"
//             placeholder="Name"
//             value={newItem.name}
//             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//             />
//             <input
//             type="text"
//             placeholder="Image URL"
//             value={newItem.img}
//             onChange={(e) => setNewItem({ ...newItem, img: e.target.value })}
//             />
//             <input
//             type="text"
//             placeholder="Price"
//             value={newItem.price}
//             onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
//             />
//             <input
//             type="text"
//             placeholder="Bio"
//             value={newItem.bio}
//             onChange={(e) => setNewItem({ ...newItem, bio: e.target.value })}
//             />
//             <button onClick={addItem}>Add Item</button>
//         </div>
//         {/* ... (display items) */}
//         <div>
//         <h2>Items List</h2>
//         {/* <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item === editedItem ? (
//               <div>
//                 { Render editing controls when editing }
//                 { Update input fields and handle changes }
//                 <input
//                   type="text"
//                   value={editedItem.name}
//                   onChange={(e) =>
//                     setEditedItem({
//                       ...editedItem,
//                       name: e.target.value,
//                     })
//                   }
//                 />
//                 { Add more input fields for other item properties }
//                 <button onClick={() => editItem(editedItem.id, editedItem)}>
//                   Save
//                 </button>
//                 <button onClick={() => setEditedItem(null)}>Cancel</button>
//               </div>
//             ) : (
//               <div>
//                 { Display item details when not editing }
//                 {item.name} - {item.price}
//                 <button onClick={() => removeItem(item.id)}>Remove</button>
//                 <button onClick={() => setEditedItem(item)}>Edit</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul> */}
//         </div>
//         </div>
//     );
// };

// export default Dashboard;

/************************************ */
// import './Dashboard.css'
// import  { useState, useEffect } from 'react';
// import { AiFillEdit } from 'react-icons/ai';
// import { MdDeleteForever } from 'react-icons/md';

// import NewItemForm from '../NewItemForm/NewItemForm';

// const Dashboard = () => {
//     const [items, setItems] = useState([]); // Initialize as an empty array
//     const [isLoading, setIsLoading] = useState(true);
//     const [editedItemId, setEditedItemId] = useState(null); // Step 1: Manage the currently edited item
//     const [selectedCategory, setSelectedCategory] = useState("دجاج");

//     // Set the selected category when a category button is clicked
//     const handleCategoryClick = (category) => {
//       setSelectedCategory(category);
//     };

//     const addItem = (newItem) => {
//       // Send a POST request to your JSON server with the new item
//       fetch('http://localhost:3005/items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Use the spread operator to add the new item to the existing items array
//           setItems([...items, data]);
//         })
//         .catch((error) => console.error('Error adding item:', error));
//     };

//     // useEffect to setItems git data
//     useEffect(() => {
//       fetch('http://localhost:3005/items')
//         .then((response) => response.json())
//         .then((data) => {
//           setItems(data); // Assuming 'items' is an array in the response
//           setIsLoading(false); // Mark loading as complete
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false); // Mark loading as complete even in case of an error
//         });
//     }, []);
    
//     useEffect(() => {
//       // Fetch items based on the selected category
//       if (selectedCategory) {
//         fetch(`http://localhost:3005/items?category=${selectedCategory}`)
//           .then((response) => response.json())
//           .then((data) => {
//             setItems(data);
//             setIsLoading(false);
//           })
//           .catch((error) => {
//             console.error('Error fetching data:', error);
//             setIsLoading(false);
//           });
//       }
//     }, [selectedCategory]);
    
//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     /******* */
//     // Function to Remove item
//     const removeItem = (itemId) => {
//       fetch(`http://localhost:3005/items/${itemId}`, {
//         method: 'DELETE',
//       })
//         .then(() => {
//           // Remove the item from the items array
//           const updatedItems = items.filter((item) => item.id !== itemId);
//           setItems(updatedItems);
//         })
//         .catch((error) => console.error('Error deleting item:', error));
//     };

//     /************** */
//     // Function to Edit item
//     // Step 2: Function to enter "edit mode" for an item
//     const startEditingItem = (itemId) => {
//       setEditedItemId(itemId);
//     };

//     // Step 3 and 4: Render edit controls and update the item on save
//     const renderEditControls = (item) => {
//       if (item.id === editedItemId) {
//         return (
//           <div className='edit-input-container'>
//             <select
//             className="form-select py-2 my-3"
//             aria-label="Select Category"
//             value={item.category}
//             onChange={(e) => handleItemInputChange(item.id, 'category', e.target.value)}
//           >
//             <option value="popular">popular</option>
//             <option value="drinks">drinks</option>
//             <option value="chicken">chicken</option>
//             <option value="sweets">sweets</option>
//             <option value="salad">salad</option>
//             <option value="barbecue">barbecue</option>
//             <option value="meat">meat</option>
//           </select>
            
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='اسم المنتج'
//               value={item.name}
//               onChange={(e) => handleItemInputChange(item.id, 'name', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               value={item.price}
//               placeholder='سعر المنتج'
//               onChange={(e) => handleItemInputChange(item.id, 'price', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='نبزه تعريفية'
//               value={item.bio}
//               onChange={(e) => handleItemInputChange(item.id, 'bio', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='مصدر الصوره'
//               value={item.img}
//               onChange={(e) => handleItemInputChange(item.id, 'img', e.target.value)}
//             />
//             {/* Add more input fields for other properties */}
//             <button className="btn bg-success me-2 mb-1" onClick={() => saveEditedItem(item)}>حفظ</button>
//             <button className="btn bg-info" onClick={() => cancelEditingItem()}>الغاء</button>
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <button className="btn-icon bg-primary" onClick={() => startEditingItem(item.id)}><AiFillEdit /></button>
//           </div>
//         );
//       }
//     };

//       // Step 5: Function to exit "edit mode"
//       const cancelEditingItem = () => {
//         setEditedItemId(null);
//       };

//     // Function to update item property in state when editing
//     const handleItemInputChange = (itemId, property, value) => {
//       // Find the edited item and update the specified property
//       const updatedItems = items.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, [property]: value };
//         }
//         return item;
//       });
//       setItems(updatedItems);
//     };

//     // Function to save the edited item to the server
//     const saveEditedItem = (editedItem) => {
//       const itemId = editedItem.id;
//       // Update the item on the server
//       fetch(`http://localhost:3005/items/${itemId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedItem),
//       })
//         .then((response) => response.json())
//         .then(() => {
//           // Exit "edit mode" and reset the editedItemId
//           cancelEditingItem();
//         })
//         .catch((error) => console.error('Error updating item:', error));
//     };

//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     // Create an object to group items by category
//     const itemsByCategory = items.reduce((acc, item) => {
//       if (!acc[item.category]) {
//         acc[item.category] = [];
//       }
//       acc[item.category].push(item);
//       return acc;
//     }, {});

    
//     return (
//         <div className='dashboard'>
//           <div className="container">
//             {/* NewItemForm Component (addItem) */}
//             <NewItemForm onAddItem={addItem} />
//               <div className='list-food-dashboard'>
//                 <h2 className='title'>قائمة الطعام</h2>
//                 {/* Render a table for each category */}
//                 <ul className='nav-tabs'>
//                   <li className={selectedCategory === 'دجاج' ? 'active' : ''}><button onClick={() => handleCategoryClick('دجاج')}>الدجاج والارز</button></li>
//                   <li className={selectedCategory === 'لحوم' ? 'active' : ''}><button onClick={() => handleCategoryClick('لحوم')}>اللحوم</button></li>
//                   <li className={selectedCategory === 'مشويات' ? 'active' : ''}><button onClick={() => handleCategoryClick('مشويات')}>المشويات</button></li>
//                   <li className={selectedCategory === 'شعبي' ? 'active' : ''}><button onClick={() => handleCategoryClick('شعبي')}>الإيدامات والشعبيات</button></li>
//                   <li className={selectedCategory === 'اضافات' ? 'active' : ''}><button onClick={() => handleCategoryClick('اضافات')}>السلطات والمقبلا</button></li>
//                   <li className={selectedCategory === 'حلويات' ? 'active' : ''}><button onClick={() => handleCategoryClick('حلويات')}>الحلا والكنافة</button></li>
//                   <li className={selectedCategory === 'مشروبات' ? 'active' : ''}><button onClick={() => handleCategoryClick('مشروبات')}>المشروبات</button></li>
//                 </ul>
//                 {Object.entries(itemsByCategory).map(([category, itemsInCategory]) => (
//                   <div key={category}>
//                     <h3 className='categort-name' >{selectedCategory}</h3>
//                     <table className="table">
//                       <thead className="thead-dark">
//                         <tr className=''>
//                           <th scope="col">عدد</th>
//                           <th scope="col">الاسم</th>
//                           <th scope="col">السعر</th>
//                           <th scope="col">نبزه تعرفيه</th>
//                           <th scope="col">مصدر الصوره</th>
//                           <th scope="col">تعديل وحزف</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {itemsInCategory.map((item, index) => (
//                           <tr key={item.id} className=''>
//                             <th scope="row">{index + 1}</th>
//                             <td className='item-dash-name'>{item.name}</td>
//                             <td>{item.price}</td>
//                             <td className='item-bio'>{item.bio}</td>
//                             <td><img className='img-dashboard' src={item.img} alt="" /></td>
//                             <td className=''>
//                               {renderEditControls(item)}
//                               <button className="btn-icon bg-danger" onClick={() => removeItem(item.id)}> <MdDeleteForever /></button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//           </div>
//         </div>
//     );
// };

// export default Dashboard;

/**************************** Test And Categore Start********************************************************************** */
// import './Dashboard.css'
// import  { useState, useEffect } from 'react';
// import { AiFillEdit } from 'react-icons/ai';
// import { MdDeleteForever } from 'react-icons/md';

// import NewItemForm from '../NewItemForm/NewItemForm';

// const Dashboard = () => {
//     const [items, setItems] = useState([]); // Initialize as an empty array
//     const [isLoading, setIsLoading] = useState(true);
//     const [editedItemId, setEditedItemId] = useState(null); // Step 1: Manage the currently edited item
//     const [selectedCategory, setSelectedCategory] = useState("");

//     const [newCategory, setNewCategory] = useState([""]); // State to track the new category input


//     // Set the selected category when a category button is clicked
//     const handleCategoryClick = (category) => {
//       setSelectedCategory(category);
//     };

//     const addNewCategory = () => {
//       if (newCategory.trim() !== '') {
//         // Update the JSON server with the new category
//         fetch(`http://localhost:3005/items`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ category: newCategory }),
//         })
//           .then((response) => response.json())
//           .then(() => {
//             // Update the UI with the new category
//             setSelectedCategory(newCategory);
//             setNewCategory(newCategory);
//           })
//           .catch((error) => console.error('Error adding category:', error));
//       }
//     };


//     const addItem = (newItem) => {
//       // Send a POST request to your JSON server with the new item
//       fetch('http://localhost:3005/items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Use the spread operator to add the new item to the existing items array
//           setItems([...items, data]);
//         })
//         .catch((error) => console.error('Error adding item:', error));
//     };

//     // useEffect to setItems git data
//     useEffect(() => {
//       fetch('http://localhost:3005/items')
//         .then((response) => response.json())
//         .then((data) => {
//           setItems(data); // Assuming 'items' is an array in the response
//           setIsLoading(false); // Mark loading as complete
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//           setIsLoading(false); // Mark loading as complete even in case of an error
//         });
//     }, []);
    
//     useEffect(() => {
//       // Fetch items based on the selected category
//       if (selectedCategory) {
//         fetch(`http://localhost:3005/items?category=${selectedCategory}`)
//           .then((response) => response.json())
//           .then((data) => {
//             setItems(data);
//             setIsLoading(false);
//           })
//           .catch((error) => {
//             console.error('Error fetching data:', error);
//             setIsLoading(false);
//           });
//       }
//     }, [selectedCategory]);
    
//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     /******* */
//     // Function to Remove item
//     const removeItem = (itemId) => {
//       fetch(`http://localhost:3005/items/${itemId}`, {
//         method: 'DELETE',
//       })
//         .then(() => {
//           // Remove the item from the items array
//           const updatedItems = items.filter((item) => item.id !== itemId);
//           setItems(updatedItems);
//         })
//         .catch((error) => console.error('Error deleting item:', error));
//     };

//     /************** */
//     // Function to Edit item
//     // Step 2: Function to enter "edit mode" for an item
//     const startEditingItem = (itemId) => {
//       setEditedItemId(itemId);
//     };

//     // Step 3 and 4: Render edit controls and update the item on save
//     const renderEditControls = (item) => {
//       if (item.id === editedItemId) {
//         return (
//           <div className='edit-input-container'>
//             <select
//             className="form-select py-2 my-3"
//             aria-label="Select Category"
//             value={item.category}
//             onChange={(e) => handleItemInputChange(item.id, 'category', e.target.value)}
//           >
//             <option value="شعبي">popular</option>
//             <option value="مشروبات">drinks</option>
//             <option value="دجاج">chicken</option>
//             <option value="حلويات">sweets</option>
//             <option value="اضافات">salad</option>
//             <option value="مشويات">barbecue</option>
//             <option value="لحوم">meat</option>
//           </select>
            
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='اسم المنتج'
//               value={item.name}
//               onChange={(e) => handleItemInputChange(item.id, 'name', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               value={item.price}
//               placeholder='سعر المنتج'
//               onChange={(e) => handleItemInputChange(item.id, 'price', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='نبزه تعريفية'
//               value={item.bio}
//               onChange={(e) => handleItemInputChange(item.id, 'bio', e.target.value)}
//             />
//             <input
//               className="form-control py-2 my-3"
//               type="text"
//               placeholder='مصدر الصوره'
//               value={item.img}
//               onChange={(e) => handleItemInputChange(item.id, 'img', e.target.value)}
//             />
//             {/* Add more input fields for other properties */}
//             <button className="btn bg-success me-2 mb-1" onClick={() => saveEditedItem(item)}>حفظ</button>
//             <button className="btn bg-info" onClick={() => cancelEditingItem()}>الغاء</button>
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <button className="btn-icon bg-primary" onClick={() => startEditingItem(item.id)}><AiFillEdit /></button>
//           </div>
//         );
//       }
//     };

//       // Step 5: Function to exit "edit mode"
//       const cancelEditingItem = () => {
//         setEditedItemId(null);
//       };

//     // Function to update item property in state when editing
//     const handleItemInputChange = (itemId, property, value) => {
//       // Find the edited item and update the specified property
//       const updatedItems = items.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, [property]: value };
//         }
//         return item;
//       });
//       setItems(updatedItems);
//     };

//     // Function to save the edited item to the server
//     const saveEditedItem = (editedItem) => {
//       const itemId = editedItem.id;
//       // Update the item on the server
//       fetch(`http://localhost:3005/items/${itemId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedItem),
//       })
//         .then((response) => response.json())
//         .then(() => {
//           // Exit "edit mode" and reset the editedItemId
//           cancelEditingItem();
//         })
//         .catch((error) => console.error('Error updating item:', error));
//     };

//     const handleNewCategoryChange = (e) => {
//       setNewCategory(e.target.value);
//     };
  
//     // const addNewCategory = () => {
//     //   if (newCategory.trim() !== '') {
//     //     setSelectedCategory(newCategory);
//     //     setNewCategory(newCategory);
//     //   }
//     // };

//     if (isLoading) {
//       return <p className='loading-list-alert'>جاري التحميل ...</p>;
//     }

//     // Create an object to group items by category
//     const itemsByCategory = items.reduce((acc, item) => {
//       if (!acc[item.category]) {
//         acc[item.category] = [];
//       }
//       acc[item.category].push(item);
//       return acc;
//     }, {});

    
//     return (
//         <div className='dashboard'>
//           <div className="container">
//           <div className="add-category-content">
//             <input
//                 className='add-category'
//                 type="text"
//                 placeholder='اضافة قائمه'
//                 value={newCategory}
//                 onChange={handleNewCategoryChange}
//             />
//               <button onClick={addNewCategory}>اضافة قائمة</button>
//             </div>
//             {/* Pass selectedCategory to NewItemForm */}
//             <NewItemForm onAddItem={addItem} selectedCategory={selectedCategory} />
//               <div className='list-food-dashboard'>
//                 <h2 className='title'>قائمة الطعام</h2>
//                 {/* Render a table for each category */}
//                 <ul className='nav-tabs'>
//                 {['دجاج', 'لحوم', 'مشويات', 'شعبي', 'اضافات', 'حلويات', 'مشروبات', newCategory].map((category) => (
//                     <li key={category} className={selectedCategory === category ? 'active' : ''}>
//                       <button onClick={() => handleCategoryClick(category)}>{category}</button>
//                     </li>
//                   ))}
//                 </ul>
//                 {Object.entries(itemsByCategory).map(([category, itemsInCategory]) => (
//                   <div key={category}>
//                     <h3 className='categort-name' >{category}</h3>
//                     <table className="table">
//                       <thead className="thead-dark">
//                         <tr className=''>
//                           <th scope="col">عدد</th>
//                           <th scope="col">الاسم</th>
//                           <th scope="col">السعر</th>
//                           <th scope="col">نبزه تعرفيه</th>
//                           <th scope="col">مصدر الصوره</th>
//                           <th scope="col">تعديل وحزف</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {itemsInCategory.map((item, index) => (
//                           <tr key={item.id} className=''>
//                             <th scope="row">{index + 1}</th>
//                             <td className='item-dash-name'>{item.name}</td>
//                             <td>{item.price}</td>
//                             <td className='item-bio'>{item.bio}</td>
//                             <td><img className='img-dashboard' src={item.img} alt="" /></td>
//                             <td className=''>
//                               {renderEditControls(item)}
//                               <button className="btn-icon bg-danger" onClick={() => removeItem(item.id)}> <MdDeleteForever /></button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//           </div>
//         </div>
//     );
// };

// export default Dashboard;

/**************************** Test And Categore end********************************************************************** */



import './Dashboard.css'
import  { useState, useEffect } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

import NewItemForm from '../NewItemForm/NewItemForm';

const Dashboard = () => {
    const [items, setItems] = useState([]); // Initialize as an empty array
    const [isLoading, setIsLoading] = useState(true);
    const [editedItemId, setEditedItemId] = useState(null); // Step 1: Manage the currently edited item
    const [selectedCategory, setSelectedCategory] = useState("وجبات بابجي");

    // Set the selected category when a category button is clicked
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    const addItem = (newItem) => {
      // Send a POST request to your JSON server with the new item
      fetch('http://localhost:3005/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      })
        .then((response) => response.json())
        .then((data) => {
          // Use the spread operator to add the new item to the existing items array
          setItems([...items, data]);
        })
        .catch((error) => console.error('Error adding item:', error));
    };

    // useEffect to setItems git data
    useEffect(() => {
      fetch('http://localhost:3005/items')
        .then((response) => response.json())
        .then((data) => {
          setItems(data); // Assuming 'items' is an array in the response
          setIsLoading(false); // Mark loading as complete
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false); // Mark loading as complete even in case of an error
        });
    }, []);
    
    useEffect(() => {
      // Fetch items based on the selected category
      if (selectedCategory) {
        fetch(`http://localhost:3005/items?category=${selectedCategory}`)
          .then((response) => response.json())
          .then((data) => {
            setItems(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      }
    }, [selectedCategory]);
    
    if (isLoading) {
      return <p className='loading-list-alert'>جاري التحميل ...</p>;
    }

    /******* */
    // Function to Remove item
    const removeItem = (itemId) => {
      fetch(`http://localhost:3005/items/${itemId}`, {
        method: 'DELETE',
      })
        .then(() => {
          // Remove the item from the items array
          const updatedItems = items.filter((item) => item.id !== itemId);
          setItems(updatedItems);
        })
        .catch((error) => console.error('Error deleting item:', error));
    };

    /************** */
    // Function to Edit item
    // Step 2: Function to enter "edit mode" for an item
    const startEditingItem = (itemId) => {
      setEditedItemId(itemId);
    };

    // Step 3 and 4: Render edit controls and update the item on save
    const renderEditControls = (item) => {
      if (item.id === editedItemId) {
        return (
          <div className='edit-input-container'>
            <select
            className="form-select py-2 my-3"
            aria-label="Select Category"
            value={item.category}
            onChange={(e) => handleItemInputChange(item.id, 'category', e.target.value)}
          >
            <option value="وجبات بابجي">وجبات بابجي</option>
            <option value="وجبات بابجي العائلية">وجبات بابجي العائلية</option>
            <option value="بيف برجر ساندوتش">بيف برجر ساندوتش</option>
            <option value="مشويات">بيف برجر ساندوتش</option>
            <option value="بيتزا">بيتزا</option>
            <option value="الباستا">الباستا</option>
            <option value="مشروبات">مشروبات</option>
            <option value="اضافات">اضافات</option>
            <option value="حلويات">حلويات</option>
          </select>
            
            <input
              className="form-control py-2 my-3"
              type="text"
              placeholder='اسم المنتج'
              value={item.name}
              onChange={(e) => handleItemInputChange(item.id, 'name', e.target.value)}
            />
            <input
              className="form-control py-2 my-3"
              type="text"
              value={item.price}
              placeholder='سعر المنتج'
              onChange={(e) => handleItemInputChange(item.id, 'price', e.target.value)}
            />
            <input
              className="form-control py-2 my-3"
              type="text"
              placeholder='نبزه تعريفية'
              value={item.bio}
              onChange={(e) => handleItemInputChange(item.id, 'bio', e.target.value)}
            />
            <input
              className="form-control py-2 my-3"
              type="text"
              placeholder='مصدر الصوره'
              value={item.img}
              onChange={(e) => handleItemInputChange(item.id, 'img', e.target.value)}
            />
            {/* Add more input fields for other properties */}
            <button className="btn bg-success me-2 mb-1" onClick={() => saveEditedItem(item)}>حفظ</button>
            <button className="btn bg-info" onClick={() => cancelEditingItem()}>الغاء</button>
          </div>
        );
      } else {
        return (
          <div>
            <button className="btn-icon bg-primary" onClick={() => startEditingItem(item.id)}><AiFillEdit /></button>
          </div>
        );
      }
    };

      // Step 5: Function to exit "edit mode"
      const cancelEditingItem = () => {
        setEditedItemId(null);
      };

    // Function to update item property in state when editing
    const handleItemInputChange = (itemId, property, value) => {
      // Find the edited item and update the specified property
      const updatedItems = items.map((item) => {
        if (item.id === itemId) {
          return { ...item, [property]: value };
        }
        return item;
      });
      setItems(updatedItems);
    };

    // Function to save the edited item to the server
    const saveEditedItem = (editedItem) => {
      const itemId = editedItem.id;
      // Update the item on the server
      fetch(`http://localhost:3005/items/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedItem),
      })
        .then((response) => response.json())
        .then(() => {
          // Exit "edit mode" and reset the editedItemId
          cancelEditingItem();
        })
        .catch((error) => console.error('Error updating item:', error));
    };

    if (isLoading) {
      return <p className='loading-list-alert'>جاري التحميل ...</p>;
    }

    // Create an object to group items by category
    const itemsByCategory = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    
    return (
        <div className='dashboard'>
          <div className="container">
            {/* NewItemForm Component (addItem) */}
            <NewItemForm onAddItem={addItem} />
              <div className='list-food-dashboard'>
                <h2 className='title'>قائمة الطعام</h2>
                {/* Render a table for each category */}
                {/* <ul className='nav-tabs'>
                  <li className={selectedCategory === 'دجاج' ? 'active' : ''}><button onClick={() => handleCategoryClick('دجاج')}>الدجاج والارز</button></li>
                  <li className={selectedCategory === 'لحوم' ? 'active' : ''}><button onClick={() => handleCategoryClick('لحوم')}>اللحوم</button></li>
                  <li className={selectedCategory === 'مشويات' ? 'active' : ''}><button onClick={() => handleCategoryClick('مشويات')}>المشويات</button></li>
                  <li className={selectedCategory === 'شعبي' ? 'active' : ''}><button onClick={() => handleCategoryClick('شعبي')}>الإيدامات والشعبيات</button></li>
                  <li className={selectedCategory === 'اضافات' ? 'active' : ''}><button onClick={() => handleCategoryClick('اضافات')}>السلطات والمقبلا</button></li>
                  <li className={selectedCategory === 'حلويات' ? 'active' : ''}><button onClick={() => handleCategoryClick('حلويات')}>الحلا والكنافة</button></li>
                  <li className={selectedCategory === 'مشروبات' ? 'active' : ''}><button onClick={() => handleCategoryClick('مشروبات')}>المشروبات</button></li>
                </ul> */}
                <ul className='nav-tabs'>
                  {['وجبات بابجي', 'وجبات بابجي العائلية', 'بابجي تشيكن ساندوتش', 'بيف برجر ساندوتش', 'بيتزا', 'الباستا','المخبوزات','اضافات', 'الحلويات', 'ميلك شيك','الكوفي الساخن', 'ايس فرابيتشينو' , 'ايس كيو بس' , 'اسموزي' ].map((category) => (
                    <li key={category} className={selectedCategory === category ? 'active' : ''}>
                      <button onClick={() => handleCategoryClick(category)}>{category}</button>
                    </li>
                  ))}
                </ul>
                {Object.entries(itemsByCategory).map(([category, itemsInCategory]) => (
                  <div key={category}>
                    <h3 className='categort-name' >{selectedCategory}</h3>
                    <table className="table">
                      <thead className="thead-dark">
                        <tr className=''>
                          <th scope="col">عدد</th>
                          <th scope="col">الاسم</th>
                          <th scope="col">السعر</th>
                          <th scope="col">نبزه تعرفيه</th>
                          <th scope="col">مصدر الصوره</th>
                          <th scope="col">تعديل وحزف</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itemsInCategory.map((item, index) => (
                          <tr key={item.id} className=''>
                            <th scope="row">{index + 1}</th>
                            <td className='item-dash-name'>{item.name}</td>
                            <td>{item.price}</td>
                            <td className='item-bio'>{item.bio}</td>
                            <td><img className='img-dashboard' src={item.img} alt="" /></td>
                            <td className=''>
                              {renderEditControls(item)}
                              <button className="btn-icon bg-danger" onClick={() => removeItem(item.id)}> <MdDeleteForever /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
          </div>
        </div>
    );
};

export default Dashboard;



