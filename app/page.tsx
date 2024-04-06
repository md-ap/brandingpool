'use client'
import DOMPurify from 'isomorphic-dompurify';
import dynamic from 'next/dynamic';
import { ParallaxProvider } from "react-scroll-parallax";
import { Arrow, LogoWhite, LogoBlack, XV, GotoTop } from '@/components/svgs';
import CustomGraphic from "@/components/CustomGraphic";
import CustomGraphic2 from "@/components/CustomGraphic2";
import PortfolioItem from "@/components/PortfolioItem";
import ModalCta from '@/components/ModalCta';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const content = {
  hero: {
    title: '15<br />years<br />of<br />branding'
  },
  ctaText: 'Book a call',
  copyright: '© 2023 Branding Pool',
  about: {
    richText1: '<h2>WE´RE DEEPLY ROOTED IN THE POWER OF PURPOSE AND BRINGING BRANDS TO LIFE.</h2><p>Since 2008, we’re a strategic brand agency specialized in creative consulting, leading our clients to create, grow and expand their business by building strong, authentic and inevitably attractive brands.</p><img>',
    richText2: '<p>We are proud to say that our work has helped shape the future. With enjoyable, reliable experiences, and inspiring stories to tell. Thanks to our team of hardworking individuals, and our approach to branding, we have been able to create brands that can, and will thrive in the long run, as well as to serve greater purposes.</p><h2>BRANDS WITH A FUTURE</h2>',
    graphicText: 'MAKING WAVES SINCE 2008',
  },
  portfolio: {
    title: 'BRAND STRATEGY, CREATIVE CONSULTING AND DESIGN OFFICE.',
    subtitle: 'STRATEGY - LED BRANDING',
    richText: '<h2>Full-on branding for brands that work from the inside out.</h2><p>At Branding Pool, we believe that strong foundations and adaptability are key to a healthy, sustainable branding. That’s why our approach centers in finding the true value of each project, to develop relevant and clear statements to create genuine human connections.</p>',
    items: [
      {
        image: '/portfolio/rodeo/rodeo_img.webp',
        animation: '/portfolio/rodeo/rodeo_animation.webp',
        title: 'Restaurante<br />El Rodeo',
      },
      {
        image: 'portfolio/vertical/vertical_img.webp',
        animation: 'portfolio/vertical/vertical_animation.webp',
        title: 'Vertical<br />Climb fitness',
      },
      {
        image: 'portfolio/radioimagen/radioimagen_img.webp',
        animation: 'portfolio/radioimagen/radioimagen_animation.webp',
        title: 'Radioimagen<br />Médica',
      },
      {
        image: 'portfolio/remember/remember_img.webp',
        animation: 'portfolio/remember/remember_animation.webp',
        title: 'Remember Niger<br />Coalition',
      },
      {
        image: 'portfolio/beer/beer_img.webp',
        animation: 'portfolio/beer/beer_animation.webp',
        title: '93<br />Beer / Tap',
      },
      {
        image: 'portfolio/saketori/saketori_img.webp',
        animation: 'portfolio/saketori/saketori_animation.webp',
        title: 'Saketori-ya<br />Japón Contento',
      },
      {
        image: 'portfolio/enerser/enerser_img.webp',
        animation: 'portfolio/enerser/enerser_animation.webp',
        title: 'Enerser<br />Impulsamos el futuro',
      },
      {
        image: 'portfolio/lazu/lazu_img.webp',
        animation: 'portfolio/lazu/lazu_animation.webp',
        title: 'Lazulife<br />Small description',
      }
    ],
    graphic: {
      texts: [
        {
          title: 'Strategy',
          subtitle: 'BRAND CLARITY AND POSITIONING',
        },
        {
          title: 'Strategy',
          subtitle: 'Brand experince',
        },
        {
          title: 'Communication',
          subtitle: 'BRAND EXPRESSION',
        }
      ],
    }
  }
}

const  scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const Home = ()  => {
  return (
    <ParallaxProvider>
      <main className="bg-black text-white flex flex-col items-center">
        <header className="relative flex flex-col justify-center items-center w-full max-w-screen-xl p-20 gap-y-20">
          <span className="flex w-2/3" style={{maxWidth: '441px'}}><LogoWhite /></span>
          <a href="http://instagram.com/somospool" target="_blank" className="absolute right-14 top-14 uppercase text-white border rounded-full p-2 px-3">ig</a>
          <div className="w-full relative">
            <XV />
            <h3 className="uppercase absolute w-full h-full flex items-center text-center justify-center text-white top-0 left-0 right-0 bottom-0"><span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.hero.title) }}></span></h3>
          </div>
        </header>
        <section className="relative flex flex-col items-center justify-center px-24 w-full max-w-screen-xl text-center gap-y-20 pb-24">
          <ReactPlayer url="https://vimeo.com/305846054"/>
          <div className="px-32 flex flex-col gap-12 items-center about">
            <div className="flex flex-col gap-12" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.about.richText1) }} />
            <CustomGraphic text={content.about.graphicText}/>
            <div className="flex flex-col gap-12" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.about.richText2) }} />
            <ModalCta title={content.ctaText} color="text-black bg-white">Hello</ModalCta>
          </div>
        </section>
        <section className="text-black rounded-t-4xl pt-28 px-12 flex flex-col items-center text-center gap-12" style={{background: '#f8f8f8'}}>
          <h2>{content.portfolio.title}</h2>
          <span className="flex w-4"><Arrow /></span>
          <h3>{content.portfolio.subtitle}</h3>
          {content.portfolio?.items.length ?
          <ul className='flex flex-wrap gap-2'>
            {content.portfolio.items.map((item, i) =>
              <li key={`flex portfolio-item-${i}`} className={`${i % 5 === 0 ? 'w-full' : 'w-1/2-gap-2'}`}>
                <PortfolioItem image={item.image} animation={item.animation} title={item.title} />
              </li>
            )}
          </ul>: ''}
          <div className="flex flex-col gap-12" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.portfolio.richText) }}></div>
        </section>
        <section className="pb-32 w-full text-black flex flex-col gap-12 items-center" style={{background: '#f8f8f8'}}>
          <CustomGraphic2 items={content.portfolio.graphic.texts}/>
          <ModalCta title={content.ctaText}>Hello</ModalCta>
        </section>
        <footer className="relative w-full text-black rounded-t-4xl p-12 pt-96 -mt-10" style={{backgroundColor: '#dadada'}}>
          <button className="absolute right-10 top-10 w-6 h-auto" onClick={scrollToTop}><GotoTop /></button>
          <LogoBlack />
          <p className="uppercase">{content.copyright}</p>
        </footer>
      </main>
    </ParallaxProvider>
  );
}

export default Home;
