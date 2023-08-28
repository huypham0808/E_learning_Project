import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-warning p-3 m-0 text-center mainFooter w-100">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} E-learning Platform. All rights reserved.</p>
                <p>Contact us: example@example.com</p>
            </div>
        </footer>
  )
};
