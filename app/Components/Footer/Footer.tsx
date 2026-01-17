import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 pb-0 footer relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-15">
          <div className="footer-content">
            <Link
              className="text-3xl lg:text-5xl font-bold Audiowide text-white"
              href="/"
            >
              Oli<span className="text-(--primary)">vion</span>
            </Link>

            <h2 className="text-gray-300 text-lg my-5 GolosText">
              We transform your vision into beautifully crafted spaces.
            </h2>

            <p className="text-gray-300 GolosText">
              5609 E Sprague Ave, Spokane Valley, WA 99212, USA
            </p>
          </div>

          <div className="footer-content py-3">
            <ul className="footer-links flex flex-col">
              <Link
                href="/UI-Components/Pages/About"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--primary) hover:ml-2"
              >
                About Us
              </Link>

              <Link
                href="/UI-Components/Pages/Services"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text(--primary)] hover:ml-2"
              >
                Services
              </Link>

              <Link
                href="/UI-Components/Pages/Gallery"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--primary) hover:ml-2"
              >
                Gallery
              </Link>

              <Link
                href="/UI-Components/Pages/Teams"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--primary) hover:ml-2"
              >
                Our Team
              </Link>

              <Link
                href="/UI-Components/Blogs"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--primary) hover:ml-2"
              >
                Blog
              </Link>

              <Link
                href="/UI-Components/Pages/Contact"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--primary) hover:ml-2"
              >
                Contact Us
              </Link>
            </ul>
          </div>
          <div className="footer-content py-3">
            <ul className="footer-links flex flex-col">
              <Link
                className="text-xl text-gray-300 GolosText mb-1 transition-all duration-300 hover:text-(--primary) hover:ml-2"
                href="/UI-Components/Projects"
              >
                Our Projects
              </Link>
              <a
                className="text-xl text-gray-300 GolosText mb-1 transition-all duration-300 hover:text-(--primary) hover:ml-2"
                href="/"
              >
                Partners
              </a>
              <a
                className="text-xl text-gray-300 GolosText mb-1 transition-all duration-300 hover:text-(--primary) hover:ml-2"
                href="/"
              >
                Partners Program
              </a>
              <a
                className="text-xl text-gray-300 GolosText mb-1 transition-all duration-300 hover:text-(--primary) hover:ml-2"
                href="/"
              >
                Affiliate Program
              </a>
              <a
                className="text-xl text-gray-300 GolosText mb-1 transition-all duration-300 hover:text-(--primary) hover:ml-2"
                href="/"
              >
                Terms &amp; Conditions
              </a>
              <a
                className="text-xl text-gray-300 GolosText mb-1 transition-all duration-300 hover:text-(--primary) hover:ml-2"
                href="/UI-Components/Pages/Contact"
              >
                Support Center
              </a>
            </ul>
          </div>
          <div className="footer-content flex flex-col py-3">
            <h2 className="text-3xl text-(--primary) underline  CalSans mb-3">
              +(084) 456-0789
            </h2>
            <h4 className="text-gray-300 GolosText text-2xl">
              Support@example.com
            </h4>
            <div className="footer-social flex gap-3 py-6 cursor-pointer">
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-(--primary) font-semibold">
                Facebook{" "}
              </p>
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-(--primary) font-semibold">
                Instagram
              </p>
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-(--primary) font-semibold">
                YouTube
              </p>
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-(--primary) font-semibold">
                Twitter
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom flex justify-center items-center py-8 border-t border-gray-500">
          <p className="text-gray-300 text-lg">
            © Copyright 2026. All Rights Reserved By
            <a
              className="transition-all duration-300 text-white text-xl hover:text-(--primary)"
              href="https://santhosh-vs-portfolio.vercel.app/"
            >
              {" "}
              Itssanthoshhere
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
