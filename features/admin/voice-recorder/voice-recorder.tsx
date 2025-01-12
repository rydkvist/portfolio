'use client';

import React, { useState } from 'react';
import { VoiceEditor } from './components/voice-editor';
import { AiSuggestion } from './components/ai-suggestion';

export function VoiceRecorder() {
  const [finalTranscript, setFinalTranscript] = useState<string | null>(null);

  const handleEditorConfirm = (text: string) => {
    setFinalTranscript(text);
  };

  return (
    <div className="flex w-full flex-col items-center">
      {/* If we don't have a finalTranscript yet, show the editor */}
      {!finalTranscript && <VoiceEditor onConfirm={handleEditorConfirm} />}

      {/* If we have finalTranscript, move to AI suggestions */}
      {finalTranscript && <AiSuggestion description={finalTranscript} />}
    </div>
  );
}
