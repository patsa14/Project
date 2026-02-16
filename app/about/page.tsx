import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | UTO Advance</title>
      </Head>

      <main className="min-h-screen bg-gray-100">


        {/* ===== HERO SECTION ===== */}
        <section
          className="relative h-[420px] flex items-center justify-center text-center text-white"
          style={{ backgroundImage: "url('/images/ABOUT_UTO.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
              About UTO Advance
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              Engineering innovation with precision, integrity, and long-term vision.
            </p>
          </div>
        </section>

        {/* ===== MISSION ===== */}
        <section className="py-20 px-6 md:px-16 bg-[#f5f7fa]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
              Our Mission
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At UTO Advance Engineering, our mission is to deliver intelligent
              and sustainable engineering solutions that elevate communities and
              improve everyday living. We combine technical excellence with
              innovative thinking to create lasting value for our clients.
            </p>
          </div>
        </section>

        {/* ===== VALUES ===== */}
       <section className="py-20 bg-slate-300 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our Core Values
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Innovation",
                description:
                  "We continuously explore new technologies and methods to deliver smarter engineering solutions.",
              },
              {
                title: "Integrity",
                description:
                  "We operate with transparency, honesty, and accountability in every project we undertake.",
              },
              {
                title: "Sustainability",
                description:
                  "We design and implement systems that promote environmental responsibility and long-term efficiency.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-24 bg-sky-800 text-white text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Let’s Build the Future Together
            </h2>

            <p className="mt-6 text-gray-300 text-lg">
              Contact us today to discuss <br />
              how we can support your next project with precision and excellence.
            </p>

            <Link href="/contact">
              <button className="mt-10 px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-200 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2024 UTO Advance Engineering. All rights reserved.
          </p>

          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/uto_advance_engineering/"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>

      </main>
    </>
  );
}
