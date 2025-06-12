import { useState } from 'react';

const ResumeButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Reset loading state after 2 seconds
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <a
      href="/resume/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="px-4 py-2 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all flex items-center gap-2"
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-[#64ffda] border-t-transparent rounded-full animate-spin" />
      ) : null}
      Resume
    </a>
  );
};

export default ResumeButton;