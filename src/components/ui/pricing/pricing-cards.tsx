import { PricingPlan } from '@/types/pricing';
import PricingButton from './pricing-button';

interface PricingCardsProps {
  plans: PricingPlan[];
}

const PricingCards = ({ plans }: PricingCardsProps) => {
  const gradients = {
    1: 'linear-gradient(135deg, #EEAD92 0%, #6018DC 100%)',
    2: 'linear-gradient(135deg, #FAB2FF 0%, #1904E5 100%)',
    3: 'linear-gradient(135deg, #52E5E7 0%, #130CB7 100%)',
    4: 'linear-gradient(135deg, #CE9FFC 0%, #7367F0 100%)'
  };

  const getDefaultDescription = (planName: string) => {
    const descriptions = {
      'Starter': 'Perfect for new users to set up a basic online store and explore core features.',
      'Basic': 'Ideal for small businesses looking to expand their online presence with more features.',
      'Plus': 'Perfect for growing businesses that need advanced features and bundle creation.',
      'Advance': 'For established businesses requiring unlimited products and subscription management.'
    };
    return descriptions[planName as keyof typeof descriptions] || 'Choose this plan to get started with our platform.';
  };

  const formatFeatureValue = (feature: any) => {
    if (feature.feature_name === 'Orders' && feature.text_value === 'Unlimited') {
      return 'Unlimited Orders';
    }
    if (feature.feature_name === 'Sell on social media') {
      return 'Sell Anywhere';
    }
    if (feature.feature_name === 'Bundle Maker' && feature.numeric_value) {
      const value = parseFloat(feature.numeric_value);
      if (value > 0) return 'Bundle Maker';
    }
    
    if (feature.text_value) return `${feature.feature_name}: ${feature.text_value}`;
    if (feature.numeric_value !== null) {
      const value = parseFloat(feature.numeric_value);
      if (value === -1) return `${feature.feature_name}: Unlimited`;
      if (value === 0) return `${feature.feature_name}: Not included`;
      return `${feature.feature_name}: ${value}`;
    }
    if (feature.boolean_value !== null) {
      return feature.boolean_value ? feature.feature_name : `No ${feature.feature_name}`;
    }
    return feature.feature_name;
  };

  const getKeyFeatures = (features: any[], planName: string) => {
    const planFeatures = {
      'Starter': ['Orders', 'Sell on social media', 'Shopify'],
      'Basic': ['Activity & Control', 'Custom branding', 'Advance Integrations'],
      'Plus': ['Bundle Maker', 'Priority support', 'Custom domain'],
      'Advance': ['Membership & Subscription', 'Team Management', 'Unlimited Products']
    };
    
    const selectedFeatures = planFeatures[planName as keyof typeof planFeatures] || ['Orders', 'Storage', 'Product Listing'];
    
    return selectedFeatures.map(featureName => {
      const feature = features.find(f => f.feature_name === featureName || f.feature_name.includes(featureName));
      if (feature) {
        return formatFeatureValue(feature);
      }
      return featureName;
    }).slice(0, 3);
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {plans.map((plan, index) => {
        const yearlyPrice = parseFloat(plan.yearly_price);
        const yearlyMonthlyPrice = yearlyPrice > 0 ? (yearlyPrice / 12).toFixed(0) : 0;
        const priceDisplay = yearlyPrice === 0 ? 'Free' : `$${yearlyMonthlyPrice}`;
        const periodText = yearlyPrice === 0 ? 'for Lifetime.' : 'per month billed annually';
        const buttonClass = index === 2 
          ? 'bg-[#00B0F4] text-white transition-shadow hover:shadow-[0_0_0_2px_rgba(0,176,244,0.4)] transition-transform duration-500 hover:scale-[1.01]'
          : 'bg-white text-[#00B0F4]';
        const buttonText = yearlyPrice === 0 ? 'Try For Free' : 'Get Started';

        return (
          <div 
            key={plan.id}
            className="border border-[#e1e1e1] flex flex-col p-6 bg-white rounded-2xl overflow-hidden shadow-[0px_0px_0px_4px_#f3f4f7,0px_0px_0px_3.5px_#f9f9fb,0px_0px_0px_1px_#e4e5e999,0px_0px_0px_0.5px_#e4e5e9] relative"
            data-plan-id={plan.id}
          >
            <div className="flex flex-col gap-4 p-0 relative">
              {index === 2 && (
                <div className="absolute -top-6 right-6 px-6 py-2 bg-[#00B0F4] text-white rounded-b-xl text-base font-medium">
                  Popular
                </div>
              )}
              <div 
                className="w-6 h-6 rounded-xl" 
                style={{ background: gradients[plan.id as keyof typeof gradients] || gradients[1] }}
              ></div>
              
              <div className="flex flex-col gap-1 py-4 border-b border-solid border-[#edeef1]">
                <h3 className="font-semibold text-[#3C4350] text-xl tracking-[0] leading-7">{plan.name}</h3>
                <p className="font-normal text-[#464F5E] text-base tracking-[0] leading-6">
                  {plan.description || getDefaultDescription(plan.name)}
                </p>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xl leading-7 text-[#3C4350] tracking-[0]">{priceDisplay}</span>
                  <span className="font-normal text-[#3c4350] text-sm tracking-[0] leading-5">{periodText}</span>
                </div>
                <span className="font-normal text-[#3c4350] text-sm tracking-[0] leading-5">
                  {yearlyPrice === 0 ? 'You can upgrade anytime.' : `or $${plan.monthly_price} billed monthly`}
                </span>
              </div>
              
              <PricingButton 
                buttonText={buttonText}
                buttonClass={buttonClass}
              />
              
              <div className="flex flex-col gap-[13px]">
                <h4 className="font-medium text-[#3c4350] text-base tracking-[0] leading-5">What's Included</h4>
                <div className="flex flex-col gap-2">
                  {getKeyFeatures(plan.features, plan.name).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-2 items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-[#464f5e] mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="font-normal text-[#464f5e] text-base tracking-[0] leading-6">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingCards;