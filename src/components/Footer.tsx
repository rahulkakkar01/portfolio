

const Footer = () => {
  return (
    <footer className="py-6 px-4 text-center text-slate text-xs sm:text-sm font-mono mb-20 lg:mb-0">
      <div className="mb-4">
        <p>Designed & Built by Rahul Kakkar</p>
      </div>
      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
        <a
          href="https://github.com/rahulkakkar01"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green transition-colors"
        >
          <span>★ {Math.floor(Math.random() * 1000)}</span>
        </a>
        <span>⋅</span>
        <a
          href="https://github.com/rahulkakkar01"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green transition-colors"
        >
          <span>↳ {Math.floor(Math.random() * 1000)}</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
