from kivy.app import App
from kivy.uix.button import Button
from SevenSegment import SevenSegment

class WindowClockApp(App):


    def build(self):
        a = SevenSegment()
        a.test()
        return a


if __name__ == '__main__':
    WindowClockApp().run()