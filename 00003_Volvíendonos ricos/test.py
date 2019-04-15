describe("(self):
  def test_el aumentar_fortuna duplica variable global pesos_en_mi_billetera", function () {
    pesos_en_mi_billetera = 100
    aumentar_fortuna()
    self.assertEqual(pesos_en_mi_billetera, 200)


  def test_el aumentar_fortuna se puede llamar múltiples veces", function () {
    pesos_en_mi_billetera = 30
    aumentar_fortuna()
    aumentar_fortuna()
    aumentar_fortuna()
    self.assertEqual(pesos_en_mi_billetera, 240)



