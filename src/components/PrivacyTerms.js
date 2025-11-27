
import React, { useEffect } from 'react';
import { animatePrivacyTerms } from '@/utils/animations';

const PrivacyTerms = () => {
  useEffect(() => {
    animatePrivacyTerms();
  }, []);

  return (
    <section className='min-h-[900px] py-8 mb-6'>
      <div className="container mx-auto min-h-[900px] flex-col justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-col">
      <h2 className="subbtitle mb-2 lg:mb-5 privacy-title text-center">1. Information We Collect</h2>
      <p className="lead mb-5 lg:mb-10 privacy-content text-center"><span className='text-2xl lg:text-3xl font-semibold text-slate-600'>Personal Information:</span> We collect personal information when you voluntarily submit it to us. This includes your name, email address, phone number, and location data (city, state, country, zip code or pin code). You may provide us this information when you use our services or contact us directly.</p>
            <p className="lead mb-5 lg:mb-10 privacy-content"><span className='text-2xl lg:text-3xl font-semibold text-slate-600'>Usage Data:</span> We collect data about how our services are accessed and used. This Usage Data may include information such as your computer&apos;s Internet Protocol address (IP address), browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-col">
            <h2 className="subbtitle mb-2 lg:mb-5 privacy-title">2. Use of Information</h2>
            <p className="lead mb-5 lg:mb-10 privacy-content"><span className='text-2xl lg:text-3xl font-semibold text-slate-600'>The information we collect from you may be used in one of the following ways:</span><br/>• To personalize your experience (your information helps us to better respond to your individual needs)</p>
            <p className="lead mb-5 lg:mb-10 privacy-content">• To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)</p>
            <p className="lead mb-5 lg:mb-10 privacy-content">• To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)</p>
            <p className="lead mb-5 lg:mb-10 privacy-content">• To send periodic emails (the email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions)</p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-col">
            <h2 className="subbtitle mb-2 lg:mb-5 privacy-title">3. Information Protection</h2>
            <p className="lead mb-5 lg:mb-10 privacy-content">We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. Despite our efforts, no security measures are perfect or impenetrable.</p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-col">
            <h2 className="subbtitle mb-2 lg:mb-5 privacy-title">4. Sharing of Information</h2>
            <p className="lead mb-5 lg:mb-10 privacy-content">We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-col">
            <h2 className="subbtitle mb-2 lg:mb-5 privacy-title">5. Third-Party Services</h2>
            <p className="lead mb-5 lg:mb-10 privacy-content">Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. Therefore, we have no responsibility or liability for the content and activities of these linked sites.</p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-col">
            <h2 className="subbtitle mb-2 lg:mb-5 privacy-title">6. Changes to Our Privacy Policy</h2>
            <p className="lead mb-5 lg:mb-10 privacy-content">If we decide to change our privacy policy, we will post those changes on this page, and/or update the Privacy Policy modification date below. </p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-col">
            <h2 className="subbtitle mb-2 lg:mb-5 privacy-title">7. Contacting Us</h2>
            <p className="lead mb-5 lg:mb-10 privacy-content">If there are any questions regarding this privacy policy, you may contact us using the mail : privacy@systrocode.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyTerms