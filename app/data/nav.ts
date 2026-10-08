// ✏️ MENU HEADER + LINK CHÂN TRANG
import { profile } from "./profile";

export const navLinks = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#skills", label: "Kỹ năng" },
  { href: "#projects", label: "Dự án nổi bật", active: true },
  { href: "#experience", label: "Kinh nghiệm" },
  { href: "#contact", label: "Liên hệ" },
];

export const footerLinks = [
  { href: profile.linkedin, label: "Hồ sơ LinkedIn", external: true },
  { href: profile.github, label: "Kho GitHub", external: true },
  { href: profile.tableau, label: "Data Studio Public", external: true },
  { href: "#resume", label: "CV (PDF)", external: false },
  { href: "#pgp", label: "Khóa PGP", external: false },
];
