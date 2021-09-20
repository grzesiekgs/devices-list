import { NextPage } from 'next';
import React from 'react';
import { reduxWrapper } from 'logic/store';
import { DevicesActions } from 'logic/devices/actions';
import { DevicesListConnected, PageLayout } from 'src/components';
import { END } from '@redux-saga/core';

const IndexPage: NextPage = () => (
  <PageLayout>
    <DevicesListConnected />
  </PageLayout>
);

export const getServerSideProps = reduxWrapper.getServerSideProps((store) => async () => {
  store.dispatch(DevicesActions.fetchDevices());
  store.dispatch(END);

  await store.sagaTask.toPromise();

  return {
    props: {}
  };
});

export default IndexPage;
