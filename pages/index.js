import Head from 'next/head';
import ChatWidget from '../ChatWidget';
import CharacterSelector from '../CharacterSelector';
import VideoIntro from '../VideoIntro';
import VoiceEngine from '../VoiceEngine';
import '../globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>MogulFlow AI Lounge</title>
      </Head>
      <main className="container">
        <h1>MogulFlow AI Lounge</h1>
        <p>Welcome to your immersive AI experience.</p>

        <CharacterSelector />
        <VideoIntro />
        <ChatWidget />
        <VoiceEngine />
      </main>
    </>
  );
}
