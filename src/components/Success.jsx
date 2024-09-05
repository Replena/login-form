import React from 'react';

export default function Success() {
  return (
    <div className="success-container">
      <h1>Login Successful!</h1>
      <p>Congratulations! You have successfully logged in.</p>
      <p>
        <a href="/">Go back to login</a>
      </p>
    </div>
  );
}
