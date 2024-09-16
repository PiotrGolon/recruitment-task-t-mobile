export const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto flex justify-center items-center py-6">
      {/* Copyright */}
      <div className="text-sm text-gray-700">
        © {new Date().getFullYear()} THN Stories. All rights reserved.
      </div>
    </footer>
  );
};
