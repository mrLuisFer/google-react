import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 hidden w-full px-5 text-xs text-gray-700 bg-gray-100 border-t-2 lg:block">
      <p className="select-none leading-8 cursor-text">Some Country</p>
      <hr />
      <div className="flex items-center content-center justify-between py-2">
        <div className="flex">
          <p className="pr-5 cursor-pointer select-none leading-6 hover:underline">
            <a
              href="https://ads.google.com/intl/es-419_mx/getstarted/?subid=mx-es-ha-awa-bk-c-cor!o3~CjwKCAjw64eJBhAGEiwABr9o2JL1fD_lak-i_sGGmM9vhE2W9AsaNaRUVsn7O0Z9yCvAJB9kfqqW6RoC2jQQAvD_BwE~78045488589~kwd-94527731~6518825888~435570599485&gclsrc=ds&gclsrc=ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advertising
            </a>
          </p>
          <p className="pr-5 cursor-pointer select-none leading-6 hover:underline">
            <a
              href="https://smallbusiness.withgoogle.com/intl/es-419_mx/help/#!/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Business
            </a>
          </p>
          <p className="pr-5 cursor-pointer select-none leading-6 hover:underline">
            <a
              href="https://about.google/?utm_source=google-MX&utm_medium=referral&utm_campaign=hp-footer&fg=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Google
            </a>
          </p>
          <p className="pr-5 cursor-pointer select-none leading-6 hover:underline">
            <a
              href="https://www.google.com/search/howsearchworks/?fg=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              How Search works
            </a>
          </p>
        </div>
        <div className="flex">
          <p className="pl-5 cursor-pointer select-none leading-6 hover:underline">
            <a
              href="https://policies.google.com/privacy?hl=es-419&fg=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
          </p>
          <p className="pl-5 cursor-pointer select-none leading-6 hover:underline">
            <a
              href="https://policies.google.com/terms?hl=es-419&fg=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
          </p>
          <p className="pl-5 cursor-pointer select-none leading-6 hover:underline">
            References
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
