import CountdownTimer from '@/components/countdown-timer';
import FloralBackground from '@/components/floral-background';
import MusicPlayer from '@/components/music-player';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const FloralDivider = ({ className }: { className?: string }) => (
  <svg
    width="200"
    height="30"
    viewBox="0 0 200 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-accent/70 mx-auto", className)}
    aria-hidden="true"
  >
    <line x1="10" y1="15" x2="80" y2="15" stroke="currentColor" strokeWidth="1" />
    <line x1="190" y1="15" x2="120" y2="15" stroke="currentColor" strokeWidth="1" />
    <path d="M94.2069 15.0001L96.6339 10.6699L100 7.5L103.366 10.6699L105.793 15L103.366 19.3302L100 22.5L96.6339 19.3302L94.2069 15.0001Z" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

export default function Home() {
  const ganeshaImage = PlaceHolderImages.find(p => p.id === 'ganesha-icon');
  
  const haldiMehandiLocation = "Gwari, Vikas Khand 4, Gomti Nagar Lucknow";
  const weddingLocation = "Virat Khand Community Hall, Near Maharaja Agrasen Public School , Gomti Nagar, Lucknow";
  const receptionLocation = "Parvatiya Maha Parishad Bhawan, Near Janeshwar Mishra Park (Gate No: 1), Gomti Nagar, Lucknow";

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <FloralBackground />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 text-center text-primary animate-fade-in">
        <div className="bg-background/80 backdrop-blur-sm p-6 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full border border-accent/20">
          <header className="mb-4 flex flex-col items-center">
            {ganeshaImage && (
              <img
                src={ganeshaImage.imageUrl}
                alt={ganeshaImage.description}
                data-ai-hint={ganeshaImage.imageHint}
                width={80}
                height={80}
                className="mb-4 rounded-full"
              />
            )}
            <h1 className="font-headline text-2xl md:text-3xl text-destructive">
              || श्री गणेशाय नमः ||
            </h1>
          </header>

          <FloralDivider className="mb-6" />

          <div className="mb-6">
            <p className="text-lg md:text-xl font-body mb-2">
              Join us to celebrate the wedding of
            </p>
            <h2 className="font-headline text-5xl md:text-7xl text-primary my-4 flex flex-col items-center justify-center">
              <span>Puneet</span>
              <span className="text-accent font-sans text-4xl my-2 md:hidden">❤️</span>
              <span className="hidden md:inline md:mx-4 text-accent font-sans text-4xl">❤️</span>
              <span>Ritu</span>
            </h2>
          </div>
          
          <CountdownTimer targetDate="2026-02-19T00:00:00" />
          
          <MusicPlayer />

          <FloralDivider className="my-8" />
          
          <div className="mb-8">
            <h3 className="font-headline text-3xl md:text-4xl text-primary mb-2">Haldi & Mehandi</h3>
             <p className="font-headline font-bold text-xl md:text-2xl text-accent">
              Wednesday, 18th February 2026
            </p>
            <p className="font-body text-base md:text-lg mt-4 max-w-md mx-auto">
             {haldiMehandiLocation}
            </p>
            <Button asChild variant="outline" size="sm" className="mt-4 rounded-full border-accent/50 hover:bg-accent/10">
              <a href="https://maps.app.goo.gl/zUTYgthRXMbSTQus5" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" /> View on Map
              </a>
            </Button>
          </div>

          <FloralDivider className="my-8" />
          
           <div className="mb-8">
            <h3 className="font-headline text-3xl md:text-4xl text-primary mb-2">Wedding</h3>
             <p className="font-headline font-bold text-xl md:text-2xl text-accent">
              Thursday, 19th February 2026
            </p>
            <p className="font-body text-base md:text-lg mt-4 max-w-md mx-auto">
             {weddingLocation}
            </p>
             <Button asChild variant="outline" size="sm" className="mt-4 rounded-full border-accent/50 hover:bg-accent/10">
              <a href="https://maps.app.goo.gl/c7hC68c8ub6d3kzD7" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" /> View on Map
              </a>
            </Button>
          </div>
          
          <FloralDivider className="my-8" />

          <div className="mb-8">
            <h3 className="font-headline text-3xl md:text-4xl text-primary mb-2">Reception</h3>
             <p className="font-headline font-bold text-xl md:text-2xl text-accent">
              Saturday, 21st February 2026
            </p>
            <p className="font-body text-base md:text-lg mt-4 max-w-md mx-auto">
             {receptionLocation}
            </p>
            <Button asChild variant="outline" size="sm" className="mt-4 rounded-full border-accent/50 hover:bg-accent/10">
              <a href="https://maps.app.goo.gl/hN9d7WEwCigAm68LA" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" /> View on Map
              </a>
            </Button>
          </div>
          
        </div>

        <footer className="mt-8 text-lg font-headline text-accent/90">
          With love, Puneet & Ritu
        </footer>
      </main>
    </div>
  );
}
