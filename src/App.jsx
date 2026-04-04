import React, { useState, useEffect } from 'react';
import './index.css';

const MOCK_POSTS = [
  { id: 1, image: 'https://instagram.famd6-2.fna.fbcdn.net/v/t51.71878-15/571753647_848482474525975_5280374901928575761_n.jpg?stp=c0.247.640.640a_dst-jpg_e15_s150x150_tt6&_nc_ht=instagram.famd6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Y4iVN6La-DkQ7kNvwGKI_AD&_nc_gid=GE3A-i5bvb_WoaX-iCJKQQ&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af2C0t73EQQJLRq0CAKJD4kEsUO6sbCRj9NNKh5gq1Uodg&oe=69D64204&_nc_sid=94fea1', fb: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&w=600&q=80', title: 'Doodleiyat', likes: 124 },
  { id: 2, image: 'https://instagram.famd6-1.fna.fbcdn.net/v/t51.71878-15/569650193_769308712762491_6806976709270537972_n.jpg?stp=c0.418.1080.1080a_dst-jpg_e15_s150x150_tt6&_nc_ht=instagram.famd6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=8gcxXQexQSYQ7kNvwHTyI49&_nc_gid=GE3A-i5bvb_WoaX-iCJKQQ&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af2C57LBQ91DLZZIaBbcEg6er85fnIFq9h1KciGt-Fx19Q&oe=69D63F1F&_nc_sid=94fea1', fb: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80', title: 'Cinematic', likes: 302 },
  { id: 3, image: 'https://instagram.famd6-1.fna.fbcdn.net/v/t51.71878-15/475405312_653725077217566_6121104572740200562_n.jpg?stp=c0.247.640.640a_dst-jpg_e15_s150x150_tt6&_nc_ht=instagram.famd6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=9d-mnEW9ejoQ7kNvwFOoE0L&_nc_gid=GE3A-i5bvb_WoaX-iCJKQQ&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af3ZR5bV0kSHcOtz1Zua3fD5VBKLYUjDii3Viu5K-fxJrw&oe=69D622EB&_nc_sid=94fea1', fb: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80', title: 'Artsy Quote', likes: 189 },
  { id: 4, image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=600&q=80', fb: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=600&q=80', title: 'Dark Room', likes: 215 },
  { id: 5, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80', fb: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80', title: 'Abstract Sketching', likes: 410 },
  { id: 6, image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80', fb: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80', title: 'Himachal Landscapes', likes: 512 },
  { id: 7, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80', fb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80', title: 'Starry Night', likes: 300 },
  { id: 8, image: 'https://images.unsplash.com/photo-1503673414902-8a9d17dcb104?auto=format&fit=crop&w=600&q=80', fb: 'https://images.unsplash.com/photo-1503673414902-8a9d17dcb104?auto=format&fit=crop&w=600&q=80', title: 'Urban Monochrome', likes: 142 },
  { id: 9, image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&w=600&q=80', fb: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&w=600&q=80', title: 'Likhai Moments', likes: 504 },
];

const PROFILE_PIC = "https://instagram.famd6-2.fna.fbcdn.net/v/t51.2885-19/274846433_497480278631363_5159682355444385568_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=111&_nc_ohc=6dZu50502fMQ7kNvwH3JMv_&_nc_gid=CPlwos2U0S-uKx0v-MBnIw&ccb=7-5&oh=00_Af0aBhk_w3H835ohc6td17cJ5ECT6rP-vFFdqP8ec7LeSw&oe=69D635FF&_nc_sid=8b3546";
const FALLBACK_PROFILE = "https://ui-avatars.com/api/?name=Asliyat&background=E2A91D&color=111&size=512";

const ImageWithFallback = ({ src, fallback, alt, className }) => {
  const [error, setError] = useState(false);
  
  return (
    <img 
      src={error ? fallback : src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-brand">ASLIYAT</div>
          <div className="nav-links">
            <a href="#about" className="nav-item">About</a>
            <a href="#gallery" className="nav-item">Work</a>
            <a href="#contact" className="nav-item nav-btn">Collaborate</a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="hero-section" id="about">
        <div className="hero-bg-overlay"></div>
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-ring">
              <ImageWithFallback 
                src={PROFILE_PIC} 
                fallback={FALLBACK_PROFILE}
                alt="ASLIYAT اصلیت Profile" 
                className="profile-pic" 
              />
            </div>
            
            <div className="profile-info">
              <h1 className="profile-name">ASLIYAT <span className="urdu-text">اصلیت</span></h1>
              <p className="profile-category">Visual Arts / Filmmaking / Literature</p>
              
              <div className="stats-container">
                <div className="stat-box">
                  <span className="stat-num">340</span>
                  <span className="stat-label">Posts</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num">1.6k</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num">4.8k</span>
                  <span className="stat-label">Following</span>
                </div>
              </div>

              <div className="bio-container">
                <p className="bio-text">
                  Visual Arts | Films | Literature | Shit Posting | Dark Humour | Doodling | Likhai | Music.
                  <br />
                  <span className="collaboration-text">Open for creative collaboration.</span>
                </p>
              </div>

              <div className="action-buttons">
                <button className="primary-btn">Follow</button>
                <button className="secondary-btn">Message</button>
                <a href="https://www.instagram.com/asliyattt/" target="_blank" rel="noreferrer" className="icon-btn" aria-label="Visit Instagram">
                  <svg xmlns="http://www.w3.org/2000/007/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="scroll-text">Discover Works</span>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <div className="section-header">
          <h2 className="section-title">Visual Anthology</h2>
          <div className="filter-pills">
            <button className="pill active">All</button>
            <button className="pill">Doodles</button>
            <button className="pill">Cinematics</button>
            <button className="pill">Likhai</button>
          </div>
        </div>

        <div className="gallery-grid">
          {MOCK_POSTS.map(post => (
            <div 
              key={post.id} 
              className="gallery-item"
              onClick={() => setSelectedPost(post)}
            >
              <div className="gallery-img-container">
                <ImageWithFallback 
                  src={post.image} 
                  fallback={post.fb} 
                  alt={post.title} 
                  className="gallery-img" 
                />
                <div className="gallery-overlay">
                  <div className="gallery-meta">
                    <span className="gallery-title">{post.title}</span>
                    <span className="gallery-likes">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      {post.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <h2 className="footer-logo">ASLIYAT <span className="urdu-text">اصلیت</span></h2>
          <p className="footer-motto">Capturing the raw essence of existence.</p>
          <div className="social-links-footer">
            <a href="https://www.instagram.com/asliyattt/" target="_blank" rel="noreferrer">Instagram</a>
            <span className="divider">•</span>
            <a href="mailto:collaboration@example.com">Email</a>
          </div>
          <p className="copyright">© 2024 ASLIYAT. Visual Arts and Literature.</p>
        </div>
      </footer>

      {/* Modal / Lightbox for post view */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <button className="modal-close" onClick={() => setSelectedPost(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <ImageWithFallback 
              src={selectedPost.image} 
              fallback={selectedPost.fb} 
              alt={selectedPost.title} 
              className="modal-img" 
            />
            <div className="modal-info">
              <h3>{selectedPost.title}</h3>
              <div className="modal-actions">
                <button className="modal-like">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  {selectedPost.likes} Likes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
