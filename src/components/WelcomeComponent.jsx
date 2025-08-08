import React from "react";

const WelcomeComponent = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card text-center shadow-lg">
            <div className="card-header">
              Welcome To My SmartLife Web Application!
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Actions</h5>
              <p className="card-text">
                Manage your tasks and track your expenses easily.
              </p>

              <div className="d-flex justify-content-around">
                <a href="/todos" className="btn btn-primary">
                  📝 Todo List
                </a>
                <a href="/expenses" className="btn btn-success">
                  💰 Expenses
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
