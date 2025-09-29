export interface PricingPlan {
  id: number;
  name: string;
  monthly_price: string;
  yearly_price: string;
  description: string;
  features: PricingFeature[];
}

export interface PricingFeature {
  id: number;
  feature_name: string;
  feature_module: string | null;
  boolean_value: boolean | null;
  numeric_value: number | null;
  text_value: string | null;
}

export interface TransformedPlan {
  id: number;
  name: string;
  price: number | string;
  monthlyPrice: string;
  period: string;
  description: string;
  buttonText: string;
  featured: boolean;
  features: string[];
}