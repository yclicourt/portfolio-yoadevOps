import { links } from "@/constants/links";

export const Ancor = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <a href={link.href} className={link.className}>
              {link.name}
            </a>
          </li>
        );
      })}
    </>
  );
};
