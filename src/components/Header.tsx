import { links } from "@/data/links";
import Link from "next/link";

const Header = () => (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
        <nav
            aria-label="Navegação principal"
            className="mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-stone-900/10 bg-[#fffdf7]/90 p-1.5 shadow-xl shadow-black/20 backdrop-blur-xl"
        >
            <Link
                href="#intro"
                aria-label="Ir para o início"
                className="mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-700 text-xs font-bold text-[#fffdf7] transition-transform active:scale-95"
            >
                VF
            </Link>
                <ul className="flex shrink-0 items-center gap-0 sm:gap-1">
                {links.map((link) => (
                    <li key={link.hash}>
                        <Link
                            href={link.hash}
                            className="block whitespace-nowrap rounded-full px-2 py-2 text-[10px] text-stone-900/65 transition-[transform,color,background-color] duration-150 hover:bg-stone-900/10 hover:text-stone-900 focus-visible:text-stone-900 active:scale-[0.97] sm:px-3.5 sm:text-sm"
                        >
                            <span className="hidden sm:inline">{link.name}</span>
                            <span className="sm:hidden">{link.mobileName}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
