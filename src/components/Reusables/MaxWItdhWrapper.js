// Max Width for website
export default function MaxWidthWrapper({ children }) {
    return (
      <div className="max-w-6xl  mx-auto my-4 px-4 sm:px-6 lg:px-8 xl:px-10">
        {children}
      </div>
    );
  }
  