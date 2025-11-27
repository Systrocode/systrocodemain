import Link from 'next/link';
import { NavbarMT } from '@/components/NavbarMT';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <div className='overflow-hidden w-full'>
        <NavbarMT />
        <section className="section py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-center">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8 text-center">
              The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="btn btn-lg btn-accent">
                Back to Blog
              </Link>
              <Link href="/" className="btn btn-lg btn-outline">
                Go to Homepage
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
