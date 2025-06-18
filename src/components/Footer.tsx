import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container flex items-center justify-center">
        <p className="text-[10px] text-muted-foreground text-center">
          © {new Date().getFullYear()} <a href="https://dracoscopia.com" className="hover:text-neon-purple transition-colors">dracoscopia.com</a> • <a href="https://realmsz.com" className="hover:text-neon-blue transition-colors">realmsz.com</a> • v1.0.1 🐰
        </p>
      </div>
    </footer>
  );
};

export default Footer;