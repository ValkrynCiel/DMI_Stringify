/**
 * Test the NewStringPage
 */

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { NewStringPage, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';

describe('<NewStringPage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <NewStringPage error={null} note={null} />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('<NewStringForm />', () => {
    const setup = () => {
      const utils = render(
        <Provider store={store}>
          <NewStringPage onAddString={submitSpy} />
        </Provider>,
      );
      const input = utils.getByTestId('input');
      const button = utils.getByTestId('submit');
      return {
        input,
        button,
        ...utils,
      };
    };
    const submitSpy = jest.fn();

    it('should not call addString on button click if there is no text in input', () => {
      const { button, input } = setup();
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.click(button);
      expect(submitSpy).not.toHaveBeenCalled();
    });

    it('should display a form notification on button click if there is no text in input', () => {
      const { button, input, ...utils } = setup();
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.click(button);

      const formNotice = utils.queryByTestId('form-notice');

      expect(formNotice).not.toEqual(null);
      expect(formNotice.textContent).toContain(
        `Looks like you didn't type anything before sending.`,
      );
    });

    it('should call addString on button click if there is text in the input', () => {
      const { button, input } = setup();
      fireEvent.change(input, { target: { value: 'TEST' } });
      fireEvent.click(button);
      expect(submitSpy).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    describe('addString', () => {
      it('should be injected', () => {
        expect(mapDispatchToProps.onAddString).toBeDefined();
      });
    });
  });

  describe('mapStateToProps', () => {
    it('should display an error message if there is one', () => {
      const page = render(
        <Provider store={store}>
          <NewStringPage error="TEST_ERROR" />
        </Provider>,
      );

      const error = page.queryByText('TEST_ERROR');

      expect(error).not.toEqual(null);
    });

    it('should display a notification if there is one', () => {
      const page = render(
        <Provider store={store}>
          <NewStringPage note="TEST_NOTE" />
        </Provider>,
      );

      const note = page.queryByText('TEST_NOTE');

      expect(note).not.toEqual(null);
    });
  });
});
