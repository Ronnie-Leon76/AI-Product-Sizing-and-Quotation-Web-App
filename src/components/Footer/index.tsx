import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Product Sizing and Quotation</h3>
            <p className="text-sm">Revolutionizing energy quotations with AI</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic">
              <p>PossibleAI</p>
              <p>Nairobi, Kenya</p>
              <p>Email: info@possibleai.tech</p>
              <p>Phone: +254 (0)710188479</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white"><Facebook /></Link>
              <Link href="#" className="hover:text-white"><Twitter /></Link>
              <Link href="#" className="hover:text-white"><Linkedin /></Link>
              <Link href="#" className="hover:text-white"><Mail /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-700 text-center">
          <p>&copy; 2024 PossibleAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}