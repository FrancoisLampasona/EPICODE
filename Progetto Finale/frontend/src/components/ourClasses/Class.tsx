type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
    h-full w-full flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90 rounded-2xl`;

  return (
    <li
      className="relative mx-3 inline-block 
        h-[420px] w-[320px] 
        sm:h-[420px] sm:w-[320px] 
        md:h-[450px] md:w-[450px] 
        rounded-2xl overflow-hidden"
    >
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        {description && <p className="mt-5 text-sm">{description}</p>}
      </div>
      <img
        alt={name}
        src={image}
        className="h-full w-full object-cover rounded-2xl"
      />
    </li>
  );
};

export default Class;
