import Link from "next/link";
import { FadeIn } from '../components/Animations';

export const metadata = {
  title: "Privacy Policy | Maryan Sobchuk",
  description: "Privacy policy for Maryan Sobchuk's website.",
};

export default function PrivacyPolicy() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(5,5,16,0.88)', backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(0,245,255,0.07)',
        width: '100%',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 64 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem' }}>
                <span className="gradient-text">Maryan</span>
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '1rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>Sobchuk</span>
            </Link>
          </div>
        </div>
      </nav>

      <section style={{ padding: '150px 20px 100px', maxWidth: 800, margin: '0 auto' }}>
        <FadeIn>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontFamily: 'var(--font-display)', marginBottom: 40 }}>
            <span className="gradient-text">Privacy Policy</span>
          </h1>

          <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 20 }}>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: 40, marginBottom: 16 }}>
              1. Information Collection
            </h2>
            <p style={{ marginBottom: 20 }}>
              When you use the contact form on this website, we may collect personal information such as your name, email address, and the details of your project or inquiry. This information is used solely for the purpose of responding to your request and providing our web development services.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: 40, marginBottom: 16 }}>
              2. Use of Information
            </h2>
            <p style={{ marginBottom: 20 }}>
              Any information we collect from you may be used to:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: 20, marginBottom: 20 }}>
              <li>Personalize your experience and respond better to your individual needs.</li>
              <li>Improve customer service and support needs.</li>
              <li>Process transactions or establish communication regarding your project.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: 40, marginBottom: 16 }}>
              3. Information Protection
            </h2>
            <p style={{ marginBottom: 20 }}>
              We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: 40, marginBottom: 16 }}>
              4. Cookies
            </h2>
            <p style={{ marginBottom: 20 }}>
              This website uses analytics tools (such as Vercel Analytics) that may use cookies to understand site usage and improve user experience. You can choose to disable cookies through your browser settings.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: 40, marginBottom: 16 }}>
              5. Consent
            </h2>
            <p style={{ marginBottom: 20 }}>
              By using our site and submitting the contact form, you consent to our privacy policy.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: 40, marginBottom: 16 }}>
              6. Contacting Us
            </h2>
            <p style={{ marginBottom: 20 }}>
              If there are any questions regarding this privacy policy, you may contact us using the information below:
            </p>
            <p>
              Email: maryanlikesyou@gmail.com<br />
              Telegram: @maryansobchuk
            </p>
          </div>
        </FadeIn>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '50px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Maryan Sobchuk. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
