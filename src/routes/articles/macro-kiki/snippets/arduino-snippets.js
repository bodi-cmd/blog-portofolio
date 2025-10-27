export const keypadDemoSnippet = `const byte COLS = 3;
const byte ROWS = 4;
const byte MAX_NUMBER_OF_KEYS_PRESSED = 3;

byte rowPins[ROWS] = { 7, 8, 9, 10 };  // connect to the row pinouts of the keypad
byte colPins[COLS] = { 4, 5, 6 };      // connect to the column pinouts of the keypad    

Keypad keypad(COLS, ROWS, MAX_NUMBER_OF_KEYS_PRESSED, rowPins, colPins);

void setup() {
  keypad.initKeypad();
}

void loop() {
  String pressedKeys = String(keypad.getPressedKeys());
  Serial.println(pressedKeys)
}`;
