import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';
import logoimage from "../../assets/logo/NeonGuard-VPN-logo.png";

const navigation = [
  { name: 'Главная', to: 'home-section' },
  { name: 'Тарифы VPN', to: 'pricing-section' },
  { name: 'О нас', to: 'about-section' },
  { name: 'Связаться', to: 'contact-section' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-950 backdrop-blur-lg opacity-80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 ">
          <Link to="home-section" smooth={true} duration={500} className="-m-1.5 p-1.5 cursor-pointer">
            <span className="sr-only">NeonGuard VPN</span>
            <img className="h-10 w-auto" src={logoimage} alt="/" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Открыть главное меню</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-sm font-semibold leading-6 text-gray-50 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            className="text-md font-semibold leading-6 text-white cursor-pointer"
          >
            Начать пользоваться <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-transparent backdrop-blur-lg opacity-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link to="home-section" smooth={true} duration={500} className="-m-1.5 p-1.5 cursor-pointer">
              <span className="sr-only">NeonGuard VPN</span>
              <img className="h-8 w-auto" src={logoimage} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Закрыть меню</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="contact-section"
                  smooth={true}
                  duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Начать пользоваться
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}