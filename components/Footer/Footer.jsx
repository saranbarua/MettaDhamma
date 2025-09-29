export default function Footer() {
  return (
    <footer className="bg-primary-light text-white py-6">
      <div className="container p-2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-sm">
            🤝 আমাদের সাথে থাকুন আমাদের এই যাত্রা শুধু ধর্মচর্চা নয় – এটি
            অন্তরের আলোকিত পথের খোঁজ। আপনি যদি শান্তি, সমবেদনা ও প্রজ্ঞার
            অন্বেষক হয়ে থাকেন, তবে আপনি ঠিক জায়গাতেই এসেছেন।
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/events" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="/photo-gallery" className="hover:underline">
                Photo Gallery
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <ul className="space-y-1">
            <li>
              <span>Email: </span>
              <a href="mailto:info@example.com" className="hover:underline">
                mettadhamma969@gmail.com
              </a>
            </li>
            <li>
              <span>Phone: </span>
              <a href="tel:+966 53 857 8777" className="hover:underline">
                +880-1830113623
              </a>
            </li>
            <li>
              <span className="font-semibold">Address: </span>বায়েজিদ থানা
              কেন্দ্রীয় শান্তিকুঞ্জ বৌদ্ধ বিহার, মোহাম্মদ নগর, বায়েজিদ থানা
              সংলগ্ন, চট্টগ্রাম
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61559727202119"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        © 2025 Metta Dhamma. All rights reserved.
      </div>
      <div className=" text-center text-sm text-gray-400">
        Developed by{" "}
        <a
          href="https://www.makeupcoders.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Makeup Coders
        </a>
      </div>
    </footer>
  );
}
