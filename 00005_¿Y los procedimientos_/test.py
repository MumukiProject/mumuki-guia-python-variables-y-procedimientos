  def test_deberia_imprimir_los_versos(self):
    versos_martin_fierro()
    self.assertEqual(fakeConsole.toString(), "Aquí me pongo a cantar\nAl compás de la vigüela\nQue el hombre que lo desvela\nUna pena extraordinaria\n")

  def test_no_deberia_retornar_nada(self):
    self.assertTrue(versos_martin_fierro() === None)




