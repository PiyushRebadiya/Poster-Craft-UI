export interface UserCategory {
  id: string;
  name: string;
  created_at?: string;
}

export interface UserSubCategory {
  id: string;
  user_categories_id: string;
  name: string;
  user_category?: UserCategory;
  created_at?: string;
}

export interface User {
  id: string;
  user_category_id: string;
  user_sub_category_id: string;
  name: string;
  register_mobile: string;
  business_name: string;
  mobile1: string;
  mobile2?: string;
  email: string;
  address: string;
  business_logo?: string;
  business_logo2?: string;
  profile_photo?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  twitter?: string;
  telegram?: string;
  whatsUp?: string;
  zoom?: string;
  google_meet?: string;
  user_category?: UserCategory;
  user_sub_category?: UserSubCategory;
  created_at?: string;
}

export interface FrameCategory {
  id: string;
  name: string;
  created_at?: string;
}

export interface FrameSubCategory {
  id: string;
  frame_categories_id: string;
  name: string;
  frame_category?: FrameCategory;
  created_at?: string;
}

export interface Frame {
  id: string;
  frame_categories_id: string;
  frame_sub_categories_id: string;
  frame_json: string;
  status: 'active' | 'inactive';
  frame_category?: FrameCategory;
  frame_sub_category?: FrameSubCategory;
  created_at?: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: number;
  gst: 'exclusive' | 'inclusive';
  days: number;
  plan_permission: string;
  created_at?: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  title: string;
  payment_id: string;
  price: number;
  start_date: string;
  end_date: string;
  gst_name: string;
  gst_no: string;
  remark?: string;
  status: 'active' | 'inactive';
  total_days: number;
  subscription_status: 'pending' | 'active' | 'expired';
  user?: User;
  created_at?: string;
}

export interface WhatsUpMessage {
  id: string;
  user_id: string;
  image?: string;
  frame_id: string;
  sent_time: string;
  status: 'sent' | 'pending' | 'failed';
  sent_count: number;
  deleted: boolean;
  failed: number;
  user?: User;
  frame?: Frame;
  created_at?: string;
}

export type AdminTableType = 
  | 'user_categories'
  | 'user_sub_categories'
  | 'users'
  | 'frame_categories'
  | 'frame_sub_categories'
  | 'frames'
  | 'pricing_plans'
  | 'subscriptions'
  | 'whatsup_messages';