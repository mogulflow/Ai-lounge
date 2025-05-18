import '../styles/globals.css';
import ChatWidget from '../components/ChatWidget';
import CharacterSelector from '../components/CharacterSelector';
import VideoIntro from '../components/VideoIntro';
import VoiceEngine from '../components/VoiceEngine';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>MogulFlow AI Lounge</h1>
      <p>Welcome to the hybrid AI experience.</p>
      <CharacterSelector />
      <VideoIntro />
      <VoiceEngine />
      <ChatWidget />
    </div>
  );
}
