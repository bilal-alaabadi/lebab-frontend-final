import React from 'react';
import { Link } from 'react-router-dom';
import timings from "../../assets/timings.png";

const Banner = () => {
    return (
<div className="section__container header__container bg-blue-50 py-8 px-4 sm:px-6 lg:px-8">
    <div className="header__content z-30 text-right">
        <h4 className="uppercase text-gray-700 text-sm sm:text-lg font-bold tracking-wider bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            أحدث صيحات الموضة
        </h4>
        <h2 className="text-gray-800 text-2xl sm:text-4xl font-bold mt-4 mb-6">
            أناقتك تبدأ هنا
        </h2>
        <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
            اكتشف أحدث الصيحات وعبر عن أسلوبك الفريد مع موقع موضة النساء. استكشف مجموعة مختارة من الملابس والإكسسوارات والأحذية التي تلبي كل الأذواق والمناسبات.
        </p>
        {/* زر يظهر فقط على شاشات الهاتف */}
        <button
            className="btn mt-6 text-purple-700 border-2 border-purple-700 px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-purple-700 hover:text-white transition duration-300 "
        >
            <Link to={`/shop/`} className="no-underline">اكتشف الآن</Link>
        </button>
    </div>
    <div className="header__image mt-8 sm:mt-0 hidden sm:block">
                <img
                    src={timings}
                    alt="صورة البانر"
                    className="w-full sm:w-auto max-w-full h-auto object-contain"
                />
            </div>
</div>
    );
};

export default Banner;