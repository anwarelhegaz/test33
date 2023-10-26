
import "./ListFood.css"
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import AnimationObserver from '../AnimationObserver/AnimationObserver';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
// import SearchPage from "../SearchPage/SearchPage";

export default function ListFood() {

    const [category, setCategory] = useState('وجبات بابجي');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const [addedToCartItems, setAddedToCartItems] = useState([]);

    // const [isAddedToCart, setIsAddedToCart] = useState(false); // State to track if item is added to cart

    
    useEffect(() => {
        setLoading(true);
        setError(null);
        axios.get(`http://localhost:3005/items?category=${category}`)
            .then(response => {
                setItems(response.data);
                setLoading(false); // Set loading to false after fetching data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('حدث خطا اثناء التحميل برجاء اعاده تحميل الصفحه ...');
                setLoading(false); // Set loading to false even in case of an error
            });
        }, [category]);

        const handleAddToCart = (item) => {
            dispatch(addToCart(item));

            // setIsAddedToCart(true);

            // Add the item id to the addedToCartItems array
            setAddedToCartItems((prevItems) => [...prevItems, item.id]);

            // Reset the added-to-cart state after a short delay <An>
            setTimeout(() => {
                // setIsAddedToCart(false);
                setAddedToCartItems((prevItems) => prevItems.filter((id) => id !== item.id));
            }, 1000); // Adjust the delay as needed
        };

        

    return (

        <section className="list-food">
            <AnimationObserver />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="main-header scroll-scale">
                            <h3>
                                قائمة الطعام
                            </h3>
                        </div>
                    </div>
                    {loading && <p className="loading-list">جاري تحميل قائمه الطعام ...</p>}
                    {error && <p className="loading-list">{error}</p>}
                    <div className="col-xs-12">
                        <div className="col-xs-12">
                            {/* <ul className="nav-tabs scroll-scale ">
                                <li className={category === 'دجاج' ? 'active' : ''}><button onClick={() => setCategory('دجاج')}>الدجاج والارز</button></li>
                                <li className={category === 'لحوم' ? 'active' : ''}><button onClick={() => setCategory('لحوم')}>اللحوم</button></li>
                                <li className={category === 'مشويات' ? 'active' : ''}><button onClick={() => setCategory('مشويات')}>المشويات</button></li>
                                <li className={category === 'شعبي' ? 'active' : ''}><button onClick={() => setCategory('شعبي')}>الإيدامات والشعبيات</button></li>
                                <li className={category === 'اضافات' ? 'active' : ''}><button onClick={() => setCategory('اضافات')}>السلطات والمقبلا</button></li>
                                <li className={category === 'حلويات' ? 'active' : ''}><button onClick={() => setCategory('حلويات')}>الحلا والكنافة</button></li>
                                <li className={category === 'مشروبات' ? 'active' : ''}><button onClick={() => setCategory('مشروبات')}>المشروبات</button></li>
                            </ul> */}
                            <ul className="nav-tabs scroll-scale">
                                {['وجبات بابجي', 'وجبات بابجي العائلية', 'بابجي تشيكن ساندوتش', 'بيف برجر ساندوتش', 'بيتزا', 'الباستا','المخبوزات','اضافات', 'الحلويات', 'ميلك شيك','الكوفي الساخن', 'ايس فرابيتشينو' , 'ايس كيو بس' , 'اسموزي' ].map((cat) => (
                                    <li key={cat} className={category === cat ? 'active' : ''}>
                                        <button onClick={() => setCategory(cat)}>{cat}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-xs-12">
                                <div className="row">
                                    {items.map(item => (                         
                                        <div key={item.id} className = "super-box-pro col-xs-12 col-md-6 col-lg-4 ">
                                            <div className="cart-content">
                                                <button
                                                    // className={`add-cart-btn ${isAddedToCart ? 'added-to-cart' : ''}`}
                                                    className={`add-cart-btn ${addedToCartItems.includes(item.id) ? 'added-to-cart' : ''}`}
                                                    onClick={() => handleAddToCart(item)}
                                                >
                                                    <FaCartPlus />
                                                </button>
                                            </div>
                                            <Link to={`/view/${item.id}`}>
                                                    <div className={`box scroll-scale`} >
                                                        <div className="img-cont">
                                                            <img src={item.img} alt="img-food" />
                                                        </div>
                                                        <div className="details">
                                                            <div className="row">
                                                                <div className="col-md-7 col-xs-12">
                                                                    <div className="name-product">
                                                                        <h4>{item.name}</h4>
                                                                        <p>{item.bio}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-5 col-xs-12 text-center">
                                                                    <div className="price">
                                                                        <span>{item.price} ريال</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </Link>
                                            
                                        </div>
                                    ))}
                                </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="super text-center scroll-right">
                                <Link to="/list-food" className="btn-more ">
                                    <span>المزيد</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
