  
  def test_deberia_ser_un_cuadrado_de_4_x_4_asteriscos(self):
    self.assertEqual(capture_stdout(lambda: pass), "****\n****\n****\n****\n")


