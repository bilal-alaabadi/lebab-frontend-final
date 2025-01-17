import React from 'react'



const Footer = () => {
    return (
        <>
<footer className='section__container footer__container  '>
    <div className='footer__col'>
        <h4 className='text-xl font-bold text-gray-800 mb-4'>معلومات الاتصال</h4>
        <p className='text-gray-600 flex items-center gap-2'>
            <span><i className="ri-map-pin-2-fill text-primary"></i></span>
            عمان
        </p>
        <p className='text-gray-600 flex items-center gap-2'>
            <span><i className="ri-mail-fill text-primary"></i></span>
            support@.com
        </p>
        <p className='text-gray-600 flex items-center gap-2'>
            <span><i className="ri-phone-fill text-primary"></i></span>
            (+968) 77423855
        </p>
    </div>

    <div className='footer__col'>
        <h4 className='text-xl font-bold text-gray-800 mb-4'>الشركة</h4>
        <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>الرئيسية</a>
        <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>من نحن</a>
        <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>العمل معنا</a>
        <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>مدوناتنا</a>
        <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>الشروط والأحكام</a>
    </div>

    <div className='footer__col'>
        <h4 className='text-xl font-bold text-gray-800 mb-4'>روابط مفيدة</h4>
        <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>مساعدة</a>
        <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>تتبع طلبك</a>
        <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>رجالي</a>
        <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'></a>
        <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'></a>
    </div>

    <div className='footer__col'>
        <h4 className='text-xl font-bold text-gray-800 mb-4'>الحسابات</h4>
        <div className='instagram__grid grid grid-cols-3 gap-2'>
        </div>
    </div>
</footer>

<div className='footer__bar bg-gray-800 text-white text-center py-4'>
    حقوق النشر © 2025 بواسطة. جميع الحقوق محفوظة.
</div>
        </>
    )
}

export default Footer