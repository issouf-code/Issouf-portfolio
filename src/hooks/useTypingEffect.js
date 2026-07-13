import { useEffect, useState } from 'react';

export function useTypingEffect(words, speed = 75, pause = 1400) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text === currentWord) setIsDeleting(true);
        } else if (text === '') {
          setIsDeleting(false);
          setWordIndex((index) => index + 1);
        } else {
          setText(currentWord.slice(0, text.length - 1));
        }
      },
      isDeleting ? speed / 2 : text === currentWord ? pause : speed,
    );

    return () => clearTimeout(timeout);
  }, [isDeleting, pause, speed, text, wordIndex, words]);

  return text;
}
