/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImmediateHelp } from './components/ImmediateHelp';
import { ServicesOverview } from './components/ServicesOverview';
import { ServiceDetailView } from './components/ServiceDetailView';
import { AllServicesView } from './components/AllServicesView';
import { DistrictsDirectoryView } from './components/DistrictsDirectoryView';
import { DistrictDetailView } from './components/DistrictDetailView';
import { SofiaDistrictsHomeSection } from './components/SofiaDistrictsHomeSection';
import { ProcessSection } from './components/ProcessSection';
import { AdministrativeSection } from './components/AdministrativeSection';
import { CatalogSection } from './components/CatalogSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { LegalModal } from './components/LegalModal';
import { InquiryModal } from './components/InquiryModal';
import { servicesData } from './data/servicesData';
import { sofiaDistrictsData, getDistrictBySlug } from './data/districtsData';
import { faqData } from './data/faqData';
import { ActivePage, ServiceItem, SofiaDistrict } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>('organizaciya-na-pogrebenie');
  const [selectedDistrictSlug, setSelectedDistrictSlug] = useState<string>('lyulin');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'cookies' | 'terms' | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState<string>('');

  // Synchronize route with browser URL path
  useEffect(() => {
    const handlePopState = () => {
      const rawPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
      if (!rawPath || rawPath === '') {
        setActivePage('home');
      } else if (rawPath === 'uslugi') {
        setActivePage('uslugi');
      } else if (rawPath === 'sofiya' || rawPath === 'kvartali') {
        setActivePage('districts');
      } else if (rawPath.startsWith('sofiya/')) {
        const slug = rawPath.replace('sofiya/', '');
        const foundDistrict = getDistrictBySlug(slug);
        if (foundDistrict) {
          setSelectedDistrictSlug(foundDistrict.slug);
          setActivePage('district-detail');
        } else {
          setActivePage('districts');
        }
      } else {
        // Check if matching district slug directly
        const districtDirect = getDistrictBySlug(rawPath);
        if (districtDirect) {
          setSelectedDistrictSlug(districtDirect.slug);
          setActivePage('district-detail');
          return;
        }

        // Check if matching service slug
        const found = servicesData.find((s) => s.slug === rawPath);
        if (found) {
          setSelectedServiceSlug(found.slug);
          setActivePage('service-detail');
        } else {
          setActivePage('home');
        }
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: ActivePage, slug?: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'home') {
      window.history.pushState({}, '', '/');
      document.title = 'Траурна агенция Нанси | Траурни услуги в София';
    } else if (page === 'uslugi') {
      window.history.pushState({}, '', '/uslugi');
      document.title = 'Траурни услуги в гр. София – Траурна агенция Нанси';
    } else if (page === 'districts') {
      window.history.pushState({}, '', '/sofiya');
      document.title = 'Траурна агенция Нанси – Райони и квартали в София | 0878 800 157';
    } else if (page === 'district-detail' && slug) {
      setSelectedDistrictSlug(slug);
      window.history.pushState({}, '', `/sofiya/${slug}`);
      const district = getDistrictBySlug(slug);
      if (district) {
        document.title = district.metaTitle;
      }
    } else if (page === 'service-detail' && slug) {
      setSelectedServiceSlug(slug);
      window.history.pushState({}, '', `/${slug}`);
      const service = servicesData.find((s) => s.slug === slug);
      if (service) {
        document.title = `${service.title} в София | Траурна агенция Нанси`;
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (activePage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenInquiry = (topic?: string) => {
    setInquiryTopic(topic || '');
    setInquiryModalOpen(true);
  };

  const currentService: ServiceItem =
    servicesData.find((s) => s.slug === selectedServiceSlug) || servicesData[0];

  const currentDistrict: SofiaDistrict =
    getDistrictBySlug(selectedDistrictSlug) || sofiaDistrictsData[0];

  // Schema.org structured data for SEO and rich snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'Траурна агенция Нанси',
        image: `${typeof window !== 'undefined' ? window.location.origin : ''}/logo-nansi.png`,
        description:
          'Траурна агенция Нанси предлага цялостно съдействие при организация на траурни услуги по квартали в гр. София.',
        telephone: '0878800157',
        email: 'test@test.test',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '[АДРЕС]',
          addressLocality: 'София',
          addressRegion: 'София-град',
          addressCountry: 'BG',
        },
        priceRange: 'Цена при запитване / според ритуала',
        areaServed: sofiaDistrictsData.map((d) => ({
          '@type': 'AdministrativeArea',
          name: `${d.name}, София`,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqData.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#252724] font-sans antialiased pb-16 sm:pb-0">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Top information bar */}
      <TopBar />

      {/* Main sticky navigation */}
      <Header
        activePage={activePage}
        onNavigate={navigateTo}
        onScrollToSection={scrollToSection}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExploreServices={() => scrollToSection('uslugi')}
              onOpenImmediateHelp={() => scrollToSection('kak-pomagame')}
            />

            {/* 2. Immediate Help: "Какво да направите първо?" */}
            <ImmediateHelp />

            {/* 3. Services Overview: "С какво можем да помогнем" */}
            <ServicesOverview
              onSelectService={(slug) => navigateTo('service-detail', slug)}
              onViewAllServices={() => navigateTo('uslugi')}
            />

            {/* 4. Process: "До Вас на всяка стъпка" */}
            <ProcessSection />

            {/* 5. Administrative Assistance (Color: #EDEFEB) */}
            <AdministrativeSection />

            {/* 6. Sofia Neighborhoods Showcase (White: bg-white) */}
            <SofiaDistrictsHomeSection
              onSelectDistrict={(slug) => navigateTo('district-detail', slug)}
              onViewAllDistricts={() => navigateTo('districts')}
            />

            {/* 7. Products / Catalog (Color: #F4F3EE) */}
            <CatalogSection onOpenInquiry={handleOpenInquiry} />

            {/* 7. Pricing Section */}
            <PricingSection onOpenInquiry={handleOpenInquiry} />

            {/* 8. About Section & Safe Trust */}
            <AboutSection />

            {/* 9. Testimonials / social proof */}
            <TestimonialsSection />

            {/* 10. FAQ Section */}
            <FaqSection />

            {/* 11. Contact Section & Minimal Form */}
            <ContactSection />
          </>
        )}

        {activePage === 'uslugi' && (
          <AllServicesView
            onSelectService={(slug) => navigateTo('service-detail', slug)}
            onBackToHome={() => navigateTo('home')}
          />
        )}

        {activePage === 'service-detail' && (
          <ServiceDetailView
            service={currentService}
            onBackToOverview={() => navigateTo('uslugi')}
            onSelectService={(slug) => navigateTo('service-detail', slug)}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {activePage === 'districts' && (
          <DistrictsDirectoryView
            onSelectDistrict={(slug) => navigateTo('district-detail', slug)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {activePage === 'district-detail' && (
          <DistrictDetailView
            district={currentDistrict}
            onBackToDistricts={() => navigateTo('districts')}
            onSelectDistrict={(slug) => navigateTo('district-detail', slug)}
            onOpenInquiry={handleOpenInquiry}
            onNavigateHome={() => navigateTo('home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenLegal={(type) => setLegalModalType(type)}
        onScrollToSection={scrollToSection}
      />

      {/* Mobile Sticky Contact Bar */}
      <MobileStickyBar onOpenInquiry={() => handleOpenInquiry('Общо запитване от мобилен телефон')} />

      {/* Legal Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultTopic={inquiryTopic}
      />
    </div>
  );
}
