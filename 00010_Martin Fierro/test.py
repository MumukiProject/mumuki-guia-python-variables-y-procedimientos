  
  def test_deberia_imprimir_los_versos(self):
    out = capture_stdout(lambda: versos_martin_fierro())
    self.assertEqual(out, "Aquí me pongo a cantar\nAl compás de la vigüela\nQue el hombre que lo desvela\nUna pena extraordinaria\n")

  def test_deberia_retornar_cero(self):
    self.assertEqual(versos_martin_fierro(), 0)




