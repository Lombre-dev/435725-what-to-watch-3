import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import {LoadingDataStatus} from '../../consts';
import LoadingDataBlock from './loading-data-block';

const STATUS = LoadingDataStatus.LOADING;

describe(`<LoadingDataBlock />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <LoadingDataBlock status={STATUS} />
      </BrowserRouter>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
