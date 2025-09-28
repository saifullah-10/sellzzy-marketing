const CtaSection: React.FC = () => {
  return (
    <>
        <section className="max-w-[1280px] mx-auto lg:px-0 md:px-0 px-[5%] lg:py-28 md:py-16 py-5">

            <div className="w-full">
                <svg className="w-full h-auto max-w-full" viewBox="0 0 1240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1699_48389" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="1240"
                        height="330">
                        <path d="M1240 0H0V330H1240V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_1699_48389)">
                        <mask id="mask1_1699_48389" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="20"
                            width="20" height="290">
                            <path d="M0 20H20V310H0V20Z" fill="white" />
                        </mask>
                        <g mask="url(#mask1_1699_48389)">
                            <path d="M0 21H20V19H0V21ZM20 309H0V311H20V309Z" fill="#E4E7EB" />
                        </g>
                        <mask id="mask2_1699_48389" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="20" y="20"
                            width="600" height="290">
                            <path d="M20 20H620V310H20V20Z" fill="white" />
                        </mask>
                        <g mask="url(#mask2_1699_48389)">
                            <path d="M20 21H620V19H20V21ZM620 309H20V311H620V309Z" fill="#E4E7EB" />
                        </g>
                        <mask id="mask3_1699_48389" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="20" y="0"
                            width="600" height="330">
                            <path d="M20 0H620V330H20V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask3_1699_48389)">
                            <path d="M619 0V330H621V0H619ZM21 330V0H19V330H21Z" fill="#E4E7EB" />
                        </g>
                        <path d="M620 0H1220V330H620V0Z" fill="white" />
                        <mask id="mask4_1699_48389" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="620" y="20"
                            width="600" height="290">
                            <path d="M620 20H1220V310H620V20Z" fill="white" />
                        </mask>
                        <g mask="url(#mask4_1699_48389)">
                            <path d="M620 20H1220V310H620V20Z" fill="white" />
                            <path d="M620 60L1220 60.0001" stroke="#E4E7EB" />
                            <path d="M860 60V20" stroke="#E4E7EB" />
                            <path d="M740 60V20" stroke="#E4E7EB" />
                            <path d="M980 60V20" stroke="#E4E7EB" />
                            <path d="M1100 60V20" stroke="#E4E7EB" />
                        </g>
                        <mask id="mask5_1699_48389" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="620" y="20"
                            width="600" height="290">
                            <path d="M620 20H1220V310H620V20Z" fill="white" />
                        </mask>
                        <g mask="url(#mask5_1699_48389)">
                            <path d="M620 21H1220V19H620V21ZM1220 309H620V311H1220V309Z" fill="#E4E7EB" />
                        </g>
                        <mask id="mask6_1699_48389" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="620" y="0"
                            width="600" height="330">
                            <path d="M620 0H1220V330H620V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask6_1699_48389)">
                            <path d="M1219 0V330H1221V0H1219Z" fill="#E4E7EB" />
                        </g>
                        <mask id="mask7_1699_48389" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="1220" y="20"
                            width="20" height="290">
                            <path d="M1220 20H1240V310H1220V20Z" fill="white" />
                        </mask>
                        <g mask="url(#mask7_1699_48389)">
                            <path d="M1220 21H1240V19H1220V21ZM1240 309H1220V311H1240V309Z" fill="#E4E7EB" />
                        </g>
                    </g>
                </svg>

            </div>

            <div className="lg:space-y-5 md:space-y-4 space-y-3 w-full max-w-4xl mx-auto px-4 py-10">
                <h4 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350]">Ready to Start Earning From Your Digital Products?</h4>
                <p className="lg:text-lg md:text-base text-sm text-gray-600 leading-relaxed">Join Sellzzy and unlock your digital business's full potential. Effortlessly sell and deliver products, engage
                customers, and drive revenue growth. Take advantage of our powerful features, seamless integrations, and
                user-friendly interface.</p>
                <div className="flex md:flex-row flex-col items-center gap-5">
                    <a href="{% url 'admin_onboarding:admin_onboarding' %}?request_type=signup" className="bg-[#00B0F4] text-center hover:no-underline text-white rounded-xl border border-[#2CC9FF] pt-[12px] pb-[12px] pr-[16px] pl-[16px] 
                    transition-shadow hover:shadow-[0_0_0_2px_rgba(44,201,255,0.4)] 
                    transition-transform duration-500 hover:scale-[1.01]
                    md:w-auto w-full
                    ">Try For
                        Free</a>

                    
                    <button className="bg-white text-center hover:no-underline text-[#00B0F4] hover:text-[#00B0F4] rounded-[12px] border border-[#2CC9FF] pt-[12px] pb-[12px] pr-[16px] pl-[16px] transition-transform duration-200 hover:scale-[1.01]
                    md:w-auto w-full focus:outline-none
                    " data-action="contact_sales">Contact Sales</button>

                </div>
            </div>

            <div className="w-full">
                <svg className="w-full h-auto max-w-full" viewBox="0 0 1240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1699_48439" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="-260"
                        width="1240" height="330">
                        <path d="M1240 70H0V-260H1240V70Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_1699_48439)">
                        <mask id="mask1_1699_48439" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="-240"
                            width="20" height="290">
                            <path d="M0 50H20V-240H0V50Z" fill="white" />
                        </mask>
                        <g mask="url(#mask1_1699_48439)">
                            <path d="M0 49H20V51H0V49ZM20 -239H0V-241H20V-239Z" fill="#E4E7EB" />
                        </g>
                        <mask id="mask2_1699_48439" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="20" y="-240"
                            width="600" height="290">
                            <path d="M20 50H620V-240H20V50Z" fill="white" />
                        </mask>
                        <g mask="url(#mask2_1699_48439)">
                            <path d="M20 49H620V51H20V49ZM620 -239H20V-241H620V-239Z" fill="#E4E7EB" />
                        </g>
                        <mask id="mask3_1699_48439" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="20" y="-260"
                            width="600" height="330">
                            <path d="M20 70H620V-260H20V70Z" fill="white" />
                        </mask>
                        <g mask="url(#mask3_1699_48439)">
                            <path d="M619 70V-260H621V70H619ZM21 -260V70H19V-260H21Z" fill="#E4E7EB" />
                        </g>
                        <path d="M620 70H1220V-260H620V70Z" fill="white" />
                        <mask id="mask4_1699_48439" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="620" y="-240"
                            width="600" height="290">
                            <path d="M620 50H1220V-240H620V50Z" fill="white" />
                        </mask>
                        <g mask="url(#mask4_1699_48439)">
                            <path d="M620 50H1220V-240H620V50Z" fill="white" />
                            <path d="M620 10L1220 9.9999" stroke="#E4E7EB" />
                            <path d="M860 10V50" stroke="#E4E7EB" />
                            <path d="M740 10V50" stroke="#E4E7EB" />
                            <path d="M980 10V50" stroke="#E4E7EB" />
                            <path d="M1100 10V50" stroke="#E4E7EB" />
                        </g>
                        <mask id="mask5_1699_48439" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="620" y="-240"
                            width="600" height="290">
                            <path d="M620 50H1220V-240H620V50Z" fill="white" />
                        </mask>
                        <g mask="url(#mask5_1699_48439)">
                            <path d="M620 49H1220V51H620V49ZM1220 -239H620V-241H1220V-239Z" fill="#E4E7EB" />
                        </g>
                        <mask id="mask6_1699_48439" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="620" y="-260"
                            width="600" height="330">
                            <path d="M620 70H1220V-260H620V70Z" fill="white" />
                        </mask>
                        <g mask="url(#mask6_1699_48439)">
                            <path d="M1219 70V-260H1221V70H1219Z" fill="#E4E7EB" />
                        </g>
                        <mask id="mask7_1699_48439" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="1220" y="-240"
                            width="20" height="290">
                            <path d="M1220 50H1240V-240H1220V50Z" fill="white" />
                        </mask>
                        <g mask="url(#mask7_1699_48439)">
                            <path d="M1220 49H1240V51H1220V49ZM1240 -239H1220V-241H1240V-239Z" fill="#E4E7EB" />
                        </g>
                    </g>
                </svg>
            </div>

        </section>
    </>
  )}

  export default CtaSection;