export const multiplexingSnippet = `char* Keypad::getPressedKeys() {    
  for (int j = 0; j < _cols; j++) {
    for (int k = 0; k < _cols; k++) {
      if (k == j) {
        pinMode(_colPins[k], OUTPUT);
        digitalWrite(_colPins[k], LOW);
      } else {
        pinMode(_colPins[k], INPUT);
      }
    }
    for (int i = 0; i < _rows; i++) {
      int buttonSum = 0;
      for (int k = 0; k < 20; k++) {
        buttonSum += digitalRead(_rowPins[i]);
      }
      uint8_t buttonNewState = buttonSum == 0;
      if (buttonNewState != _keypadState[i][j]) {
        if (buttonNewState != 0) {
          addKeyInList(_pressedButtons, _keys[i][j]);
        } else {
          deleteKeyFromList(_pressedButtons, _keys[i][j]);     
        }
        _keypadState[i][j] = buttonNewState;
      }
    }
  }
  return _pressedButtons;
}`;
