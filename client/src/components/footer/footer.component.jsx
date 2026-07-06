import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-8 md:mt-12 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-[#7a7a7a] tracking-wider uppercase">
        
        {/* Social Links */}
        {/* <div className="flex space-x-5 mb-4 sm:mb-0 text-[#803858]">
          <a href="#facebook" aria-label="Facebook" className="hover:opacity-75 transition-opacity">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
          </a>
          <a href="#instagram" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm2 12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8zm-6-7a3 3 0 100 6 3 3 0 000-6zm0 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path></svg>
          </a>
          <a href="#youtube" aria-label="YouTube" className="hover:opacity-75 transition-opacity">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"></path></svg>
          </a>
        </div> */}

        {/* Copyright */}
        <div>
          &copy; {new Date().getFullYear()} / Glowing Flowers, Plants & Gifts, Inc. All Rights Reserved.
        </div>
      </footer>
    )
}

export default Footer