import React from 'react'
import dealsImg from "../../assets/web-pic1-600x857 (1).png"
const DealsSection = () => {
  return (
    <section className='section__container deals__container bg-blue-50'>
        <div className='deals__image'>
            <img src={dealsImg} alt="" />
        </div>

        <div className='deals__content'>
            <h5 className='text-2xl font-bold text-gray-800'>احصل على خصم يصل إلى %20</h5>
            <h4>عروض هذا الشهر</h4>
            <p>عروض موضة الرجال العمانيين لهذا الشهر هنا لتحقيق أحلام أناقتك دون تكلفة باهظة. اكتشف مجموعة مختارة من الملابس التقليدية والعصرية، والإكسسوارات والأحذية، كلها مختارة بعناية لتعزيز خزانة ملابسك.</p>
            {/* <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4></h4>
                    <p></p>
                </div>
                <div className='deals__countdown__card'>
                    <h4></h4>
                    <p></p>
                </div>
                <div className='deals__countdown__card'>
                    <h4></h4>
                    <p></p>
                </div>
                <div className='deals__countdown__card'>
                    <h4></h4>
                    <p></p>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default DealsSection