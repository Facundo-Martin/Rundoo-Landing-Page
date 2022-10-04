import Image from 'next/image';
import AppStoreDownload from '../../images/AppStoreDownload.svg';
import GooglePlayDownload from '../../images/GooglePlayDownload.png';

function RenderCTA() {
  return (
    <section className="section wrapper">
      <div
        className="relative grid items-center grid-cols-1 gap-10 p-12 overflow-hidden shadow-2xl md:p-16 lg:p-20 xl:p-24 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl md:grid-cols-5 lg:gap-0"
        data-primary="green-400"
        data-rounded="rounded-2xl"
        data-rounded-max="rounded-full"
      >
        <div className="absolute bottom-0 left-0 h-full">
          <svg viewBox="0 0 487 487" className="w-auto h-full opacity-75 object-stretch" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
              fill="#FFF"
              fill-rule="nonzero"
              fill-opacity=".1"
              className=""
            ></path>
          </svg>
        </div>

        <div className="relative z-30 col-span-1 md:col-span-3">
          <h2 className="mb-1 text-3xl font-bold leading-tight text-white md:mb-3 md:text-3xl lg:text-4xl xl:text-5xl">Ready to get started?</h2>
          <p className="max-w-sm my-6 text-base font-normal text-white xl:max-w-lg lg:pr-0 pr-7 lg:text-xl" data-primary="green-400">
            Rundoo was designed to make your ordering process as easy as possible. Get it now!
          </p>
          <div className="flex items-center gap-1">
            <a href="https://play.google.com/store/apps/details?id=com.runner.runner&hl=en_US&gl=US" target="_blank" rel="noreferrer">
              <Image src={GooglePlayDownload} width={150} height={48} />
            </a>
            <a href="https://apps.apple.com/us/app/rundoo/id1530734240" target="_blank" rel="noreferrer">
              <Image src={AppStoreDownload} width={185} height={80} />
            </a>
          </div>
        </div>
        <div className="flex items-center h-full col-span-1 md:col-span-2">
          <img
            src="https://cdn.devdojo.com/images/march2021/dashboard.jpg"
            className="relative top-0 right-0 object-cover w-full -mr-1 rounded md:max-w-sm md:w-auto max-w-none lg:absolute lg:max-w-md xl:max-w-lg lg:mt-9"
            alt="Dashboard"
          />
        </div>
      </div>
    </section>
  );
}

export default RenderCTA;
