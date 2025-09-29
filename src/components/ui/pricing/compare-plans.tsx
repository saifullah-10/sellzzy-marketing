import { PricingPlan, PricingFeature } from '@/types/pricing';
import PricingButton from './pricing-button';

interface ComparePlansProps {
  plans: PricingPlan[];
}

const ComparePlans = ({ plans }: ComparePlansProps) => {
  const getAllFeatures = (plansData: PricingPlan[]) => {
    const featureNames = [...new Set(plansData[0]?.features.map(f => f.feature_name) || [])];
    
    return featureNames.map(featureName => {
      const values = plansData.map(plan => {
        const feature = plan.features.find(f => f.feature_name === featureName);
        return formatFeatureValue(feature);
      });
      
      return {
        name: featureName,
        values: values
      };
    });
  };

  const formatFeatureValue = (feature?: PricingFeature) => {
    if (!feature) return false;
    
    if (feature.text_value) return feature.text_value;
    if (feature.numeric_value !== null) {
      const value = parseFloat(feature.numeric_value.toString());
      if (value === -1) return 'Unlimited';
      if (value === 0) return false;
      return value.toString();
    }
    if (feature.boolean_value !== null) {
      return feature.boolean_value;
    }
    return false;
  };

  const getDefaultDescription = (planName: string) => {
    const descriptions = {
      'Starter': 'Set up a basic store and explore features.',
      'Basic': 'Advanced tools and support for growing stores.',
      'Plus': 'Premium tools and support for medium-sized stores.',
      'Advance': 'All-inclusive features and support for large stores.'
    };
    return descriptions[planName as keyof typeof descriptions] || 'Choose this plan to get started.';
  };

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value 
        ? <svg width="14" height="14" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M6.93066 15.4941C6.50879 15.4941 6.14844 15.3066 5.84961 14.9316L1.29688 9.23633C1.18555 9.10156 1.10352 8.96973 1.05078 8.84082C1.00391 8.71191 0.980469 8.58008 0.980469 8.44531C0.980469 8.14062 1.08008 7.88867 1.2793 7.68945C1.48438 7.49023 1.74219 7.39062 2.05273 7.39062C2.41016 7.39062 2.71191 7.55176 2.95801 7.87402L6.89551 12.9277L14.5244 0.807617C14.6592 0.602539 14.7969 0.458984 14.9375 0.376953C15.0781 0.289062 15.2598 0.245117 15.4824 0.245117C15.7871 0.245117 16.0361 0.341797 16.2295 0.535156C16.4229 0.722656 16.5195 0.96875 16.5195 1.27344C16.5195 1.39648 16.499 1.52246 16.458 1.65137C16.417 1.77441 16.3525 1.90625 16.2646 2.04688L8.00293 14.9229C7.74512 15.3037 7.3877 15.4941 6.93066 15.4941Z" fill="#3C4350"/></svg>
        : <svg width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M9.24121 18.7334C7.99902 18.7334 6.83008 18.4961 5.73438 18.0215C4.63867 17.5527 3.67188 16.8994 2.83398 16.0615C2.00195 15.2236 1.34863 14.2568 0.874023 13.1611C0.399414 12.0654 0.162109 10.8965 0.162109 9.6543C0.162109 8.41211 0.399414 7.24316 0.874023 6.14746C1.34863 5.05176 2.00195 4.08789 2.83398 3.25586C3.67188 2.41797 4.63574 1.76172 5.72559 1.28711C6.82129 0.8125 7.99023 0.575195 9.23242 0.575195C10.4805 0.575195 11.6523 0.8125 12.748 1.28711C13.8438 1.76172 14.8105 2.41797 15.6484 3.25586C16.4863 4.08789 17.1426 5.05176 17.6172 6.14746C18.0918 7.24316 18.3291 8.41211 18.3291 9.6543C18.3291 10.8965 18.0918 12.0654 17.6172 13.1611C17.1426 14.2568 16.4863 15.2236 15.6484 16.0615C14.8105 16.8994 13.8438 17.5527 12.748 18.0215C11.6523 18.4961 10.4834 18.7334 9.24121 18.7334ZM9.24121 16.9404C10.2549 16.9404 11.2012 16.7529 12.0801 16.3779C12.959 16.0029 13.7324 15.4814 14.4004 14.8135C15.0684 14.1455 15.5898 13.3721 15.9648 12.4932C16.3398 11.6143 16.5273 10.668 16.5273 9.6543C16.5273 8.64648 16.3398 7.70312 15.9648 6.82422C15.5898 5.93945 15.0684 5.16309 14.4004 4.49512C13.7324 3.82715 12.9561 3.30566 12.0713 2.93066C11.1924 2.55566 10.2461 2.36816 9.23242 2.36816C8.22461 2.36816 7.27832 2.55566 6.39355 2.93066C5.51465 3.30566 4.74414 3.82715 4.08203 4.49512C3.41992 5.16309 2.90137 5.93945 2.52637 6.82422C2.15137 7.70312 1.96387 8.64648 1.96387 9.6543C1.96387 10.668 2.15137 11.6143 2.52637 12.4932C2.90137 13.7721 3.41992 14.1455 4.08203 14.8135C4.75 15.4814 5.52344 16.0029 6.40234 16.3779C7.28711 16.7529 8.2334 16.9404 9.24121 16.9404ZM5.91016 10.4893C5.64648 10.4893 5.42969 10.4189 5.25977 10.2783C5.08984 10.1318 5.00488 9.92969 5.00488 9.67188C5.00488 9.41992 5.08691 9.21777 5.25098 9.06543C5.4209 8.91309 5.64062 8.83691 5.91016 8.83691H12.5723C12.8477 8.83691 13.0674 8.91309 13.2314 9.06543C13.3955 9.21777 13.4775 9.41992 13.4775 9.67188C13.4775 9.92969 13.3926 10.1318 13.2227 10.2783C13.0527 10.4189 12.8359 10.4893 12.5723 10.4893H5.91016Z" fill="#3C4350"/></svg>;
    }
    return <span className="text-sm text-gray-600 font-medium">{value}</span>;
  };

  const features = getAllFeatures(plans);

  return (
    <section className="w-full mx-auto px-4 py-20 lg:overflow-visible md:overflow-x-auto overflow-x-auto scrollbar-hide">
      <div className="flex flex-col gap-6 lg:min-w-0 md:min-w-[1240px] min-w-[1240px]">
        <div className="flex items-start gap-6 lg:sticky lg:top-0 bg-white/50 backdrop-blur-sm pt-3 -mt-3 px-2 -mx-3">
          <div className="w-80 flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-[#464F5E]">Compare Plans</h2>
          </div>
          
          <div className="flex-1 grid grid-cols-4 gap-6">
            {plans.map((plan, index) => {
              const yearlyPrice = parseFloat(plan.yearly_price);
              const yearlyMonthlyPrice = yearlyPrice > 0 ? (yearlyPrice / 12).toFixed(0) : 0;
              const priceDisplay = yearlyPrice === 0 ? 'Free' : `$${yearlyMonthlyPrice}`;
              const periodText = yearlyPrice === 0 ? 'for lifetime.' : 'per month billed annually';
              const monthlyBilledText = yearlyPrice === 0 ? 'You can upgrade anytime.' : `or $${plan.monthly_price} billed monthly`;
              const buttonClass = index === 2 
                ? 'bg-[#00B0F4] text-white transition-all hover:shadow-[0_0_0_2px_rgba(0,176,244,0.4)] hover:scale-[1.01]'
                : 'bg-white text-[#00B0F4] transition-all hover:scale-[1.01]';
              const buttonText = yearlyPrice === 0 ? 'Try For Free' : 'Get Started';

              return (
                <div key={plan.id} className="flex flex-col items-start gap-4 pb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#3C4350]">{plan.name}</h3>
                    <p className="text-base text-[#464F5E] border-b border-[#EDEEF1] pb-4">
                      {plan.description || getDefaultDescription(plan.name)}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-medium text-[#3C4350]">{priceDisplay}</span>
                      <span className="text-sm text-gray-900">{periodText}</span>
                    </div>
                    <span className="text-sm text-gray-900">{monthlyBilledText}</span>
                  </div>
                  <PricingButton 
                    buttonText={buttonText}
                    buttonClass={buttonClass}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <table className="w-full lg:min-w-0 md:min-w-[1240px] min-w-[1240px]">
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-[#FFFFFF]">
                  <td className="py-4 px-0 w-80 align-middle">
                    <span className="text-base text-gray-600 font-medium">{feature.name}</span>
                  </td>
                  {feature.values.map((value: any, valueIndex: number) => (
                    <td key={valueIndex} className="py-4 px-6 text-center align-middle">
                      <div className="flex items-center justify-center">
                        {renderFeatureValue(value)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;