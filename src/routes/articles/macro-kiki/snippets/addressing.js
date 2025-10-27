export const addressing = `int address = 1
              + NUM_OF_OPTIONS * MAX_SIZE_OF_MENU_TITLE                 
              + MAX_SIZE_OF_MACRO_TITLE * NUM_OF_KEYS * NUM_OF_OPTIONS  
              + 2 * NUM_OF_KEYS * menuIndex
              + 2 * index;`;

export const sendingKey = `void sendKey(byte key) {
  if (key == 0xFE) {
    delay(200);
  } else if (key == 0xFF) {
    Keyboard.releaseAll();
  } else if (key >= 0x80) {
    Keyboard.press(key);
  } else {
    Keyboard.write(key);
  }
}`