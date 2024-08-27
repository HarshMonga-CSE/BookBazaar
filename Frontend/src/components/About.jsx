import React from "react";

function About() {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 min-h-screen pt-20  ">
      <h1 className="text-6xl font-extrabold mb-4 text-center text-gray-900 dark:text-white underline">
        About Us
      </h1>
      <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 mt-12 ml-6">
        Welcome to BookBazaar, your ultimate destination for discovering,
        exploring, and purchasing your favorite books. At BookBazaar, we believe
        in the transformative power of literature and are dedicated to providing
        a diverse selection of books that cater to every reader’s needs and
        preferences.
      </p>
      <div className="mb-6">
        <h2 className="  text-4xl font-semibold text-gray-900 dark:text-white mb-4 mt-12 ml-6 underline">
          Our Mission
        </h2>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mt-6 ml-6">
          Our mission is to make reading accessible to everyone by offering a
          vast range of books at competitive prices. Whether you're a passionate
          reader, a student, or someone looking for the perfect gift, we are
          here to help you find the perfect book.
        </p>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4 mt-6 ml-6">
          We are committed to enhancing the reading experience by providing not
          just books, but a comprehensive resource that supports our customers'
          learning and enjoyment. Our user-friendly online platform ensures that
          finding and purchasing your next favorite book is a seamless
          experience.
        </p>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mt-6 ml-6">
          Whether you are seeking to advance your career with professional
          development books, or simply want to enjoy a captivating novel, our
          goal is to offer something for everyone. We continuously update our
          inventory to include the latest releases and timeless classics,
          ensuring that our collection remains relevant and diverse.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4 mt-12 ml-6 underline">
          Our Values
        </h2>
        <ul className=" text-2xl list-disc list-inside text-gray-700 dark:text-gray-300 mt-6 ml-6">
          <li>
            Customer Satisfaction: We prioritize our customers and strive to
            provide exceptional service and support.
          </li>
          <li>
            Quality Selection: We offer carefully curated books to ensure high
            quality and relevance.
          </li>
          <li>
            Accessibility: We aim to make books affordable and accessible to
            everyone.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4 mt-12 ml-6 underline">
          Our History
        </h2>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mt-6 ml-6">
          BookBazaar started as a small bookstore with a mission to make
          high-quality books accessible to everyone. Over the years, we have
          expanded our collection and grown into a leading online book retailer,
          continuously striving to improve and innovate.
        </p>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4 mt-6 ml-6">
          As we grew, we transitioned from a physical bookstore to a fully
          online platform, allowing us to reach customers far and wide. Our team
          worked diligently to build a user-friendly website and develop
          partnerships with publishers and authors to offer a diverse and
          comprehensive selection of books.
        </p>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4 mt-6 ml-6">
          Today, BookBazaar stands as a leading online book retailer, known for
          our dedication to quality and customer care. Our success is a
          testament to the support of our loyal customers and the hard work of
          our dedicated team. We look forward to continuing our journey and
          bringing the best of literature to readers around the world.
        </p>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mt-6 ml-6">
          Looking ahead, we remain committed to our core values and mission. We
          strive to continuously enhance our offerings, embrace new
          technologies, and adapt to the evolving needs of our customers. Thank
          you for being a part of our story and for supporting BookBazaar.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4 mt-12 ml-6 underline">
          Testimonials
        </h2>
        <div className="space-y-4">
          <blockquote className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
            <p className="text-2xl text-gray-700 dark:text-gray-300 mt-6 ml-6">
              “BookBazaar has an amazing selection of books and their customer
              service is top-notch. I found the perfect book for my needs and
              received it quickly.”
            </p>
            <footer className=" text-2xl mt-6 text-gray-600 dark:text-gray-400 ml-6">
              - Sarah Lee
            </footer>
          </blockquote>
          <blockquote className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
            <p className="text-2xl text-gray-700 dark:text-gray-300 mt-6 ml-6">
              “The website is easy to navigate and I love the recommendations.
              BookBazaar has become my go-to place for buying books.”
            </p>
            <footer className=" text-2xl mt-6 text-gray-600 dark:text-gray-400 ml-6">
              - Mark Turner
            </footer>
          </blockquote>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4 mt-12 ml-6 underline">
          Contact Us
        </h2>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mt-6 ml-6">
          Have any questions or feedback? Feel free to{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            contact us
          </a>
          . We would love to hear from you and are always here to assist.
        </p>
      </div>
    </div>
  );
}

export default About;
