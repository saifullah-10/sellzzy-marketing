import { PricingPlan } from '@/types/pricing';

export async function getPricingData(): Promise<PricingPlan[]> {
  try {
    const response = await fetch('https://www.sellzzy.com/public/plans/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to load pricing data:', error);
    return [];
  }
}