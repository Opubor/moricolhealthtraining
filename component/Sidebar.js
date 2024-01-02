import Link from "next/link";
import React from "react";

function Sidebar({children}) {
  return (
    <div className="d-flex min-vh-100" id="wrapper">
      <div className="bg-warning min-vh-100 border-right col-md-2" id="sidebar">
        <h4 className="sidebar-heading p-2 bg-warning h-4 fw-bold px-4">MORICOL</h4>
        <div className="list-group list-group-flush">
          <Link
            href="/admin/dashboard"
            className="list-group-item list-group-item-action p-2 px-4"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/users"
            className="list-group-item list-group-item-action p-2 px-4"
          >
            Users
          </Link>
          <Link
            href="/admin/enrolledStudents"
            className="list-group-item list-group-item-action p-2 px-4"
          >
            Enrollments
          </Link>

          <Link
            href="/admin/account"
            className="list-group-item list-group-item-action p-2 px-4"
          >
            Payments
          </Link>
          {/* Add more menu items as needed */}
        </div>
      </div>{" "}
      <div className="p-4">
       {children}
      </div>
    </div>
  );
}

export default Sidebar;
