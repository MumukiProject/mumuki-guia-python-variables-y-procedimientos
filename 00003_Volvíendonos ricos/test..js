describe("", function() {
  it("el aumentar_fortuna duplica variable global pesos_en_mi_billetera", function () {
    pesos_en_mi_billetera = 100
    aumentar_fortuna()
    assert.equal(pesos_en_mi_billetera, 200)
  })

  it("el aumentar_fortuna se puede llamar múltiples veces", function () {
    pesos_en_mi_billetera = 30
    aumentar_fortuna()
    aumentar_fortuna()
    aumentar_fortuna()
    assert.equal(pesos_en_mi_billetera, 240)
  })

})
