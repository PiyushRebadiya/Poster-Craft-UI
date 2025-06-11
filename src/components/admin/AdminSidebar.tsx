import React from 'react';
import { 
  Users, 
  Layers, 
  Image, 
  CreditCard, 
  MessageSquare, 
  Settings,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { AdminTableType } from '../../types/admin';

interface AdminSidebarProps {
  activeTable: AdminTableType;
  onTableChange: (table: AdminTableType) => void;
}

export default function AdminSidebar({ activeTable, onTableChange }: AdminSidebarProps) {
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['users', 'frames']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const menuItems = [
    {
      id: 'users',
      label: 'User Management',
      icon: Users,
      children: [
        { id: 'user_categories', label: 'User Categories' },
        { id: 'user_sub_categories', label: 'User Sub Categories' },
        { id: 'users', label: 'Users' }
      ]
    },
    {
      id: 'frames',
      label: 'Frame Management',
      icon: Image,
      children: [
        { id: 'frame_categories', label: 'Frame Categories' },
        { id: 'frame_sub_categories', label: 'Frame Sub Categories' },
        { id: 'frames', label: 'Frames' }
      ]
    },
    {
      id: 'business',
      label: 'Business',
      icon: CreditCard,
      children: [
        { id: 'pricing_plans', label: 'Pricing Plans' },
        { id: 'subscriptions', label: 'Subscriptions' }
      ]
    },
    {
      id: 'communication',
      label: 'Communication',
      icon: MessageSquare,
      children: [
        { id: 'whatsup_messages', label: 'WhatsApp Messages' }
      ]
    }
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Settings className="h-8 w-8 text-indigo-400" />
          <div>
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <p className="text-xs text-gray-400">PosterCraft</p>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-2">
            <button
              onClick={() => toggleSection(item.id)}
              className="w-full flex items-center justify-between px-6 py-3 text-left hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5 text-gray-400" />
                <span className="font-medium">{item.label}</span>
              </div>
              {expandedSections.includes(item.id) ? (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </button>
            
            {expandedSections.includes(item.id) && (
              <div className="bg-gray-800">
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => onTableChange(child.id as AdminTableType)}
                    className={`w-full text-left px-12 py-2 text-sm hover:bg-gray-700 transition-colors ${
                      activeTable === child.id ? 'bg-indigo-600 text-white' : 'text-gray-300'
                    }`}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}