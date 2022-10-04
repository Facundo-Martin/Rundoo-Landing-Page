import { SVGProps } from 'react';
import Image from 'next/image';
import Logo from '../UI/Logo';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../UI/SocialIcons';
import AppStoreDownload from '../../images/AppStoreDownload.svg';
import GooglePlayDownload from '../../images/GooglePlayDownload.png';

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: 'https://www.linkedin.com/company/rundoo/' },
    { name: 'Careers', href: 'https://jobs.ashbyhq.com/rundoo' },
  ],
  legal: [
    { name: 'Privacy', href: 'https://www.getrundoo.com/privacy-policy' },
    { name: 'Terms', href: 'https://www.getrundoo.com/privacy-policy' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.linkedin.com/company/rundoo/',
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://www.linkedin.com/company/rundoo/',
      icon: TwitterIcon,
    },
    {
      name: 'GitHub',
      href: 'https://www.linkedin.com/company/rundoo/',
      icon: GithubIcon,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/rundoo/',
      icon: LinkedInIcon,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="section wrapper global-style" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo />
            <p className="text-base text-gray-500">Buy Materials Better</p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name} className="cursor-default">
                      <p className="text-base text-gray-500 hover:text-gray-900">{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
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
                  {navigation.company.map((item) => (
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
                  {navigation.legal.map((item) => (
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
              <Image src={GooglePlayDownload} width={150} height={48} />
            </a>
            <a href="https://apps.apple.com/us/app/rundoo/id1530734240" target="_blank" rel="noreferrer">
              <Image src={AppStoreDownload} width={185} height={80} />
            </a>
          </div>
        </div>
        <div className="mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 border-t border-gray-200 pt-6 mt-4">
          <div className="flex justify-center space-x-6 md:order-2"></div>
          <div className="mt-8 md:order-1 md:mt-0">
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
