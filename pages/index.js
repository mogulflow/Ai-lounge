import '../styles/globals.css';
import ChatWidget from '../components/ChatWidget.js';
import CharacterSelector from '../components/CharacterSelector.js';
import VideoIntro from '../components/VideoIntro.js';
import VoiceEngine from '../components/VoiceEngine.js';

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
