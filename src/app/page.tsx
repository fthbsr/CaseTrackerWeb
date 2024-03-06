import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="py-6 space-y-6">
        <div className="container px-4 md:px-6">
          <div className="prose prose-gray max-w-none mx-auto">
            <div className="pb-4 space-y-2 border-b border-gray-200 dark:border-gray-800">
              <h1 className="text-3xl font-bold">Terms of Use</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Please read these terms and conditions carefully before using
                our website.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold">1. Terms</h2>
                <p>
                  By accessing the website at
                  <Link className="underline" href="#">
                    https://example.com
                  </Link>
                  , you are agreeing to be bound by these terms of service, all
                  applicable laws and regulations, and agree that you are
                  responsible for compliance with any applicable local laws. If
                  you do not agree with any of these terms, you are prohibited
                  from using or accessing this site. The materials contained in
                  this website are protected by applicable copyright and
                  trademark law.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">2. Use License</h2>
                <ol className="pl-8 list-decimal">
                  <li>
                    Permission is granted to temporarily download one copy of
                    the materials (information or software) on Example's website
                    for personal, non-commercial transitory viewing only. This
                    is the grant of a license, not a transfer of title, and
                    under this license you may not:
                    <ul className="pl-8 list-disc">
                      <li>modify or copy the materials;</li>
                      <li>
                        use the materials for any commercial purpose, or for any
                        public display (commercial or non-commercial);
                      </li>
                      <li>
                        attempt to decompile or reverse engineer any software
                        contained on Example's website;
                      </li>
                      <li>
                        remove any copyright or other proprietary notations from
                        the materials; or
                      </li>
                      <li>
                        transfer the materials to another person or "mirror" the
                        materials on any other server.
                      </li>
                    </ul>
                  </li>
                  <li>
                    This license shall automatically terminate if you violate
                    any of these restrictions and may be terminated by Example
                    at any time. Upon terminating your viewing of these
                    materials or upon the termination of this license, you must
                    destroy any downloaded materials in your possession whether
                    in electronic or printed format.
                  </li>
                </ol>
              </div>
              <div>
                <h2 className="text-2xl font-bold">3. Disclaimer</h2>
                <p>
                  The materials on Example's website are provided on an 'as is'
                  basis. Example makes no warranties, expressed or implied, and
                  hereby disclaims and negates all other warranties including,
                  without limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">4. Limitations</h2>
                <p>
                  In no event shall Example or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use the materials on Example's
                  website, even if Example or a Example authorized
                  representative has been notified orally or in writing of the
                  possibility of such damage. Because some jurisdictions do not
                  allow limitations on implied warranties, or limitations of
                  liability for consequential or incidental damages, these
                  limitations may not apply to you.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">5. Accuracy of materials</h2>
                <p>
                  The materials appearing on Example's website could include
                  technical, typographical, or photographic errors. Example does
                  not warrant that any of the materials on its website are
                  accurate, complete or current. Example may make changes to the
                  materials contained on its website at any time without notice.
                  However Example does not make any commitment to update the
                  materials.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">6. Links</h2>
                <p>
                  Example has not reviewed all of the sites linked to its
                  website and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply
                  endorsement by Example of the site. Use of any such linked
                  website is at the user's own risk.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">7. Modifications</h2>
                <p>
                  Example may revise these terms of service for its website at
                  any time without notice. By using this website you are
                  agreeing to be bound by the then current version of these
                  terms of service.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of the United States and you
                  irrevocably submit to the exclusive jurisdiction of the courts
                  in that State or location.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-2 text-sm md:flex-row md:justify-between md:gap-1">
              <p className="text-gray-500 dark:text-gray-400">
                © 2023 Example. All rights reserved.
              </p>
              <nav className="flex gap-4 text-base">
                <Link className="underline" href="#">
                  Terms of Use
                </Link>
                <Link className="underline" href="#">
                  Privacy Policy
                </Link>
                <Link className="underline" href="#">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
