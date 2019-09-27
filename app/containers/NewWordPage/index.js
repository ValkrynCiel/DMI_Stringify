import React from 'react';
import H2 from 'components/H2';
import PageWrapper from 'components/PageWrapper';
import NewWordForm from './NewWordForm';

export default function NewWordPage() {
  return (
    <PageWrapper>
      <H2>Add a new word</H2>
      <NewWordForm />
    </PageWrapper>
  );
}
