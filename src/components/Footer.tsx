import React from 'react'
import FooterLink from './FooterLink'

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 hidden w-full px-5 text-xs text-gray-700 bg-gray-100 border-t-2 lg:block">
      <p className="select-none leading-8 cursor-text">Some Country</p>
      <hr />
      <div className="flex items-center content-center justify-between py-2">
        <div className="flex">
          <FooterLink
            url="https://ads.google.com/intl/es-419_mx/getstarted/?subid=mx-es-ha-awa-bk-c-cor!o3~CjwKCAjw64eJBhAGEiwABr9o2JL1fD_lak-i_sGGmM9vhE2W9AsaNaRUVsn7O0Z9yCvAJB9kfqqW6RoC2jQQAvD_BwE~78045488589~kwd-94527731~6518825888~435570599485&gclsrc=ds&gclsrc=ds"
            text="Advertising"
          />

          <FooterLink
            url="https://smallbusiness.withgoogle.com/intl/es-419_mx/help/#!/"
            text="Business"
          />

          <FooterLink
            url="https://about.google/?utm_source=google-MX&utm_medium=referral&utm_campaign=hp-footer&fg=1"
            text="About"
          />

          <FooterLink url="https://www.google.com/search/howsearchworks/" text="How Search works" />
        </div>
        <div className="flex">
          <FooterLink url="https://policies.google.com/privacy?hl=es-419&fg=1" text="Privacy" />
          <FooterLink url="https://policies.google.com/terms?hl=es-419&fg=1" text="Terms" />
          <FooterLink url="/" text="References" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
