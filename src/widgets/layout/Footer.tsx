import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100  w-lvw py-6 text-center text-gray-700">
            <div className="container mx-auto flex flex-col items-center">
                <p className="mb-4">
                    &copy; {new Date().getFullYear()} AutoRepo. All rights
                    reserved.
                </p>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="/privacy" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:underline">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
