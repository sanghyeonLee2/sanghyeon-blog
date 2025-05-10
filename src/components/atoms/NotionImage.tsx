const NotionImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="shadow-[var(--shadow)] h-auto transition-all duration-200 ease-in-out hover-opacity mx-auto overflow-hidden max-w-full ">
      <img src={src} alt={alt} className="w-auto max-w-full h-auto block" />
    </div>
  );
};
export default NotionImage;
