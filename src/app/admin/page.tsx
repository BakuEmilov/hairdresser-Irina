import React from "react";
import AdminLayout from "./components/layout/AdminLayout";
import Customers from "./components/customers/Customers";

const AdminPage = () => {
  return (
    <AdminLayout>
      <Customers/>
    </AdminLayout>
  );
};

export default AdminPage;
