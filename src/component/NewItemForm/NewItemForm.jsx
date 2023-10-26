    // NewItemForm.js
    import  { useState } from 'react';
    import "./NewItemForm.css"

    // eslint-disable-next-line react/prop-types
    const NewItemForm = ({ onAddItem}) => {
    const [newItem, setNewItem] = useState({
        category: '', // Set the default category to the selected category
        name: '',
        img: '',
        price: '',
        bio: '',
    });

    const handleInputChange = (property, value) => {
        setNewItem({ ...newItem, [property]: value });
    };

    // Function to add a new item
    const addItem = () => {
        // Validate and add the item
        if (!newItem || Object.values(newItem).some((value) => !value.trim())) {
        console.error('New item is empty or has empty fields.');
        return;
        }

        onAddItem(newItem);
        setNewItem({
        category: '',
        name: '',
        img: '',
        price: '',
        bio: '',
        });
    };    

    return (
        <div>
        <h2 className='title-add-pro'>اضافه منتج</h2>
        <select
            className="form-select py-2 my-3"
            aria-label="Select Category"
            value={newItem.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
        >
            <option value="" disabled>
                اختر الفئة
            </option>
            <option value="وجبات بابجي">وجبات بابجي</option>
            <option value="وجبات بابجي العائلية">وجبات بابجي العائلية</option>
            <option value="بابجي تشيكن ساندوتش">بابجي تشيكن ساندوتش</option>
            <option value="بيف برجر ساندوتش">بيف برجر ساندوتش</option>
            <option value="بيتزا">بيتزا</option>
            <option value="الباستا">الباستا</option>
            <option value="المخبوزات">المخبوزات</option>
            <option value="اضافات">اضافات</option>
            <option value="الحلويات">الحلويات</option>
            <option value="ميلك شيك">ميلك شيك</option>
            <option value="الكوفي الساخن">الكوفي الساخن</option>
            <option value="ايس فرابيتشينو">ايس فرابيتشينو</option>
            <option value="ايس كيو بس">ايس كيو بس</option>
            <option value="اسموزي">اسموزي</option>
        </select>
        <input
            className="form-control py-2 my-3"
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
        />
        <input
            className="form-control py-2 my-3"
            type="text"
            placeholder="Image URL"
            value={newItem.img}
            onChange={(e) => handleInputChange('img', e.target.value)}
        />
        <input
            className="form-control py-2 my-3"
            type="text"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
        />
        <input
            className="form-control py-2 my-3"
            type="text"
            placeholder="Bio"
            value={newItem.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
        />
        <button className='btn bg-success' onClick={addItem}>اضافه</button>
        </div>
    );
    };

    export default NewItemForm;