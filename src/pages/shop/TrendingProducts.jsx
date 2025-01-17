import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../../components/RatingStars';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(4);
    const dispatch = useDispatch();

    // جلب البيانات من الخادم
    const { data: { products = [], totalPages, totalProducts } = {}, error, isLoading } = useFetchAllProductsQuery({
        category: '',
        color: '',
        minPrice: '',
        maxPrice: '',
        page: 1,
        limit: 20, // يمكن تغيير الحد الأقصى حسب الحاجة
    });

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const loadMoreProducts = () => {
        setVisibleProducts((prevCount) => prevCount + 4);
    };

    if (isLoading) {
        return <div className="text-center py-8">جاري التحميل...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">حدث خطأ أثناء جلب البيانات.</div>;
    }

    return (
        <section className="section__container product__container">
            <h2 className="section__header text-3xl font-bold text-gray-800 mb-4">
                المنتجات الجديده
            </h2>
            <p className="section__subheader text-lg text-gray-600 mb-12">
                اكتشف أحدث الصيحات: رفع مستوى أناقتك مع مجموعتنا المختارة من منتجات موضة الرجاليه الرائجة.
            </p>

            {/* Product Cards */}
            <div className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.slice(0, visibleProducts).map((product) => (
                        <div key={product._id} className="product__card">
                            <div className="relative">
                                <Link to={`/shop/${product._id}`}>
                                    <img
                                        src={product.image[0]} // عرض الصورة الأولى من المصفوفة
                                        alt="product image"
                                        className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/300"; // صورة بديلة في حالة الخطأ
                                            e.target.alt = "Image not found";
                                        }}
                                    />
                                </Link>

                                {/* <div className="hover:block absolute top-3 right-3">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddToCart(product);
                                        }}
                                        className="bg-primary p-1.5 text-white hover:bg-primary-dark rounded-full"
                                    >
                                        <i className="ri-shopping-cart-2-line"></i>
                                    </button>
                                </div> */}
                            </div>

                            {/* Product Description */}
                            <div className="product__card__content text-center mt-4">
                                <h4 className="text-lg font-semibold">{product.name}</h4>
                                <p className="text-primary mt-2">
                                    ر.ع{product.price}
                                    {product.oldPrice && (
                                        <s className="text-gray-500 ml-2">ر.ع{product.oldPrice}</s>
                                    )}
                                </p>
                                <RatingStars rating={product.rating} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Load More Products Button */}
            <div className="product__btn text-center mt-8">
                {visibleProducts < products.length && (
                    <button className="btn bg-primary text-white px-6 py-2 rounded-md" onClick={loadMoreProducts}>
                        عرض المزيد
                    </button>
                )}
            </div>
        </section>
    );
};

export default TrendingProducts;