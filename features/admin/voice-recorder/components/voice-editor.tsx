'use client';

import React, { useEffect, useState } from 'react';
import { useSpeechRecognition } from '../useSpeechRecognition';

type VoiceEditorProps = {
  onConfirm: (text: string) => void;
};

export function VoiceEditor({ onConfirm }: VoiceEditorProps) {
  const { transcript, listening, isSupported, startListening, stopListening, error } = useSpeechRecognition('en-US');

  // We keep an "editable" transcript in state so user can modify or type from scratch
  const [editableTranscript, setEditableTranscript] = useState('');

  // When the speech recognition transcript changes, update the editable field
  useEffect(() => {
    setEditableTranscript(transcript);
  }, [transcript]);

  if (!isSupported) {
    return (
      <div className="flex w-full max-w-md flex-col items-center rounded bg-gray-50 p-4 shadow dark:bg-gray-800">
        <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">Voice Editor</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-400">
          Your browser does not support speech recognition. Please type your text below.
        </p>
        <textarea
          rows={5}
          className="w-full rounded border border-gray-300 bg-white p-2 text-gray-800 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-400"
          value={editableTranscript}
          onChange={e => setEditableTranscript(e.target.value)}
        />
        <button
          className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          onClick={() => onConfirm(editableTranscript)}
        >
          Next
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center rounded-lg bg-gray-50 p-4 shadow dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">Voice Editor</h2>

      {error && <p className="mb-2 text-red-500">{error}</p>}

      <button
        onClick={listening ? stopListening : startListening}
        className={`${
          listening
            ? 'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700'
            : 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700'
        } mb-4 rounded px-4 py-2 text-white transition`}
      >
        {listening ? 'Stop Recording Voice' : 'Start Recording Voice'}
      </button>

      <div className="mb-4 w-full">
        <label htmlFor="transcript" className="block text-sm font-medium text-gray-800 dark:text-gray-100">
          Transcript (editable)
        </label>
        <textarea
          id="transcript"
          rows={5}
          className="mt-1 w-full rounded border border-gray-300 bg-white p-2 text-gray-800 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-400"
          value={editableTranscript}
          onChange={e => setEditableTranscript(e.target.value)}
        />
      </div>

      <button
        className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        onClick={() => onConfirm(editableTranscript)}
      >
        Next
      </button>
    </div>
  );
}
