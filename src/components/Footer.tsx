import React from "react"

const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 bg-gray-100 w-full left-0 border-t-2 text-gray-700 text-xs px-5">
      <p className="leading-8 cursor-text select-none">Some Country</p>
      <hr />
      <div className="flex py-2 items-center content-center justify-between">
        <div className="flex">
          <p className="pr-5 leading-6 cursor-pointer select-none hover:underline">
            <a
              href="https://ads.google.com/intl/es-419_mx/h/?omesubid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000041-0000000001&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advertising
            </a>
          </p>
          <p className="pr-5 leading-6 cursor-pointer select-none hover:underline">
            <a
              href="https://smallbusiness.withgoogle.com/intl/es-419_mx/help/#!/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Business
            </a>
          </p>
          <p className="pr-5 leading-6 cursor-pointer select-none hover:underline">
            <a
              href="https://about.google/?utm_source=google-MX&utm_medium=referral&utm_campaign=hp-footer&fg=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Google
            </a>
          </p>
          <p className="pr-5 leading-6 cursor-pointer select-none hover:underline">
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
          <p className="pl-5 leading-6 cursor-pointer select-none hover:underline">
            <a
              href="https://policies.google.com/privacy?hl=es-419&fg=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
          </p>
          <p className="pl-5 leading-6 cursor-pointer select-none hover:underline">
            <a
              href="https://policies.google.com/terms?hl=es-419&fg=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
          </p>
          <p className="pl-5 leading-6 cursor-pointer select-none hover:underline">
            References
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
