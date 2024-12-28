import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container ml-44 grid grid-cols-4 gap-5 text-sm text-left">
        {/* Community Column */}
        <div>
          <h3 className="font-bold mb-3">COMMUNITY</h3>
          <ul>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                TWITTER
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                INSTAGRAM
              </a>
            </li>
          </ul>
        </div>

        {/* Products Column */}
        <div>
          <h3 className="font-bold mb-3">PRODUCTS</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                BUY
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                SIZE GUIDE
              </a>
            </li>
          </ul>
        </div>

        {/* Contact and Privacy Policies Column */}
        <div>
          <h3 className="font-bold mb-3">CONTACT</h3>
          <ul>
            <li>
              <a href="mailto:email@example.com" className="hover:underline">
                EMAIL
              </a>
            </li>
          </ul>
          <h3 className="font-bold mt-5 mb-3">PRIVACY POLICIES</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                TERMS AND CONDITIONS
              </a>
            </li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h3 className="font-bold mb-3">HELP</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                SUPPORT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
