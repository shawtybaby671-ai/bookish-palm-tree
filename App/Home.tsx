// App/page.tsx
import Flashboard from '../components/Flashboard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-neon-purple/20 to-background">
      <div className="pt-10">
        <Flashboard />
      </div>
    </div>
  );
}
