import { useState, useRef, useEffect, useCallback } from 'react';

type UseSpeechRecognitionReturn = {
  transcript: string;
  listening: boolean;
  isSupported: boolean;
  startListening: () => void;
  stopListening: () => void;
  error: string | null;
};

export function useSpeechRecognition(lang = 'en-US'): UseSpeechRecognitionReturn {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      ('SpeechRecognition' in window && window.SpeechRecognition) ||
      ('webkitSpeechRecognition' in window && window.webkitSpeechRecognition);

    if (!SpeechRecognition) {
      setIsSupported(false);
      setError('Web Speech API is not supported in this browser.');
      return;
    }

    setIsSupported(true);

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = lang;
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      if (!event.results || event.results.length < 1) return;
      const speechToText = event.results[0][0].transcript;
      setTranscript(prev => (prev ? `${prev} ${speechToText}` : speechToText));
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error);
      setError(event.error);
      setListening(false);
    };

    return () => {
      recognition.stop();
      recognition.onresult = null;
      recognition.onerror = null;
    };
  }, [lang]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) return;
    setTranscript(''); // Optional: Clear the old transcript
    recognitionRef.current.start();
    setListening(true);
  }, []);

  const stopListening = useCallback(() => {
    if (!recognitionRef.current) return;
    recognitionRef.current.stop();
    setListening(false);
  }, []);

  return {
    transcript,
    listening,
    isSupported,
    startListening,
    stopListening,
    error,
  };
}
