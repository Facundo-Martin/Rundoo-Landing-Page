import Image from 'next/image';
import Logo from '../UI/Logo';
import AppStoreDownload from '../../assets/AppStoreDownload.svg';
import GooglePlayDownload from '../../assets/GooglePlayDownload.png';
import { footerNavigation } from '../../utils/data';

export default function Footer() {
  return (
    <footer className="section pb-2 wrapper global-style" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo />
            <p className="text-base text-gray-500">Buy Materials Better</p>
            <div className="flex items-center space-x-6">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name} className="cursor-default">
                      <p className="text-base text-gray-500 hover:text-gray-900">{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name} className="cursor-default">
                      <p className="text-base text-gray-500 hover:text-gray-900">{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} target="_blank" rel="noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} target="_blank" rel="noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end pr-10 mt-6">
          <div className="flex items-center gap-1">
            <a href="https://play.google.com/store/apps/details?id=com.runner.runner&hl=en_US&gl=US" target="_blank" rel="noreferrer">
              <Image src={GooglePlayDownload} width={150} height={48} alt="Download on Google Play Store" />
            </a>
            <a href="https://apps.apple.com/us/app/rundoo/id1530734240" target="_blank" rel="noreferrer">
              <Image src={AppStoreDownload} width={185} height={80} alt="Download on the App Store" />
            </a>
          </div>
        </div>
        <div className="mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 border-t border-gray-200 pt-8">
          <div className="flex justify-center space-x-6 md:order-2"></div>
          <div className="md:order-1 md:mt-0">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()}{' '}
              <a href="https://facundomartin.io" target="_blank" rel="noreferrer" className="font-medium underline">
                Facundo Martin
              </a>{' '}
              for Rundoo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
