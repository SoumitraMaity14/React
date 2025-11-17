import { menuItems } from "./MenuList";
import { Menu } from "./Menu";

export const MegaMenu = () => {
  return (
    <section className="bg-white shadow-sm px-4 py-6 sticky top-0 z-50 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-center gap-8">
        {menuItems.map((item, index) => (
          <Menu
            key={index}
            name={item.name}
            
            children={item.children}
          />
        ))}
      </div>
    </section>
  );
};
