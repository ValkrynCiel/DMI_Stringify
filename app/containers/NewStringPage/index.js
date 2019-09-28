import React from 'react';
import H2 from 'components/H2';
import PageWrapper from 'components/PageWrapper';
import NewStringForm from './NewStringForm';

export default function NewWordPage() {
  return (
    <PageWrapper>
      <H2>Add a new string</H2>
      <NewStringForm />
    </PageWrapper>
  );
}
