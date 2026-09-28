'use client';

import { useEffect } from 'react';
// @ts-ignore — file JavaScript biasa
import { mountInfoApp } from '../lib/infoApp';

export default function Home() {
  useEffect(() => {
    mountInfoApp();
  }, []);

  return (
    <>
      <div id="bar" className="bar" hidden>
        <div className="bar-in">
          <button className="back" id="backBtn" aria-label="Kembali">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <a className="home-link" href="#" id="homeLogo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/logo.png" alt="Beranda" />
          </a>
          <div className="bar-title">
            <b>Klinik Oilia Medical Centre Rorotan</b>
            <span id="barSub"></span>
          </div>
          <button className="lang" id="langBar"></button>
          <button className="pill" id="modePill"></button>
        </div>
      </div>
      <main className="wrap">
        <div id="app"></div>
        <footer id="foot"></footer>
      </main>
    </>
  );
}
