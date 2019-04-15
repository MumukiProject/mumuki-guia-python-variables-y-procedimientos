describe("versos", function() {
  it("deberia imprimir los versos", function() {
    versos_martin_fierro()
    assert.equal(fakeConsole.toString(), "Aquí me pongo a cantar\nAl compás de la vigüela\nQue el hombre que lo desvela\nUna pena extraordinaria\n")
  })
  it("deberia retornar 0", function() {
    assert.equal(versos_martin_fierro(), 0)
  })

})

