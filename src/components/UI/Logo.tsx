import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Rundoo from '../../images/Rundoo.svg';

function Logo() {
  return (
    <Link href="/" aria-label="Home">
      <a>
        <div className="w-32 flex items-center justify-center bg-neutral-800/95 rounded-sm">
          <Image src={Rundoo} width={80} height={50} />
        </div>
      </a>
    </Link>
  );
}

export default Logo;
