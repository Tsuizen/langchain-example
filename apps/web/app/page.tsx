'use client';
import { useEffect } from 'react';
import { Button, Header } from 'ui';
import { OpenAI } from 'langchain/llms/openai';

const model = new OpenAI({
  openAIApiKey: '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',
  temperature: 0.9
});

export default function Page() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await model.call(
        'What would be a good company name a company that makes colorful socks?'
      );
      
    };
    fetchData();
  }, []);

  return (
    <>
      <Header text='Web' />
      <Button />
    </>
  );
}
