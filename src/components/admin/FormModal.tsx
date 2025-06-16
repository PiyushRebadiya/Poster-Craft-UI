import React, { useEffect } from "react";
import { Formik } from "formik";
import { X, Upload } from "lucide-react";

interface FormField {
  key: string;
  label: string;
  type: "text" | "textarea" | "select" | "file";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fields: FormField[];
  data?: any;
  onSubmit: (data: any) => void;
  loading?: boolean;
  initialValues?: { [key: string]: any };
  validate?: (values: { [key: string]: any }) => { [key: string]: string };
}

export default function FormModal({
  isOpen,
  onClose,
  title,
  fields,
  data,
  onSubmit,
  loading = false,
  initialValues = {},
  validate,
}: FormModalProps) {
  const [fileData, setFileData] = React.useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (data) {
      const filledValues: { [key: string]: any } = {};
      fields.forEach((field) => {
        filledValues[field.key] = data[field.key.toLowerCase()] || "";
      });
      Object.assign(initialValues, filledValues);
    }
  }, [data, fields]);

  const handleFileChange = (
    key: string,
    file: File | null,
    setFieldValue: (field: string, value: any) => void
  ) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        setFieldValue(key, base64);
        setFileData((prev) => ({ ...prev, [key]: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Formik Form */}
        <Formik
          initialValues={initialValues}
          validate={validate}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fields.map((field) => {
                  console.log(field);
                  return (
                    <div
                      key={field.key}
                      className={
                        field.type === "textarea" ? "md:col-span-2" : ""
                      }
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                        {field.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>

                      {field.type === "select" ? (
                        <select
                          name={field.key}
                          value={values[field.key] || ""}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={field.required}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="">Select {field.label}</option>
                          {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          name={field.key}
                          value={values[field.key] || ""}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={field.required}
                          placeholder={field.placeholder}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      ) : field.type === "file" ? (
                        <div>
                          <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-4 text-gray-500" />
                                <p className="mb-2 text-sm text-gray-500">
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">
                                  PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) =>
                                  handleFileChange(
                                    field.key,
                                    e.target.files?.[0] || null,
                                    setFieldValue
                                  )
                                }
                              />
                            </label>
                          </div>
                          {values[field.key] && (
                            <div className="mt-2">
                              <img
                                src={values[field.key]}
                                alt="Preview"
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        <>
                          <input
                            type={field.type}
                            name={field.key}
                            value={values[field.key] || ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={field.placeholder}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-transparent ${
                              errors[field.key] && touched[field.key]
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          {errors[field.key] && touched[field.key] && (
                            <div className="text-sm text-red-500 mt-1">
                              {errors[field.key]}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {loading && (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  )}
                  <span>{data ? "Update" : "Create"}</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
