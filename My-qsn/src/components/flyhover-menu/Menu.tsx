type Props = {
  name: string;
  image?: string;
  children?: string[];
};

export const Menu = ({ name,  children }: Props) => {
  return (
    <div className="group relative cursor-pointer flex flex-col items-center">
      {/* ICON */}
      <div className="w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center 
          group-hover:bg-blue-50 transition">
       
      </div>

      {/* TITLE */}
      <span className="text-sm font-semibold mt-2 text-gray-700 group-hover:text-blue-600 text-center">
        {name}
      </span>

      {/* DROPDOWN */}
      {children && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 
                        bg-white shadow-lg border rounded-lg p-4 w-48 hidden 
                        group-hover:block z-20">
          <ul className="space-y-2">
            {children.map((item, i) => (
              <li
                key={i}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
