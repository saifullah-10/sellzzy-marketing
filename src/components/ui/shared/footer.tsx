import Link from 'next/link';

const Footer = () => {
  return (
    <>
        <footer className="mt-10 bg-[#FAFAFB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className=" w-full mb-10 sm:hidden">
                    <div className="flex my-4 items-center">
                        <Link href="/" className="hover:opacity-70 transition-opacity">
                            <svg width="88" height="32" viewBox="0 0 88 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4133_13647)">
                                <path d="M5.0319 23.1176C1.13853 23.1176 0 22.4297 0 22.4297L0.18552 19.0649C0.18552 19.0649 2.48884 19.9129 5.19116 19.9129C6.7524 19.9129 7.4428 19.4622 7.4428 18.6939C7.4428 17.9798 6.67531 17.7409 5.29705 17.635C1.42994 17.3699 0 16.1771 0 13.7679C0 10.0321 3.91878 9.60938 5.48257 9.60938C9.21837 9.60938 10.3289 10.3515 10.3289 10.3515L10.1172 13.7137C9.53519 13.3172 6.88625 12.7861 5.71976 12.814C4.6346 12.8403 3.25633 12.9716 3.25633 13.8475C3.25633 14.5896 4.82012 14.8522 6.59484 15.0377C9.53435 15.3291 10.7534 16.7608 10.7534 18.7473C10.7534 22.4814 6.64736 23.1176 5.0319 23.1176Z" fill="#00B0F4"/>
                                <path d="M20.6952 23.1172C16.7739 23.1172 13.7285 21.2366 13.7285 16.0708C13.7285 12.3375 16.1115 9.66064 20.5614 9.66064C25.7525 9.66064 25.9923 16.1767 25.8864 17.2636H22.7334H17.0653C17.4101 19.2238 18.6545 19.832 21.118 19.832C22.337 19.832 25.5154 18.9841 25.5154 18.9841L25.4095 22.2175C25.4103 22.2175 22.9189 23.1172 20.6952 23.1172ZM17.0399 15.2228H22.6538C22.4166 13.9522 21.7804 12.8399 20.0853 12.8399C18.5749 12.8399 17.3305 13.687 17.0399 15.2228Z" fill="#00B0F4"/>
                                <path d="M32.8082 6.85265V23.0115H29.6289V5H32.8861L32.8082 6.85265Z" fill="#00B0F4"/>
                                <path d="M40.5992 6.85265V23.0115H37.4199V5H40.6771L40.5992 6.85265Z" fill="#00B0F4"/>
                                <path d="M55.4339 19.8321V23.0113H44.4434L50.7476 12.9458H45.1312V9.7666H56.2302L49.7667 19.8321H55.4339Z" fill="#00B0F4"/>
                                <path d="M65.3952 19.8321L58.9316 9.7666H70.0306V12.9458H64.4142L70.7185 23.0113H59.7271V19.8321H65.3952Z" fill="#00B0F4"/>
                                <path d="M87.2782 9.75977L81.9998 23.0113C80.2987 27.163 78.1123 27.7814 74.1368 27.7814V24.5793C77.4719 24.5793 78.3334 23.8067 78.3334 22.1938L73.1211 9.75977H76.8095L80.3657 19.2789L83.5458 9.75977H87.2782Z" fill="#00B0F4"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_4133_13647">
                                <rect width="87.278" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </Link>

                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        Get the latest updates about Designership&apos;s new features and product updates.
                    </p>
                    
                    <div className="space-y-3">
                        <div className="flex flex-row gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter Your Email Address" 
                                className="flex-1 px-2 py-2 w-full border border-[#6A788D] rounded-xl text-sm placeholder-gray-400 focus:outline-none"
                            />
                            <button className="bg-[#00B0F4] border-[#2CC9FF] text-white px-2 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                Subscribe
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6631 6.25781C13.6631 6.47201 13.5833 6.65885 13.4238 6.81836L8.91211 11.3164C8.7526 11.4714 8.57259 11.5488 8.37207 11.5488C8.16243 11.5488 7.98698 11.4805 7.8457 11.3438C7.70898 11.207 7.64062 11.0361 7.64062 10.8311C7.64062 10.7262 7.65885 10.6283 7.69531 10.5371C7.73633 10.446 7.79102 10.3662 7.85938 10.2979L9.39062 8.75293L11.9404 6.42871L12.1797 6.86621L9.80762 7.00293H1.50195C1.27409 7.00293 1.08952 6.93457 0.948242 6.79785C0.811523 6.65658 0.743164 6.47656 0.743164 6.25781C0.743164 6.03451 0.811523 5.85449 0.948242 5.71777C1.08952 5.5765 1.27409 5.50586 1.50195 5.50586H9.80762L12.1797 5.64941L11.9404 6.09375L9.39062 3.7627L7.85938 2.21094C7.79102 2.14258 7.73633 2.0651 7.69531 1.97852C7.65885 1.88737 7.64062 1.78711 7.64062 1.67773C7.64062 1.47266 7.70898 1.30176 7.8457 1.16504C7.98698 1.02832 8.16243 0.959961 8.37207 0.959961C8.47233 0.959961 8.56803 0.980469 8.65918 1.02148C8.75033 1.0625 8.83691 1.12402 8.91895 1.20605L13.4238 5.69727C13.5833 5.85677 13.6631 6.04362 13.6631 6.25781Z" fill="#EFFAFF"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">

                <div className="space-y-4">
                    <h3 className="text-gray-900 font-medium text-base">Features</h3>
                    <ul className="space-y-3">
                        <li><Link href="/product-management" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">Bundles</Link></li>
                        <li><Link href="/subscription-management" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">Subscriptions</Link></li>
                        <li><Link href="/order-management" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">Order management</Link></li>
                        <li><Link href="/integration" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">Integration</Link></li>
                        <li><Link href="/store-front" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">Store Front</Link></li>
                        <li><Link href="/domain-connect" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">Domain Connect</Link></li>
                        <li><Link href="/store-optimization" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">SEO & Branding</Link></li>
                    </ul>
                </div>


                <div className="space-y-4">
                    <h3 className="text-gray-900 font-medium text-base">Integration</h3>
                    <ul className="space-y-3">
                        <li><Link href="/integration/shopify" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">Shopify</Link></li>
                        <li className="flex items-center gap-2">
                            <Link href="/integration/wordpress" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">WordPress</Link>
                            <span className="bg-[#00B0F4] text-white text-xs px-2 py-1 rounded-full font-medium">Upcoming</span>
                        </li>
                        <li><Link href="/integration/amazon-s3" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">Amazon S3</Link></li>
                        <li><Link href="/integration/stripe" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">Stripe</Link></li>
                        <li><Link href="/integration/paypal" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">PayPal</Link></li>
                        <li><Link href="/integration/dropbox" className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors">Dropbox</Link></li>
                    </ul>
                </div>

                <div className="space-y-4 mt-10 sm:mt-0">
                    <h3 className="text-gray-900 font-medium text-base">Resources</h3>
                    <ul className="space-y-3">
                        <li>
                            <a 
                                href="https://blog.sellzzy.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://docs.sellzzy.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors"
                            >
                                Getting Started
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://docs.sellzzy.com/support" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#464F5E] hover:text-[#00B0F4] hover:no-underline text-sm transition-colors"
                            >
                                Support
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hidden sm:block sm:col-span-3 lg:col-span-1">
   
                    <div className="flex my-6 items-center">
                        <Link href="/" className="flex-shrink-0 hover:opacity-70 transition-opacity">
                            <svg width="88" height="32" viewBox="0 0 88 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4133_13647)">
                                <path d="M5.0319 23.1176C1.13853 23.1176 0 22.4297 0 22.4297L0.18552 19.0649C0.18552 19.0649 2.48884 19.9129 5.19116 19.9129C6.7524 19.9129 7.4428 19.4622 7.4428 18.6939C7.4428 17.9798 6.67531 17.7409 5.29705 17.635C1.42994 17.3699 0 16.1771 0 13.7679C0 10.0321 3.91878 9.60938 5.48257 9.60938C9.21837 9.60938 10.3289 10.3515 10.3289 10.3515L10.1172 13.7137C9.53519 13.3172 6.88625 12.7861 5.71976 12.814C4.6346 12.8403 3.25633 12.9716 3.25633 13.8475C3.25633 14.5896 4.82012 14.8522 6.59484 15.0377C9.53435 15.3291 10.7534 16.7608 10.7534 18.7473C10.7534 22.4814 6.64736 23.1176 5.0319 23.1176Z" fill="#00B0F4"/>
                                <path d="M20.6952 23.1172C16.7739 23.1172 13.7285 21.2366 13.7285 16.0708C13.7285 12.3375 16.1115 9.66064 20.5614 9.66064C25.7525 9.66064 25.9923 16.1767 25.8864 17.2636H22.7334H17.0653C17.4101 19.2238 18.6545 19.832 21.118 19.832C22.337 19.832 25.5154 18.9841 25.5154 18.9841L25.4095 22.2175C25.4103 22.2175 22.9189 23.1172 20.6952 23.1172ZM17.0399 15.2228H22.6538C22.4166 13.9522 21.7804 12.8399 20.0853 12.8399C18.5749 12.8399 17.3305 13.687 17.0399 15.2228Z" fill="#00B0F4"/>
                                <path d="M32.8082 6.85265V23.0115H29.6289V5H32.8861L32.8082 6.85265Z" fill="#00B0F4"/>
                                <path d="M40.5992 6.85265V23.0115H37.4199V5H40.6771L40.5992 6.85265Z" fill="#00B0F4"/>
                                <path d="M55.4339 19.8321V23.0113H44.4434L50.7476 12.9458H45.1312V9.7666H56.2302L49.7667 19.8321H55.4339Z" fill="#00B0F4"/>
                                <path d="M65.3952 19.8321L58.9316 9.7666H70.0306V12.9458H64.4142L70.7185 23.0113H59.7271V19.8321H65.3952Z" fill="#00B0F4"/>
                                <path d="M87.2782 9.75977L81.9998 23.0113C80.2987 27.163 78.1123 27.7814 74.1368 27.7814V24.5793C77.4719 24.5793 78.3334 23.8067 78.3334 22.1938L73.1211 9.75977H76.8095L80.3657 19.2789L83.5458 9.75977H87.2782Z" fill="#00B0F4"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_4133_13647">
                                <rect width="87.278" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                    

                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        Get the latest updates about Designership&apos;s new features and product updates.
                    </p>
                    

                    <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter Your Email Address" 
                                className="flex-1 px-2 py-2 w-full border border-[#6A788D] rounded-xl text-sm placeholder-gray-400 focus:outline-none"
                            />
                            <button className="bg-[#00B0F4] border-[#2CC9FF] text-white px-2 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                Subscribe
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6631 6.25781C13.6631 6.47201 13.5833 6.65885 13.4238 6.81836L8.91211 11.3164C8.7526 11.4714 8.57259 11.5488 8.37207 11.5488C8.16243 11.5488 7.98698 11.4805 7.8457 11.3438C7.70898 11.207 7.64062 11.0361 7.64062 10.8311C7.64062 10.7262 7.65885 10.6283 7.69531 10.5371C7.73633 10.446 7.79102 10.3662 7.85938 10.2979L9.39062 8.75293L11.9404 6.42871L12.1797 6.86621L9.80762 7.00293H1.50195C1.27409 7.00293 1.08952 6.93457 0.948242 6.79785C0.811523 6.65658 0.743164 6.47656 0.743164 6.25781C0.743164 6.03451 0.811523 5.85449 0.948242 5.71777C1.08952 5.5765 1.27409 5.50586 1.50195 5.50586H9.80762L12.1797 5.64941L11.9404 6.09375L9.39062 3.7627L7.85938 2.21094C7.79102 2.14258 7.73633 2.0651 7.69531 1.97852C7.65885 1.88737 7.64062 1.78711 7.64062 1.67773C7.64062 1.47266 7.70898 1.30176 7.8457 1.16504C7.98698 1.02832 8.16243 0.959961 8.37207 0.959961C8.47233 0.959961 8.56803 0.980469 8.65918 1.02148C8.75033 1.0625 8.83691 1.12402 8.91895 1.20605L13.4238 5.69727C13.5833 5.85677 13.6631 6.04362 13.6631 6.25781Z" fill="#EFFAFF"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                    <div className="flex text-[#464F5E] flex-wrap items-center gap-6 font-medium text-base">
                        <Link href="/terms-and-conditions" className="hover:no-underline hover:text-[#00B0F4] transition duration-200">Terms & Conditions</Link>
                        <Link href="/privacy-policy" className="hover:no-underline hover:text-[#00B0F4] transition duration-200">Privacy & Policy</Link>
                        <Link href="/security" className="hover:no-underline hover:text-[#00B0F4] transition duration-200">Security</Link>
                    </div>
                    

                    <div className="text-sm text-gray-600">
                        © 2024 Sellzzy. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )}

export default Footer;