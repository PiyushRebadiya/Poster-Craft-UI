import React, { useEffect, useState } from "react";
import api from "../../../network/api";
import DataTable from "../DataTable";
import FormModal from "../FormModal";
import { data } from "autoprefixer";

const Category = () => {
  const [category, setCategory] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState();
  const [page, setPage] = useState(1);

  const categoryFields = [
    {
      key: "Name",
      label: "Category Name",
      type: "text",
      required: true,
    },
  ];

  const getCategory = () => {
    api
      .getCategory({ Page: page, PageSize: 10 })
      .then((data) => {
        if (data.status === 200 && data.statusText === "OK") {
          setCategory(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCategory = (formData) => {
    api
      .addCategory(formData)
      .then((response) => {
        if (response.status === 200 && response.statusText === "OK") {
          getCategory();
        }
      })
      .catch((error) => {
        console.log(error.response?.data || error.message);
      });
  };

  const updateCategory = (formData) => {
    api
      .updateCategory(formData)
      .then((response) => {
        if (response.status === 200 && response.statusText === "OK") {
          getCategory();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const deleteCategory = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      api
        .deleteCategory({ Id: id })
        .then((response) => {
          if (response.status === 200 && response.statusText === "OK") {
            getCategory();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getCategory();
  }, [page]);

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    console.log("item", item);
    setIsModalOpen(true);
  };

  const handleSubmit = (formData) => {
    editingItem ? addCategory() : updateCategory();
    setIsModalOpen(false);
    addCategory(formData);
  };

  const handleValidate = (value) => {
    const errors = {};
    if (!value.Name) {
      errors.Name = "Name is Required";
    }
    return errors;
  };

  return (
    <div className="flex-1 overflow-auto">
      {category.data && (
        <div>
          <div className="p-8">
            <DataTable
              title="Category"
              data={category.data}
              onAdd={handleAdd}
              onEdit={handleEdit}
              onDelete={deleteCategory}
              totalLength={category.totalLength}
              currentPage={page}
              handlePreviousPage={() => {
                console.log(page);
                if (page > 1) setPage(page - 1);
              }}
              handleNextPage={() => {
                if (Math.ceil(category.totalLength / 10) > page) {
                  setPage(page + 1);
                }
              }}
            />
          </div>
        </div>
      )}

      <FormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingItem(null);
        }}
        title="Add New Category"
        fields={categoryFields}
        initialValues={{ Name: "" }}
        validate={handleValidate}
        data={editingItem}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Category;
