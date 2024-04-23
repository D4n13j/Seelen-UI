import { SeelenWegMode, SeelenWegSide, SeelenWegState } from '../../../utils/interfaces/Weg';
import { createSlice } from '@reduxjs/toolkit';

import { reducersFor, selectorsFor } from '../shared/app/utils';

const initialState: SeelenWegState = {
  enable: true,
  mode: SeelenWegMode.MIN_CONTENT,
  position: SeelenWegSide.BOTTOM,
  size: 40,
  zoomSize: 70,
  margin: 8,
  padding: 8,
  spaceBetweenItems: 8,
  visibleSeparators: true,
};

export const SeelenWegSlice = createSlice({
  name: 'seelenweg',
  initialState,
  selectors: selectorsFor(initialState),
  reducers: reducersFor(initialState),
});

export const SeelenWegActions = SeelenWegSlice.actions;