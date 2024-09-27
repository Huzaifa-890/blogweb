'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from "@/components/ui/button"// Assuming you have a Button component

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="background/50 sticky top-0 backdrop-blur p-4">
            <div className="container mx-auto flex justify-between border-b pb-6 items-center">
                <div className=" text-2xl font-bold">
                    <Link href="/">
                        <span>HuzaifaBlog</span>
                    </Link>
                </div>
                <div className="space-x-4 hidden sm:flex">
                    <Link href="/">
                        <span className="hover:underline">Home</span>
                    </Link>
                    <Link href="/about">
                        <span className="hover:underline">About</span>
                    </Link>
                    <Link href="/contact">
                        <span className="hover:underline">Contact</span>
                    </Link>
                </div>
                <div className="flex gap-3 hidden sm:flex">
                    <Button variant="outline">Login</Button>
                    <Button variant="outline">Signup</Button>
                </div>
                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden flex flex-col items-center space-y-4 mt-4">
                    <Link href="/">
                        <span className="hover:underline">Home</span>
                    </Link>
                    <Link href="/about">
                        <span className="hover:underline">About</span>
                    </Link>
                    <Link href="/contact">
                        <span className="hover:underline">Contact</span>
                    </Link>
                    <Button variant="outline">Login</Button>
                    <Button variant="outline">Signup</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
