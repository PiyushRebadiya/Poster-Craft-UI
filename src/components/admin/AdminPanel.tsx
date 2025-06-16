import React from "react";
import AdminSidebar from "./AdminSidebar";
import DataTable from "./DataTable";
import FormModal from "./FormModal";
import { AdminTableType } from "../../types/admin";
import Category from "./Category/Category";

// Mock data - In a real app, this would come from an API
const mockData = {
  user_categories: [
    { id: "1", name: "Individual", created_at: "2024-01-15" },
    { id: "2", name: "Business", created_at: "2024-01-16" },
    { id: "3", name: "Organization", created_at: "2024-01-17" },
  ],
  user_sub_categories: [
    {
      id: "1",
      user_categories_id: "1",
      name: "Personal",
      created_at: "2024-01-15",
    },
    {
      id: "2",
      user_categories_id: "2",
      name: "Small Business",
      created_at: "2024-01-16",
    },
    {
      id: "3",
      user_categories_id: "2",
      name: "Enterprise",
      created_at: "2024-01-17",
    },
  ],
  users: [
    {
      id: "1",
      user_category_id: "1",
      user_sub_category_id: "1",
      name: "John Doe",
      register_mobile: "+1234567890",
      business_name: "John's Design Studio",
      mobile1: "+1234567890",
      mobile2: "+1234567891",
      email: "john@example.com",
      address: "123 Main St, City, State",
      website: "https://johndoe.com",
      instagram: "@johndoe",
      facebook: "johndoe",
      created_at: "2024-01-15",
    },
  ],
  frame_categories: [
    { id: "1", name: "Festival Frames", created_at: "2024-01-15" },
    { id: "2", name: "Birthday Frames", created_at: "2024-01-16" },
    { id: "3", name: "Wedding Frames", created_at: "2024-01-17" },
  ],
  frame_sub_categories: [
    {
      id: "1",
      frame_categories_id: "1",
      name: "Diwali",
      created_at: "2024-01-15",
    },
    {
      id: "2",
      frame_categories_id: "1",
      name: "Christmas",
      created_at: "2024-01-16",
    },
    {
      id: "3",
      frame_categories_id: "2",
      name: "Kids Birthday",
      created_at: "2024-01-17",
    },
  ],
  frames: [
    {
      id: "1",
      frame_categories_id: "1",
      frame_sub_categories_id: "1",
      frame_json: '{"template": "diwali_2024"}',
      status: "active",
      created_at: "2024-01-15",
    },
  ],
  pricing_plans: [
    {
      id: "1",
      title: "Basic Plan",
      price: 99,
      gst: "exclusive",
      days: 30,
      plan_permission: "basic_features",
      created_at: "2024-01-15",
    },
    {
      id: "2",
      title: "Premium Plan",
      price: 299,
      gst: "inclusive",
      days: 90,
      plan_permission: "premium_features",
      created_at: "2024-01-16",
    },
  ],
  subscriptions: [
    {
      id: "1",
      user_id: "1",
      title: "Basic Plan",
      payment_id: "PAY_123456",
      price: 99,
      start_date: "2024-01-15",
      end_date: "2024-02-15",
      gst_name: "GST 18%",
      gst_no: "GST123456789",
      status: "active",
      total_days: 30,
      subscription_status: "active",
      created_at: "2024-01-15",
    },
  ],
  whatsup_messages: [
    {
      id: "1",
      user_id: "1",
      frame_id: "1",
      sent_time: "2024-01-15T10:30:00Z",
      status: "sent",
      sent_count: 1,
      deleted: false,
      failed: 0,
      created_at: "2024-01-15",
    },
  ],
};

export default function AdminPanel() {
  const [activeTable, setActiveTable] =
    React.useState<AdminTableType>("user_categories");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingItem, setEditingItem] = React.useState<any>(null);
  const [data, setData] = React.useState(mockData);

  const getTableConfig = (table: AdminTableType) => {
    switch (table) {
      case "user_categories":
        return {
          title: "User Categories",
          columns: [
            { key: "name", label: "Name", type: "text" as const },
            { key: "created_at", label: "Created At", type: "date" as const },
          ],
          fields: [
            {
              key: "name",
              label: "Category Name",
              type: "text" as const,
              required: true,
            },
          ],
        };

      case "user_sub_categories":
        return {
          title: "User Sub Categories",
          columns: [
            {
              key: "user_categories_id",
              label: "Parent Category",
              type: "select" as const,
            },
            { key: "name", label: "Name", type: "text" as const },
            { key: "created_at", label: "Created At", type: "date" as const },
          ],
          fields: [
            {
              key: "user_categories_id",
              label: "Parent Category",
              type: "select" as const,
              required: true,
              options: data.user_categories.map((cat) => ({
                value: cat.id,
                label: cat.name,
              })),
            },
            {
              key: "name",
              label: "Sub Category Name",
              type: "text" as const,
              required: true,
            },
          ],
        };

      case "users":
        return {
          title: "Users",
          columns: [
            { key: "name", label: "Name", type: "text" as const },
            { key: "email", label: "Email", type: "text" as const },
            { key: "register_mobile", label: "Mobile", type: "text" as const },
            { key: "business_name", label: "Business", type: "text" as const },
            { key: "created_at", label: "Created At", type: "date" as const },
          ],
          fields: [
            {
              key: "user_category_id",
              label: "User Category",
              type: "select" as const,
              required: true,
              options: data.user_categories.map((cat) => ({
                value: cat.id,
                label: cat.name,
              })),
            },
            {
              key: "user_sub_category_id",
              label: "User Sub Category",
              type: "select" as const,
              required: true,
              options: data.user_sub_categories.map((cat) => ({
                value: cat.id,
                label: cat.name,
              })),
            },
            {
              key: "name",
              label: "Full Name",
              type: "text" as const,
              required: true,
            },
            {
              key: "register_mobile",
              label: "Register Mobile",
              type: "tel" as const,
              required: true,
            },
            {
              key: "business_name",
              label: "Business Name",
              type: "text" as const,
              required: true,
            },
            {
              key: "mobile1",
              label: "Primary Mobile",
              type: "tel" as const,
              required: true,
            },
            { key: "mobile2", label: "Secondary Mobile", type: "tel" as const },
            {
              key: "email",
              label: "Email Address",
              type: "email" as const,
              required: true,
            },
            {
              key: "address",
              label: "Address",
              type: "textarea" as const,
              required: true,
            },
            {
              key: "business_logo",
              label: "Business Logo",
              type: "file" as const,
            },
            {
              key: "business_logo2",
              label: "Business Logo 2",
              type: "file" as const,
            },
            {
              key: "profile_photo",
              label: "Profile Photo",
              type: "file" as const,
            },
            { key: "website", label: "Website", type: "text" as const },
            { key: "instagram", label: "Instagram", type: "text" as const },
            { key: "facebook", label: "Facebook", type: "text" as const },
            { key: "youtube", label: "YouTube", type: "text" as const },
            { key: "twitter", label: "Twitter", type: "text" as const },
            { key: "telegram", label: "Telegram", type: "text" as const },
            { key: "whatsUp", label: "WhatsApp", type: "text" as const },
            { key: "zoom", label: "Zoom", type: "text" as const },
            { key: "google_meet", label: "Google Meet", type: "text" as const },
          ],
        };

      case "frame_categories":
        return {
          title: "Frame Categories",
          columns: [
            { key: "name", label: "Name", type: "text" as const },
            { key: "created_at", label: "Created At", type: "date" as const },
          ],
          fields: [
            {
              key: "name",
              label: "Category Name",
              type: "text" as const,
              required: true,
            },
          ],
        };

      case "frame_sub_categories":
        return {
          title: "Frame Sub Categories",
          columns: [
            {
              key: "frame_categories_id",
              label: "Parent Category",
              type: "select" as const,
            },
            { key: "name", label: "Name", type: "text" as const },
            { key: "created_at", label: "Created At", type: "date" as const },
          ],
          fields: [
            {
              key: "frame_categories_id",
              label: "Parent Category",
              type: "select" as const,
              required: true,
              options: data.frame_categories.map((cat) => ({
                value: cat.id,
                label: cat.name,
              })),
            },
            {
              key: "name",
              label: "Sub Category Name",
              type: "text" as const,
              required: true,
            },
          ],
        };

      case "frames":
        return {
          title: "Frames",
          columns: [
            {
              key: "frame_categories_id",
              label: "Category",
              type: "select" as const,
            },
            {
              key: "frame_sub_categories_id",
              label: "Sub Category",
              type: "select" as const,
            },
            { key: "status", label: "Status", type: "status" as const },
            { key: "created_at", label: "Created At", type: "date" as const },
          ],
          fields: [
            {
              key: "frame_categories_id",
              label: "Frame Category",
              type: "select" as const,
              required: true,
              options: data.frame_categories.map((cat) => ({
                value: cat.id,
                label: cat.name,
              })),
            },
            {
              key: "frame_sub_categories_id",
              label: "Frame Sub Category",
              type: "select" as const,
              required: true,
              options: data.frame_sub_categories.map((cat) => ({
                value: cat.id,
                label: cat.name,
              })),
            },
            {
              key: "frame_json",
              label: "Frame JSON",
              type: "textarea" as const,
              required: true,
            },
            {
              key: "status",
              label: "Status",
              type: "select" as const,
              required: true,
              options: [
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ],
            },
          ],
        };

      case "pricing_plans":
        return {
          title: "Pricing Plans",
          columns: [
            { key: "title", label: "Title", type: "text" as const },
            { key: "price", label: "Price", type: "text" as const },
            { key: "gst", label: "GST", type: "text" as const },
            { key: "days", label: "Days", type: "text" as const },
            { key: "created_at", label: "Created At", type: "date" as const },
          ],
          fields: [
            {
              key: "title",
              label: "Plan Title",
              type: "text" as const,
              required: true,
            },
            {
              key: "price",
              label: "Price",
              type: "number" as const,
              required: true,
            },
            {
              key: "gst",
              label: "GST Type",
              type: "select" as const,
              required: true,
              options: [
                { value: "exclusive", label: "Exclusive" },
                { value: "inclusive", label: "Inclusive" },
              ],
            },
            {
              key: "days",
              label: "Validity Days",
              type: "number" as const,
              required: true,
            },
            {
              key: "plan_permission",
              label: "Plan Permissions",
              type: "textarea" as const,
              required: true,
            },
          ],
        };

      case "subscriptions":
        return {
          title: "Subscriptions",
          columns: [
            { key: "user_id", label: "User", type: "select" as const },
            { key: "title", label: "Plan", type: "text" as const },
            { key: "price", label: "Price", type: "text" as const },
            {
              key: "subscription_status",
              label: "Status",
              type: "status" as const,
            },
            { key: "start_date", label: "Start Date", type: "date" as const },
            { key: "end_date", label: "End Date", type: "date" as const },
          ],
          fields: [
            {
              key: "user_id",
              label: "User",
              type: "select" as const,
              required: true,
              options: data.users.map((user) => ({
                value: user.id,
                label: user.name,
              })),
            },
            {
              key: "title",
              label: "Plan Title",
              type: "text" as const,
              required: true,
            },
            {
              key: "payment_id",
              label: "Payment ID",
              type: "text" as const,
              required: true,
            },
            {
              key: "price",
              label: "Price",
              type: "number" as const,
              required: true,
            },
            {
              key: "start_date",
              label: "Start Date",
              type: "date" as const,
              required: true,
            },
            {
              key: "end_date",
              label: "End Date",
              type: "date" as const,
              required: true,
            },
            {
              key: "gst_name",
              label: "GST Name",
              type: "text" as const,
              required: true,
            },
            {
              key: "gst_no",
              label: "GST Number",
              type: "text" as const,
              required: true,
            },
            { key: "remark", label: "Remark", type: "textarea" as const },
            {
              key: "status",
              label: "Status",
              type: "select" as const,
              required: true,
              options: [
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ],
            },
            {
              key: "total_days",
              label: "Total Days",
              type: "number" as const,
              required: true,
            },
            {
              key: "subscription_status",
              label: "Subscription Status",
              type: "select" as const,
              required: true,
              options: [
                { value: "pending", label: "Pending" },
                { value: "active", label: "Active" },
                { value: "expired", label: "Expired" },
              ],
            },
          ],
        };

      case "whatsup_messages":
        return {
          title: "WhatsApp Messages",
          columns: [
            { key: "user_id", label: "User", type: "select" as const },
            { key: "frame_id", label: "Frame", type: "select" as const },
            { key: "sent_time", label: "Sent Time", type: "date" as const },
            { key: "status", label: "Status", type: "status" as const },
            { key: "sent_count", label: "Sent Count", type: "text" as const },
            { key: "failed", label: "Failed", type: "text" as const },
          ],
          fields: [
            {
              key: "user_id",
              label: "User",
              type: "select" as const,
              required: true,
              options: data.users.map((user) => ({
                value: user.id,
                label: user.name,
              })),
            },
            { key: "image", label: "Image", type: "file" as const },
            {
              key: "frame_id",
              label: "Frame",
              type: "select" as const,
              required: true,
              options: data.frames.map((frame) => ({
                value: frame.id,
                label: `Frame ${frame.id}`,
              })),
            },
            {
              key: "sent_time",
              label: "Sent Time",
              type: "date" as const,
              required: true,
            },
            {
              key: "status",
              label: "Status",
              type: "select" as const,
              required: true,
              options: [
                { value: "sent", label: "Sent" },
                { value: "pending", label: "Pending" },
                { value: "failed", label: "Failed" },
              ],
            },
          ],
        };

      default:
        return {
          title: "Data",
          columns: [],
          fields: [],
        };
    }
  };

  const handleAdd = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setData((prev) => ({
        ...prev,
        [activeTable]: prev[activeTable].filter((item: any) => item.id !== id),
      }));
    }
  };

  const handleSubmit = (formData: any) => {
    if (editingItem) {
      // Update existing item
      setData((prev) => ({
        ...prev,
        [activeTable]: prev[activeTable].map((item: any) =>
          item.id === editingItem.id
            ? { ...formData, id: editingItem.id }
            : item
        ),
      }));
    } else {
      // Add new item
      const newItem = {
        ...formData,
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
      };
      setData((prev) => ({
        ...prev,
        [activeTable]: [...prev[activeTable], newItem],
      }));
    }
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const config = getTableConfig(activeTable);
  const currentData = data[activeTable] || [];

  // if (activeTable === "user_categories") {
  //   return <Category />;
  // }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar activeTable={activeTable} onTableChange={setActiveTable} />
      {activeTable === "user_categories" ? (
        <Category />
      ) : (
        <div className="flex-1 overflow-auto">
          <div>
            <div className="p-8">
              <DataTable
                title={config.title}
                columns={config.columns}
                data={currentData}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>

          <FormModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setEditingItem(null);
            }}
            title={
              editingItem
                ? `Edit ${config.title.slice(0, -1)}`
                : `Add New ${config.title.slice(0, -1)}`
            }
            fields={config.fields}
            data={editingItem}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
