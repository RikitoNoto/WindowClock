from kivy.graphics.context_instructions import Color
from kivy.lang import Builder
from kivy.properties import ListProperty
from kivy.properties import ObjectProperty
from kivy.uix.widget import Widget
from kivy.graphics.instructions import Canvas

class SevenSegment(Widget):
    # top_bar_color = ListProperty([])
    # top_right_bar_color = ListProperty([1,1,1,1])
    # top_left_bar_color = ListProperty([1,1,1,1])
    # middle_bar_color = ListProperty([1,1,1,1])
    # buttom_bar_color = ListProperty([1,1,1,1])
    # buttom_left_bar_color = ListProperty([1,1,1,1])
    # buttom_right_bar_color = ListProperty([1,1,1,1])
    tes = ObjectProperty(None)
    Builder.load_file('SevenSegment.kv')

    def test(self):
        can: Canvas  = self.tes.canvas
        can.remove()
        can.add(Color(1,0,1,1))
        print(self.tes.canvas)