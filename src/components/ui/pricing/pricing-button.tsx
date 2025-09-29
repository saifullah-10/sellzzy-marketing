'use client';

import Link from "next/link";

interface PricingButtonProps {
  buttonText: string;
  buttonClass: string;
}

const PricingButton = ({ buttonText, buttonClass }: PricingButtonProps) => {
  return (
    <Link 
      href="https://www.sellzzy.com/admin/onboarding/?request_type=signup"
      className={`w-full py-[12px] ${buttonClass} rounded-xl transition-all font-medium duration-300 hover:scale-[1.01] text-center block hover:no-underline`}
      style={{ border: '1px solid #00B0F4' }}
    >
      <span className="font-medium text-sm tracking-[0] leading-4">
        {buttonText}
      </span>
    </Link>
  );
};

export default PricingButton;